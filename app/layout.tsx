import type { Metadata } from "next";
import "./globals.css";
import { poppins, openSans, shrikhand } from "@/libs/utils/fonts";
import db from "@/app/_serverDB/db/connDB";
import { Product } from "@/app/_serverDB/db/models";
import fs from "fs";
import { nanoid } from "nanoid";

export const metadata: Metadata = {
  title: "RPJ Garments",
  description: "Get all the latest trending garments at the best prices",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const data = JSON.parse(
  //   fs.readFileSync("./public/assets/MOCK_DATA.json", "utf-8")
  // );

  // for (const product of data) {
  //   const id = nanoid(12);
  //   await db.insert(Product).values({
  //     ...product,
  //     id,
  //   });
  // }
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${poppins.variable} ${shrikhand.variable}`}
      >
        {children}
        <script src="//code.tidio.co/lpil9uof78wuptwaq72zcbsqucwgxtad.js" async></script>
      </body>
    </html>
  );
}
