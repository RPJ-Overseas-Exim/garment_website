"use server";

import db from "@/app/_serverDB/db/connDB";
import { User } from "@/app/_serverDB/db/models";
import argon2 from "argon2";
import { eq } from "drizzle-orm";

export default async function (token: string, password: string) {
  const user = await db.select().from(User).where(eq(User.resetToken, token));

  if (!user.length) {
    return "The link is invalid";
  }

  const update = await db
    .update(User)
    .set({ password: await argon2.hash(password, { hashLength: 8 }) })
    .where(eq(User.resetToken, token))
    .returning();

  if (!update.length) {
    return "Something went wrong!";
  }

  return "Success";
}
