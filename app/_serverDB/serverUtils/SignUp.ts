"use server";
import { eq, or } from "drizzle-orm";
import db from "../db/connDB";
import { User } from "../db/models";
import { nanoid } from "nanoid";

export default async function SignUp({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): Promise<string> {
  try {
    // check if the user already exists with the same email or username
    const user = await db
      .select()
      .from(User)
      .where(or(eq(User.email, email), eq(User.username, username)));

    // if user present then return the error message
    if (user.length > 0) {
      return "The user with same username or email is already present.";
    }

    // create the nanoid
    var id = nanoid(12);
    await db
      .insert(User)
      .values({ id: id, username: username, email: email, password: password });

    // return a success message
    return "Success";
  } catch (err) {
    console.log(err);

    // return a error message
    return "Something went wrong! Please try again later";
  }
}
