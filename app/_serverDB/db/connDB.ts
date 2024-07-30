import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./models";
import { env } from "@/app/envSchema";

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);

const db = drizzle(conn, { schema });

export default db;
