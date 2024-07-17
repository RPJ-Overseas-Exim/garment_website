import { Poppins, Open_Sans, Shrikhand } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--heading-font",
  weight: ["700", "900"],
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--body-font",
});

export const shrikhand = Shrikhand({
  subsets: ["latin"],
  variable: "--logo-font",
  weight: "400",
});
