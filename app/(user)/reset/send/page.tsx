"use client";
import { sendMail } from "@/libs/helpers/sendMail";
import "./Send.css";

import Image from "next/image";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import generateToken from "@/libs/serverActions/generateToken";

export default function EmailSuccess() {
  async function ResendMail() {
    const email = localStorage.getItem("email") as string;

    if (!email.length) {
      toast.error("Something went wrong!");
      return;
    }

    const token = await generateToken(email);

    try {
      await sendMail(
        email,
        "Link to reset password of RPJ garments account",
        `LINK TO RESET PASSWORD: http://192.168.1.2:3000/reset/${token}`
      );
      toast.success("Email sent successfully!");
    } catch (err) {
      toast.error("Something went wrong. Try again later");
    }
  }

  return (
    <main className="send-email">
      {/* Image section */}
      <section className="send-email-image">
        <Image
          src={"/assets/images/authentication/reset.webp"}
          alt="Reset"
          width={0}
          height={0}
          sizes="100%"
        />
      </section>

      {/* send mail info section */}
      <section className="send-email-info">
        <div className="send-email__container">
          <div className="email-info">
            <div className="email-info-title">Check Email</div>
            <div className="email-info-description">
              {
                "Please check your email inbox and click on the provided link to reset your password. If you don't receive email."
              }
              <button onClick={ResendMail}> Click here to resend</button>
            </div>
          </div>
          <Link href={"/signin"}> {"< Back to Login"} </Link>
          <Toaster richColors closeButton />
        </div>
      </section>
    </main>
  );
}
