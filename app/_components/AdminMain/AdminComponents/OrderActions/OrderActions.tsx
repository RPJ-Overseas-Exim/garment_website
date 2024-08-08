"use client";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import "./OrderActions.css";
import EditCustomerDialog from "./EditCustomerDialog";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { deleteOrder } from "./OrderServerActions";

type Customer = {
  id: string;
  name: string;
  number: string;
  email: string;
  product: string;
};

export default function OrderActions({ customer }: { customer: Customer }) {
  const handleDelete = async () => {
    try {
      const res = await deleteOrder(customer.id);
      console.log(res);
      if (res.length > 1) {
        toast.success("Order Deleted successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Order couldn't be deleted");
    }
  };
  return (
    <>
      <td className="order__actions">
        <EditCustomerDialog customer={customer} />
        <button
          type="button"
          className="order__icon order__delete"
          title="Delete order"
          onClick={handleDelete}
        >
          <FaDeleteLeft />
        </button>
      </td>
    </>
  );
}
