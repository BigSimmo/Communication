import {
  pgTable,
  text,
  serial,
  integer,
  doublePrecision,
  timestamp,
} from "drizzle-orm/pg-core";

// Users Table
export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type User = typeof usersTable.$inferSelect;

// Favourites Table
export const favouritesTable = pgTable("favourites", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  cardId: text("card_id").notNull(),
  type: text("type").notNull(), // 'card' | 'phrase'
  phraseText: text("phrase_text"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type InsertFavourite = typeof favouritesTable.$inferInsert;
export type Favourite = typeof favouritesTable.$inferSelect;

// Playbooks Table
export const playbooksTable = pgTable("playbooks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  description: text("description"),
  cardIds: text("card_ids").array().notNull(), // Array of technique card IDs
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type InsertPlaybook = typeof playbooksTable.$inferInsert;
export type Playbook = typeof playbooksTable.$inferSelect;

// Drill/SRS Progress Table
export const drillProgressTable = pgTable("drill_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  cardId: text("card_id").notNull(),
  interval: integer("interval").notNull(),
  repetition: integer("repetition").notNull(),
  efactor: doublePrecision("efactor").notNull(),
  nextReviewDate: text("next_review_date").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type InsertDrillProgress = typeof drillProgressTable.$inferInsert;
export type DrillProgress = typeof drillProgressTable.$inferSelect;
