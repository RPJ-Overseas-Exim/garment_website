"use client";
import "./SignIn.css";

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
import PasswordInput from "@/libs/components/PasswordInput/PasswordInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(16),
});

export default function SignInForm() {
  // router
  const router = useRouter();

  // form schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // sign in user using the next auth sign in function and get the response
      const res = await signIn("credentials", { ...values, redirect: false });

      // if the user is not authenticated then
      if (res?.error) {
        toast.error("Username or password is incorrect");
        return;
      }

      // push the user to the home page
      toast.success("Logged In Successfully!");
      router.push("/");
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  return (
    <main className="signin">
      {/* Image section */}
      <section className="signin-image">
        <Image
          src={"/assets/images/authentication/signInImg.webp"}
          alt="Sign-in"
          width={0}
          height={0}
          sizes="100%"
        />
      </section>

      <section className="signin-form">
        <div className="signin-form__container">
          <div className="form-title">Sign-In</div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* username field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username." {...field} />
                    </FormControl>
                    {/* <FormDescription>Enter your username.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* password field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">Password</FormLabel>
                    <FormControl>
                      <PasswordInput<typeof field> field={field} />
                    </FormControl>
                    <FormDescription className="form-input-description">
                      <Link href={"/reset"} className="forget-password">
                        Forget your password
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="form-button">
                Submit
              </Button>

              <div className="form-link">
                Not have an account? <Link href={"/signup"}>Sign Up</Link>
              </div>
            </form>
          </Form>
        </div>
      </section>
      <Toaster closeButton richColors />
    </main>
  );
}
