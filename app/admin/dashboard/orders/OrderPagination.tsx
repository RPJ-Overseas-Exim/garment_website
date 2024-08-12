"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationFirst,
  PaginationLast,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OrderPagination({ lastPage }: { lastPage: number }) {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();

  const createQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    return params.toString();
  };
  return (
    <Pagination className="shop__pagination mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst
            href={`/admin/dashboard/orders?${createQuery("page", "1")}`}
            onClick={() => setPage(1)}
          />
        </PaginationItem>
        {page - 1 >= 1 && (
          <PaginationItem>
            <PaginationLink
              href={`/admin/dashboard/orders?${createQuery(
                "page",
                String(page - 1)
              )}`}
              onClick={() => setPage(page - 1)}
              className="bg-[var(--bg-light)] rounded-md hover:bg-gray-200"
            >
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem className="border border-[var(--text-gray)] rounded-md">
          <PaginationLink
            href={`/admin/dashboard/orders?${createQuery(
              "page",
              String(page)
            )}`}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
        {page + 1 <= lastPage && (
          <PaginationItem>
            <PaginationLink
              href={`/admin/dashboard/orders?${createQuery(
                "page",
                String(page + 1)
              )}`}
              onClick={() => setPage(page + 1)}
              className="bg-[var(--bg-light)] rounded-md hover:bg-gray-200"
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLast
            href={`/admin/dashboard/orders?${createQuery(
              "page",
              String(lastPage)
            )}`}
            onClick={() => setPage(lastPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
