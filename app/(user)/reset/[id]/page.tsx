"use client";
import "./Password.css";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Image from "next/image";
import PasswordInput from "@/libs/components/PasswordInput/PasswordInput";

import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import resetPassword from "@/libs/serverActions/resetPassword";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  password: z.string().min(8).max(16),
  confirm_password: z.string().min(8).max(16),
});

export default function ResetPasswordForm({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (values.confirm_password !== values.password) {
        return toast.info("Confirm password and password is different.");
      }

      const token = params.id;

      const message = await resetPassword(token, values.password);

      if (message !== "Success") {
        return toast.error(message);
      }

      toast.success("Password reset successfully!");
      router.push("/");
    } catch (err) {
      toast.error("Something went wrong. Try again later.");
    }
  }

  return (
    <main className="reset-password">
      {/* Image section */}
      <section className="reset-password-image">
        <Image
          src={"/assets/images/authentication/newPassword.webp"}
          alt="Reset"
          width={0}
          height={0}
          sizes="100%"
        />
      </section>

      <section className="reset-password-form">
        <div className="reset-password-form__container">
          <div>
            <div className="form-title">Create New Password</div>
            <p className="form-title-description">
              Your new password must be different from previous passwords.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* email field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">Password</FormLabel>
                    <FormControl>
                      <PasswordInput<typeof field> field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* confirm password section */}
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <PasswordInput<typeof field> field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="form-button">
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <Toaster richColors closeButton />
      </section>
    </main>
  );
}
