"use client";
import "./Verify.css";

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

const formSchema = z.object({
  code: z.string(),
});

export default function Verify() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="verify">
      {/* Image section */}
      <section className="verify-image">
        <Image
          src={"/assets/images/authentication/verification.webp"}
          alt="Reset"
          width={0}
          height={0}
          sizes="100%"
        />
      </section>

      <section className="verify-form">
        <div className="verify-form__container">
          <div>
            <div className="form-title">Verification</div>
            <p className="form-title-description">Verify your code</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* email field */}
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">
                      Verification code
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter code." {...field} />
                    </FormControl>
                    {/* <FormDescription className="form-input-description">
                      Enter your email and we'll send you a link to reset your
                      password.
                    </FormDescription> */}
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
      </section>
    </main>
  );
}
