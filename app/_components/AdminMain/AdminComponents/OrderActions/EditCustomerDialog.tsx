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
import { FaRegEdit } from "react-icons/fa";
type Customer = {
  id: string;
  name: string;
  number: string;
  email: string;
  product: string;
};
import { editOrder } from "./OrderServerActions";
import { useState } from "react";
import { toast } from "sonner";

export default function EditCustomerDialog({
  customer,
}: {
  customer: Customer;
}) {
  const [order, setOrder] = useState(customer);

  const handleSubmit = async () => {
    try {
      const res = await editOrder(order);
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
            variant="outline"
            type="button"
            className="order__icon order__edit"
            title="Edit order"
          >
            <FaRegEdit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Order</DialogTitle>
            <DialogDescription>
              Make any changes to the order.
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
              <span>Edit</span>
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
