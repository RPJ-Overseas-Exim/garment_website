import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import argon2 from "argon2";
import db from "@/app/_serverDB/db/connDB";
import { eq } from "drizzle-orm";
import { User } from "@/app/_serverDB/db/models";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (
        credentials
      ): Promise<typeof User.$inferSelect | null> => {
        try {
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
            // check that the password is right or wrong
            const checkPassword = await argon2.verify(
              user[0].password,
              credentials.password
            );

            // check the condition of the password
            if (!checkPassword) {
              return null;
            }

            // return the user
            return user[0];
          } else {
            return null;
          }
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
};
