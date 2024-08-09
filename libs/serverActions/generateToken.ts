"use server";
import db from "@/app/_serverDB/db/connDB";
import { User } from "@/app/_serverDB/db/models";
import { eq } from "drizzle-orm";

import { nanoid } from "nanoid";

export default async function (email: string) {
  const randomToken = nanoid(12);

  try {
    const update = await db
      .update(User)
      .set({ resetToken: randomToken })
      .where(eq(User.email, email))
      .returning();

    if (!update.length) {
      return "";
    }

    return randomToken;
  } catch (err) {
    return "";
  }
}
