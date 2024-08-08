"use server";
import db from "@/app/_serverDB/db/connDB";
import { CustomOrder } from "@/app/_serverDB/db/models";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function editOrder(order: {
  id: string;
  name: string;
  email: string;
  product: string;
  number: string;
}) {
  try {
    const response = await db
      .update(CustomOrder)
      .set(order)
      .where(eq(CustomOrder.id, order.id))
      .returning({ updatedId: CustomOrder.id });
    revalidatePath("/admin/dashboard/orders");
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Data could not be edited");
  }
}

export async function deleteOrder(id: string) {
  try {
    const response = await db
      .delete(CustomOrder)
      .where(eq(CustomOrder.id, id))
      .returning();
    revalidatePath("/admin/dashboard/orders");
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Data could not be deleted");
  }
}
