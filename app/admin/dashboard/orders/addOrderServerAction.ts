"use server";
import db from "@/app/_serverDB/db/connDB";
import { CustomOrder } from "@/app/_serverDB/db/models";
import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

export default async function addOrder(data: {
  name: string;
  email: string;
  product: string;
  number: string;
}) {
  try {
    const id = nanoid(12);
    const res = await db.insert(CustomOrder).values({ ...data, id });
    revalidatePath("/admin/dashboard/orders");
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't Add user.");
  }
}
