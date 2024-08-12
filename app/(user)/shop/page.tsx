import db from "@/app/_serverDB/db/connDB";
import { Product } from "@/app/_serverDB/db/models";
import "./Shop.css";
import Products from "@/app/_components/Shop/Products/Products";
import { z } from "zod";
import { productZodType } from "@/app/_serverDB/db/modelZodTypes";
import { count, eq, and, gte, lte } from "drizzle-orm";
import Filter from "@/app/_components/Shop/Filter/Filter";

export default async function page({
  searchParams,
}: {
  searchParams: { [x: string]: string | string[] | undefined };
}) {
  const { category, size, pmin, pmax } = searchParams;
  let categoryQ;
  let sizeQ;
  let pMinQ;
  let pMaxQ;

  if (category) {
    categoryQ = eq(Product.category, category as string);
  }

  if (size) {
    sizeQ = eq(Product.size, size as string);
  }

  if (pmin) {
    pMinQ = gte(Product.price, pmin as string);
  }

  if (pmax) {
    pMaxQ = lte(Product.price, pmax as string);
  }

  let page = Number(searchParams["page"]);
  const products: z.infer<typeof productZodType>[] = await db
    .select()
    .from(Product)
    .where(and(sizeQ, categoryQ, pMinQ, pMaxQ))
    .limit(9)
    .offset((page - 1) * 9);

  let countProduct = (
    await db
      .select({ count: count() })
      .from(Product)
      .where(and(sizeQ, categoryQ))
  )[0].count;

  const lastPage = countProduct === 0 ? 1 : Math.ceil(countProduct / 9);
  if (page <= 0 || page > lastPage) page = 1;

  return (
    <section className="container shop">
      <Filter />
      <Products products={products} lastPage={lastPage} />
    </section>
  );
}
