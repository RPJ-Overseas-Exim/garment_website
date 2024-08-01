CREATE TABLE IF NOT EXISTS "products" (
	"id" varchar PRIMARY KEY DEFAULT 'LrrhqZpAv6HE' NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL,
	"category" varchar NOT NULL,
	"price" integer NOT NULL,
	"image" varchar NOT NULL,
	"size" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY DEFAULT 'kiqqTQ1HFt5N' NOT NULL,
	"username" varchar NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar(16) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"role" varchar DEFAULT 'user'
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_name" ON "products" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_usernames" ON "users" USING btree ("username");