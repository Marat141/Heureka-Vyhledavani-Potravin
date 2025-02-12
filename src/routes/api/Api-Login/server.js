import express from "express";
import cors from "cors";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { users } from "./schema.js";

dotenv.config();

const app = express();
const db = drizzle(new Database(process.env.DATABASE_URL));
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());

// Middleware pro ověření tokenu
const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Přístup zamítnut" });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Neplatný token" });
        req.user = user;
        next();
    });
};

// Registrace
app.post("/register", async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) return res.status(400).json({ error: "Vyplňte všechna pole" });

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await db.insert(users).values({ userName, email, password: hashedPassword });
        res.status(201).json({ message: "Úspěšná registrace" });
    } catch (err) {
        res.status(500).json({ error: "Email už existuje" });
    }
});

// Přihlášení
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await db.select().from(users).where({ email }).get();

    if (!user) return res.status(401).json({ error: "Špatné přihlašovací údaje" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Špatné přihlašovací údaje" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});

// Chráníme endpoint (např. profil)
app.get("/profile", authenticateToken, async (req, res) => {
    const user = await db.select().from(users).where({ id: req.user.id }).get();
    if (!user) return res.status(404).json({ error: "Uživatel nenalezen" });

    res.json({ userName: user.userName, email: user.email });
});

// Start serveru
app.listen(3000, () => console.log("Server běží na http://localhost:3000"));
