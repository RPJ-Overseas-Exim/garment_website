import "./orders.css";
import React from "react";
import db from "@/app/_serverDB/db/connDB";
import { CustomOrder } from "@/app/_serverDB/db/models";
import OrderActions from "@/app/_components/AdminMain/AdminComponents/OrderActions/OrderActions";
import { Toaster } from "@/components/ui/sonner";
import AddOrder from "./AddOrder";
import OrderPagination from "./OrderPagination";
import { count } from "drizzle-orm";

export default async function page({
  searchParams,
}: {
  searchParams: { [x: string]: string };
}) {
  let data: {
    number: string;
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date | null;
    product: string;
  }[] = [];
  let lastPage = 1;

  try {
    const OrderCount = await db.select({ count: count() }).from(CustomOrder);
    lastPage = Math.ceil(OrderCount[0].count / 10);

    data = await db
      .select()
      .from(CustomOrder)
      .limit(10)
      .offset(((Number(searchParams.page) || 1) - 1) * 10);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <article id="orders">
          <div className="flex w-full justify-between px-4">
            <h2 className="dashboard-home__title">Orders</h2>
            <AddOrder />
          </div>
          <div className="orders__overflow-wrapper">
            <table className="orders">
              <thead>
                <tr className="orders__header">
                  <th>#</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Email</th>
                  <th>Product</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((customer, index) => {
                  return (
                    <tr key={customer.id}>
                      <td>{index + 1}</td>
                      <td>{customer.name}</td>
                      <td>{customer.number}</td>
                      <td>{customer.email}</td>
                      <td>{customer.product}</td>
                      <OrderActions customer={customer} />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>
        <div className="pb-6">
          <OrderPagination lastPage={lastPage} />
        </div>
      </div>
      <Toaster richColors closeButton />
    </>
  );
}
