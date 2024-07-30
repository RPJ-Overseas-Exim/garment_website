import Footer from "@/libs/components/Footer/Footer";
import Navbar from "@/libs/components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="w-[80%] m-[auto] mt-[3em] mb-[3em] flex gap-[1em] flex-col items-center">
        <div className="w-[80%] md:w-[40%] m-[auto]">
          <Image
            src={"/assets/images/authentication/not-found.webp"}
            alt={"404"}
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
        <h2 className="text-[var(--text-dark)] font-[800] text-[2rem] text-center">
          Oops! Page not found
        </h2>
        <p className="text-[var(--text-regular)] font-[500] text-[1rem] text-center">
          The page you are looking for might have been removed or temporarily
          unavailable
        </p>
        <Link
          href="/"
          className="bg-[var(--text-purple)] text-[white] font-[700] text-[1rem] p-[0.7em_1em_0.7em_1em] rounded-[1em]"
        >
          Back to HomePage
        </Link>
      </main>
      <Footer />
    </>
  );
}
