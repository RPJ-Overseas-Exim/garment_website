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

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(16),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
    </main>
  );
}
