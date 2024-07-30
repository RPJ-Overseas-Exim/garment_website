import db from "@/app/_serverDB/db/connDB";
import { Product } from "@/app/_serverDB/db/models";
import "./Shop.css";
import Products from "@/app/_components/Shop/Products/Products";
import { z } from "zod";
import { productZodType } from "@/app/_serverDB/db/modelZodTypes";
import { count } from "drizzle-orm";

export default async function page({
  searchParams,
}: {
  searchParams: { [x: string]: string | string[] | undefined };
}) {
  let page = Number(searchParams["page"]);
  const countProduct = await db.select({ count: count() }).from(Product);
  const lastPage = Math.ceil(countProduct[0].count / 10);

  if (page <= 0 || page > lastPage) page = 1;

  const products: z.infer<typeof productZodType>[] = await db
    .select()
    .from(Product)
    .limit(9)
    .offset((page - 1) * 9);

  return (
    <section className="container shop">
      <aside className="shop__sidebar"></aside>
      <Products products={products} lastPage={lastPage} />
    </section>
  );
}
