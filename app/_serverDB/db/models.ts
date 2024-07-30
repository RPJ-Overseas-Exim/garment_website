import {
  index,
  pgTableCreator,
  timestamp,
  varchar,
  json,
} from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";
import { sql } from "drizzle-orm";

export const createTable = pgTableCreator((name) => name);

export const User = createTable(
  "users",
  {
    id: varchar("id").default(nanoid(12)).primaryKey(),
    username: varchar("username").notNull(),
    email: varchar("email").notNull(),
    password: varchar("password", { length: 16 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
    role: varchar("role").default("user"),
  },
  (user) => ({
    nameIndex: index("users_usernames").on(user.username),
  })
);

export const Product = createTable(
  "products",
  {
    id: varchar("id").default(nanoid(12)).primaryKey(),
    name: varchar("name").notNull(),
    description: varchar("description").notNull(),
    category: varchar("category").notNull(),
    price: varchar("price").notNull(),
    images: varchar("image").notNull(),
    size: varchar("size").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
  },
  (product) => ({
    nameIndex: index("products_name").on(product.name),
  })
);
