"use client";
import Image from "next/image";
import type { productZodType } from "@/app/_serverDB/db/modelZodTypes";
import { z } from "zod";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationFirst,
  PaginationLast,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

export default function Products({
  products,
  lastPage,
}: {
  products: z.infer<typeof productZodType>[];
  lastPage: number;
}) {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();

  const createQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    return params.toString();
  };
  return (
    <>
      <article className="shop__products">
        {products.map((product, index) => {
          return (
            <div className="product" key={index}>
              <div>
                <Image
                  src={products[0].images}
                  alt={products[0].name}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="product__image"
                />
              </div>

              <div className="product__description">
                <div className="product__description-left">
                  <h4 className="product__name">{product.name}</h4>
                  <div className="product__brand">{product.category}</div>
                </div>

                <div className="product__description-right">
                  <div className="product__price">{product.price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </article>

      <Pagination className="shop__pagination mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationFirst
              href={`/shop?${createQuery("page", "1")}`}
              onClick={() => setPage(1)}
            />
          </PaginationItem>
          {page - 1 >= 1 && (
            <PaginationItem>
              <PaginationLink
                href={`/shop?${createQuery("page", String(page - 1))}`}
                onClick={() => setPage(page - 1)}
                className="bg-[var(--bg-light)] rounded-md hover:bg-gray-200"
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem className="border border-[var(--text-gray)] rounded-md">
            <PaginationLink href={`/shop?${createQuery("page", String(page))}`}>
              {page}
            </PaginationLink>
          </PaginationItem>
          {page + 1 <= lastPage && (
            <PaginationItem>
              <PaginationLink
                href={`/shop?${createQuery("page", String(page + 1))}`}
                onClick={() => setPage(page + 1)}
                className="bg-[var(--bg-light)] rounded-md hover:bg-gray-200"
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLast
              href={`/shop?${createQuery("page", String(lastPage))}`}
              onClick={() => setPage(lastPage)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
