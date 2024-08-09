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
import Spinner from "@/libs/components/Spinner/Spinner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, "Name should be at least 3 letters long"),
  number: z.string().min(10, "Number should be at least 10 digits long"),
  email: z.string().email(),
  product: z.string().min(4, "Product should be at least 4 letters long"),
});

export default function AddOrder() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (order: z.infer<typeof formSchema>) => {
    try {
      const res = await addOrder(order);
      console.log(res);
      if (res.length > 0) {
        return toast.success("Order Added successfully.");
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
            className=" flex gap-1 items-center border rounded-none border-gray-400 hover:bg-gray-700 hover:text-white hover:border-gray-700"
            aria-disabled={form.formState.isSubmitting}
            disabled={form.formState.isSubmitting}
          >
            <span>Add Order</span>
            {form.formState.isSubmitting && <Spinner w="4" h="4" b="2" />}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New Order</DialogTitle>
            <DialogDescription>
              Add a new order to the database and send an email.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="flex items-center space-x-2 my-4">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...form.register("name")} />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm m-0">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 my-4">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" {...form.register("email")} />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm m-0">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 my-4">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="number">Number</Label>
                <Input id="number" {...form.register("number")} />
                {form.formState.errors.number && (
                  <p className="text-red-400 text-sm m-0">
                    {form.formState.errors.number.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2 my-4">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="product">Product</Label>
                <Input id="product" {...form.register("product")} />
                {form.formState.errors.product && (
                  <p className="text-red-400 text-sm my-0">
                    {form.formState.errors.product.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3 w-full bg-sky-500 text-white hover:bg-sky-700"
            >
              <span>Add</span>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
