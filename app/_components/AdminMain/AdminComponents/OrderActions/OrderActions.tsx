"use client";
import "./OrderActions.css";
import { toast } from "sonner";
import { deleteOrder, undoDeletion } from "./OrderServerActions";
import EditCustomerDialog from "./EditCustomerDialog";
import { FaDeleteLeft } from "react-icons/fa6";
import { useState } from "react";
import Spinner from "@/libs/components/Spinner/Spinner";

type Customer = {
  id: string;
  name: string;
  number: string;
  email: string;
  product: string;
};

export default function OrderActions({ customer }: { customer: Customer }) {
  const [disabled, setDisabled] = useState(false);
  const undoDelete = async () => {
    try {
      const res = await undoDeletion(customer);
      if (res) {
        toast.success("Deletion Undone successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("This Deletion cannot be undone");
    }
  };

  const handleDelete = async () => {
    setDisabled(true);
    try {
      const res = await deleteOrder(customer.id);
      console.log(res);
      if (res.length > 0) {
        setDisabled(false);
        return toast("Order Deleted successfully", {
          action: {
            label: "undo",
            onClick: undoDelete,
          },
        });
      }
    } catch (error) {
      console.log(error);
      setDisabled(false);
      return toast.error("Order couldn't be deleted");
    }
  };
  return (
    <>
      <td className="order__actions">
        <EditCustomerDialog order={customer} />
        <button
          type="button"
          className="order__icon order__delete"
          title="Delete order"
          onClick={handleDelete}
          aria-disabled={disabled}
          disabled={disabled}
        >
          {disabled ? <Spinner h="4" w="4" b="2" /> : <FaDeleteLeft />}
        </button>
      </td>
    </>
  );
}
