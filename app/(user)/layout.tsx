import Navbar from "@/libs/components/Navbar/Navbar";
import Footer from "@/libs/components/Footer/Footer";
import "./userGlobal.css";

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
