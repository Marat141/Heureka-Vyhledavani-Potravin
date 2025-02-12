import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: integer("id").primaryKey().autoIncrement(),
    email: text("email").notNull().unique(),
    nickname: text("nickname").notNull().unique(),
    passwordHash: text("password_hash").notNull(),
    token: text("token"),
    tokenExpires: integer("token_expires"),
    isEmailVerified: integer("is_email_verified", { mode: "boolean" }).default(false).notNull(),
    profileImage: text("profile_image").default(
        "https://example.com/default-profile.jpg"
    ),
});
