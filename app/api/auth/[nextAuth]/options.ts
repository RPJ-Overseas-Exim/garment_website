import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import argon2 from "argon2";
import db from "@/app/_serverDB/db/connDB";
import { eq } from "drizzle-orm";
import { User } from "@/app/_serverDB/db/models";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (
        credentials
      ): Promise<typeof User.$inferSelect | null> => {
        //  check if the username is present or not
        if (credentials?.username == undefined) {
          return null;
        }

        // get the user data from the database
        const user = await db
          .select()
          .from(User)
          .where(eq(User.username, credentials.username));

        // check the user is present or not
        if (user) {
          return user[0];
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET_KEY,
};
