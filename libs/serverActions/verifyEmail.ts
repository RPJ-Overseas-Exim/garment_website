"use server";

import db from "@/app/_serverDB/db/connDB";
import { User } from "@/app/_serverDB/db/models";
import { eq } from "drizzle-orm";

export async function VerifiedEmail(email: string) {
  const user = await db.select().from(User).where(eq(User.email, email));

  if (!user.length) {
    return false;
  }

  return true;
}
