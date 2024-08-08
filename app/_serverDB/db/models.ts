import {
  index,
  pgTableCreator,
  timestamp,
  varchar,
  decimal,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const createTable = pgTableCreator((name) => name);

export const User = createTable(
  "users",
  {
    id: varchar("id").primaryKey(),
    username: varchar("username").notNull(),
    email: varchar("email").notNull(),
    password: varchar("password", { length: 128 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
    role: varchar("role").default("user"),
    resetToken: varchar("resetToken").default(""),
  },
  (user) => ({
    nameIndex: index("users_usernames").on(user.username),
  })
);

export const CustomOrder = createTable("custom_order", {
  id: varchar("id").primaryKey(),
  name: varchar("name").notNull(),
  product: varchar("product").notNull(),
  email: varchar("email").notNull(),
  number: varchar("number").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }),
});

export const Product = createTable(
  "products",
  {
    id: varchar("id").primaryKey(),
    name: varchar("name").notNull(),
    description: varchar("description").notNull(),
    category: varchar("category").notNull(),
    price: decimal("price").notNull(),
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

export const Cart = createTable("cart", {
  id: varchar("id").primaryKey(),
  userId: varchar("user_id")
    .notNull()
    .references(() => User.id),
});

export const CreateDetail = createTable("create_detail", {
  id: varchar("id").primaryKey(),
  CartId: varchar("cart_id")
    .notNull()
    .references(() => Cart.id),
  ProductId: varchar("product_id")
    .notNull()
    .references(() => Product.id),
});
