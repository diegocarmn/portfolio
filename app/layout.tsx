import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Carmona",
  description: "Diego Carmona's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
