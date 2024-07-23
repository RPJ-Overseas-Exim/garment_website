import type { Metadata } from "next";
import "./globals.css";
import { poppins, openSans, shrikhand } from "@/libs/utils/fonts";

export const metadata: Metadata = {
  title: "RPJ Garments",
  description: "Get all the latest trending garments at the best prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${poppins.variable} ${shrikhand.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
