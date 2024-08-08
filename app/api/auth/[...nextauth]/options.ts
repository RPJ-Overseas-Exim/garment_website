import { NextAuthOptions, Session, User as userType } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import argon2 from "argon2";
import db from "@/app/_serverDB/db/connDB";
import { eq } from "drizzle-orm";
import { User } from "@/app/_serverDB/db/models";

export interface CustomSession extends Session {
  role: string;
}

export interface CustomUser extends userType {
  username?: string;
  role?: string;
}

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
            .where(eq(User.email, credentials.username));

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
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        // assign the username to the token
        token.username = (user as CustomUser).username;

        // assign the admin role only if its is Muzammil
        if ((user as CustomUser).role == "admin") {
          token.role = "admin";
        }
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        // assign the role of the user to the session
        (session.user as CustomSession).role = (token.role as string) || "user";
      }

      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return baseUrl;
    },
  },
};
