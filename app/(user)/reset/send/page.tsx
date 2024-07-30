"use client";
import "./Send.css";

import Image from "next/image";
import Link from "next/link";

export default function EmailSuccess() {
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
              Please check your email inbox and click on the provided link to
              reset your password. If you don't receive email.
              <Link href={""}> Click here to resend</Link>
            </div>
          </div>
          <Link href={"/signin"}> {"< Back to Login"} </Link>
        </div>
      </section>
    </main>
  );
}
