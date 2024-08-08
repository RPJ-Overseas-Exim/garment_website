import "./orders.css";
import React from "react";
import db from "@/app/_serverDB/db/connDB";
import { CustomOrder } from "@/app/_serverDB/db/models";
import OrderActions from "@/app/_components/AdminMain/AdminComponents/OrderActions/OrderActions";
import { Toaster } from "@/components/ui/sonner";
import AddOrder from "./AddOrder";

export default async function page() {
  // const data = [
  //   {
  //     id: nanoid(12),
  //     name: "John Doe",
  //     number: "123456789",
  //     email: "johndoe@gmail.com",
  //     product: "Zolpidem",
  //   },
  //   {
  //     id: nanoid(12),
  //     name: "Zachary",
  //     number: "123456789",
  //     email: "johndoe@gmail.com",
  //     product: "Zolpidem",
  //   },
  //   {
  //     id: nanoid(12),
  //     name: "Alex",
  //     number: "123456789",
  //     email: "johndoe@gmail.com",
  //     product: "Zolpidem",
  //   },
  //   {
  //     id: nanoid(12),
  //     name: "Joe",
  //     number: "123456789",
  //     email: "johndoe@gmail.com",
  //     product: "Zolpidem",
  //   },
  //   {
  //     id: nanoid(12),
  //     name: "Jack",
  //     number: "123456789",
  //     email: "johndoe@gmail.com",
  //     product: "Zolpidem",
  //   },
  // ];

  let data: {
    number: string;
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date | null;
    product: string;
  }[] = [];

  try {
    data = await db.select().from(CustomOrder);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <article id="top-products">
        <div className="flex w-full justify-between px-4">
          <h2 className="dashboard-home__title">Orders</h2>
          <AddOrder />
        </div>
        <div className="top-products__overflow-wrapper">
          <table className="top-products">
            <thead>
              <tr className="top-products__header">
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
      <Toaster />
    </>
  );
}
