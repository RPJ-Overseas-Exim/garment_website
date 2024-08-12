import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editOrder } from "./OrderServerActions";
import { toast } from "sonner";
import Spinner from "@/libs/components/Spinner/Spinner";

const formSchema = z.object({
  editName: z.string().min(3, "Name should be at least three letters long"),
  editNumber: z.string().min(10, "Number should be 10 digits long"),
  editEmail: z.string().email(),
  editProduct: z
    .string()
    .min(4, "Please enter a product name greater than 4 letters."),
});

export default async function EditCustomerDialog({
  order,
}: {
  order: {
    id: string;
    name: string;
    email: string;
    product: string;
    number: string;
  };
}) {
  const editForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      editName: order.name,
      editNumber: order.number,
      editEmail: order.email,
      editProduct: order.product,
    },
  });

  const handleSubmit = async (editedOrder: z.infer<typeof formSchema>) => {
    try {
      const res = await editOrder({
        name: editedOrder.editName,
        email: editedOrder.editEmail,
        number: editedOrder.editNumber,
        product: editedOrder.editProduct,
        id: order.id,
      });
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
            aria-disabled={editForm.formState.isSubmitting}
            disabled={editForm.formState.isSubmitting}
          >
            {editForm.formState.isSubmitting ? (
              <Spinner w="4" h="4" b="2" />
            ) : (
              <FaRegEdit />
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Order</DialogTitle>
            <DialogDescription>
              Make any changes to existing order.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={editForm.handleSubmit(handleSubmit)}>
            <div className="flex items-center space-x-2 my-4">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="editName">Name</Label>
                <Input
                  id="editName"
                  {...editForm.register("editName", { required: true })}
                />
                {editForm.formState.errors.editName && (
                  <p className="text-red-400 text-sm m-0">
                    {editForm.formState.errors.editName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 my-4">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="editEmail">Email</Label>
                <Input
                  id="editEmail"
                  {...editForm.register("editEmail", { required: true })}
                />
                {editForm.formState.errors.editEmail && (
                  <p className="text-red-400 text-sm m-0">
                    {editForm.formState.errors.editEmail.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 my-4">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="editNumber">Number</Label>
                <Input
                  id="editNumber"
                  {...editForm.register("editNumber", { required: true })}
                />
                {editForm.formState.errors.editNumber && (
                  <p className="text-red-400 text-sm m-0">
                    {editForm.formState.errors.editNumber.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 my-4">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="editProduct">Product</Label>
                <Input
                  id="editProduct"
                  {...editForm.register("editProduct", { required: true })}
                />
                {editForm.formState.errors.editProduct && (
                  <p className="text-red-400 text-sm my-0">
                    {editForm.formState.errors.editProduct.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3 w-full bg-sky-500 text-white hover:bg-sky-700"
              disabled={editForm.formState.isSubmitting}
            >
              <span>Edit</span>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
