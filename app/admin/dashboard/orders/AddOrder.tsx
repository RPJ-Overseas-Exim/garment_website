"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import addOrder from "./addOrderServerAction";

type Customer = {
  name: string;
  number: string;
  email: string;
  product: string;
};

export default function AddOrder() {
  const [order, setOrder] = useState<Customer>({
    name: "",
    number: "",
    email: "",
    product: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await addOrder(order);
      console.log(res);
      if (res.length > 0) {
        return toast.success("Order updated successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            size="sm"
            className="px-3 border rounded-none border-gray-400 hover:bg-gray-700 hover:text-white hover:border-gray-700"
          >
            <span>Add Order</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New Order</DialogTitle>
            <DialogDescription>
              Add a new order to the database and send an email.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue={order.name}
                onChange={(e) => setOrder({ ...order, name: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                defaultValue={order.email}
                onChange={(e) => setOrder({ ...order, email: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="number">Number</Label>
              <Input
                id="number"
                defaultValue={order.number}
                onChange={(e) => setOrder({ ...order, number: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="product">Product</Label>
              <Input
                id="product"
                defaultValue={order.product}
                onChange={(e) =>
                  setOrder({ ...order, product: e.target.value })
                }
              />
            </div>
          </div>
          <DialogClose asChild>
            <Button
              type="submit"
              size="sm"
              className="px-3 bg-sky-500 text-white hover:bg-sky-700"
              onClick={handleSubmit}
            >
              <span>Add</span>
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
