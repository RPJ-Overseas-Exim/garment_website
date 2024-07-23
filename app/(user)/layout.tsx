import "../globals.css";
import Navbar from "@/libs/components/Navbar/Navbar";
import Footer from "@/libs/components/Footer/Footer";

export default function layoutUser({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
