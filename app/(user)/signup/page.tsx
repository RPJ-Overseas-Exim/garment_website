"use client";
import "./SignUp.css";

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
import SignUp from "@/app/_serverDB/serverUtils/SignUp";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(16),
  confirm_password: z.string().min(8).max(16),
});

export default function SignUpForm() {
  // created a form template
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // check if the confirm password and password is equal or not
    if (values.confirm_password !== values.password) {
      return toast.error("Confirm password and password are not same!!");
    }

    try {
      // register the user
      var responseMessage = await SignUp(values);

      // set the message
      if (responseMessage == "Success") {
        // for success Message
        toast.success("User registered successfully!");
      } else {
        // for error message
        toast.error(responseMessage);
      }
    } catch (err) {
      toast.error("Something went wrong! Please try again later");
      return;
    }
  }

  return (
    <main className="signup">
      {/* Image section */}
      <section className="signup-image">
        <Image
          src={"/assets/images/authentication/signUpImg.webp"}
          alt="Sign-Up"
          width={0}
          height={0}
          sizes="100%"
        />
      </section>

      {/* form section */}
      <section className="signup-form">
        <div className="signup-form__container">
          <div className="form-title">Sign-Up</div>
          <Toaster />
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
                      <Input placeholder="Enter username." {...field} />
                    </FormControl>
                    {/* <FormDescription>Enter your username.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
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
                    {/* <FormDescription className="form-input-description">Enter your password.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* confirm password */}
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
                    {/* <FormDescription>Enter your password.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="form-button">
                Submit
              </Button>

              <div className="form-link">
                Already have a account? <Link href={"/signin"}>Sign In</Link>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
}
