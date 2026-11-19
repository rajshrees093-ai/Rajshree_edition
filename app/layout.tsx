
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Caveat,
} from "next/font/google";
import "./globals.css";

const editorial = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const handwritten = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Rajshree | The Creative Edition",
  description:
    "The personal portfolio of Rajshree — technology, creativity and curiosity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${editorial.variable} ${sans.variable} ${handwritten.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
