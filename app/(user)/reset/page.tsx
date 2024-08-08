"use client";
import "./Reset.css";

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
import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import { VerifiedEmail } from "@/libs/serverActions/verifyEmail";
import { sendMail } from "@/libs/helpers/sendMail";

import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
});

export default function ResetForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const success = await VerifiedEmail(values.email);

    if (!success) {
      toast.error("Email is incorrect or no user is present with that email.");
      return;
    }

    try {
      await sendMail(
        values.email,
        "Link to reset password of RPJ garments account",
        "LINK TO RESET PASSWORD"
      );
      toast.success("Email sent successfully!");

      localStorage.setItem("email", values.email);

      router.push("/reset/send");
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    }
  }

  return (
    <main className="reset">
      {/* Image section */}
      <section className="reset-image">
        <Image
          src={"/assets/images/authentication/reset.webp"}
          alt="Reset"
          width={0}
          height={0}
          sizes="100%"
        />
      </section>

      <section className="reset-form">
        <div className="reset-form__container">
          <div className="form-title">Reset Your Password</div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email." {...field} />
                    </FormControl>
                    <FormDescription className="form-input-description">
                      {
                        "Enter your email and we'll send you a link to reset your password."
                      }
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="form-button">
                Submit
              </Button>

              <div className="form-link">
                Back to <Link href={"/signin"}>Sign In</Link>
              </div>
              <Toaster richColors closeButton />
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
}
