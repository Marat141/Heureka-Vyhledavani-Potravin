import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db'; // Ujisti se, že importuješ připojení k databázi
import { usersTable } from '$lib/server/schema'; // Importuj schéma tabulky
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

export async function POST({ request }) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return json({ error: 'Vyplňte všechny údaje' }, { status: 400 });
        }

        // Zkontroluj, zda uživatel už existuje
        const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, email)).get();

        if (existingUser) {
            return json({ error: 'Uživatel s tímto e-mailem už existuje' }, { status: 400 });
        }

        // Hashování hesla
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        // Vložení nového uživatele do databáze
        await db.insert(usersTable).values({
            email,
            nickname: email.split('@')[0], // Dočasně nastaví přezdívku jako část emailu
            passwordHash,
            token: randomUUID(), // Vygeneruje unikátní token
            tokenExpires: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString() // Platnost tokenu 24h
        });

        return json({ message: 'Úspěšná registrace' }, { status: 201 });

    } catch (error) {
        console.error('Chyba při registraci:', error);
        return json({ error: 'Chyba serveru' }, { status: 500 });
    }
}
