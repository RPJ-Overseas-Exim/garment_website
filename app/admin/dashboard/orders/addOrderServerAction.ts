"use server";
import db from "@/app/_serverDB/db/connDB";
import { CustomOrder } from "@/app/_serverDB/db/models";
import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";
import { sendMail } from "@/libs/helpers/sendMail";
import { Enquiry } from "@/libs/templates/templates";

export default async function addOrder(data: {
  name: string;
  email: string;
  product: string;
  number: string;
}) {
  try {
    const id = nanoid(12);
    const res = await db
      .insert(CustomOrder)
      .values({ ...data, id })
      .returning();
    if (res) {
      await sendMail(
        data.email,
        Enquiry[data.product].subject.replace("{Name}", data.name),
        Enquiry[data.product].body.replace("{Name}", data.name)
      );
    }

    revalidatePath("/admin/dashboard/orders");
    return res;
  } catch (err) {
    revalidatePath("/admin/dashboard/orders");
    if (err instanceof TypeError) {
      return "Order added but email not sent";
    }
    console.error(err);
  }
}
