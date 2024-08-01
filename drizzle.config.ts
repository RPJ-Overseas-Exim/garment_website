import { type Config } from "drizzle-kit";
import { env } from "./app/envSchema";

export default {
  schema: "./app/_serverDB/db/models.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  out: "./app/_serverDB/db/migrations/",
  tablesFilter: ["garment_website_*"],
} satisfies Config;
