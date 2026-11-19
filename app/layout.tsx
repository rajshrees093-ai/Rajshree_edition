
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajshree | The Creative Edition",
  description:
    "A personal portfolio documenting Rajshree's journey through technology, creativity, projects and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
