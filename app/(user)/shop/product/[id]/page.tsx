import db from "@/app/_serverDB/db/connDB";
import { Product } from "@/app/_serverDB/db/models";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const product = (
    await db.select().from(Product).where(eq(Product.id, params.id))
  )[0];
  if (!product) notFound();
  return <div>{product.name}</div>;
}
