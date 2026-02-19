import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Diego Carmona | Full-stack Developer",
  description:
    "Diego Carmona's personal portfolio showcasing projects, skills, and contact information. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Diego Carmona",
    "Full-stack Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [
    {
      name: "Diego Carmona",
    },
  ],
  creator: "Diego Carmona",
  publisher: "Diego Carmona",

  openGraph: {
    title: "Diego Carmona | Full-stack Developer",
    description:
      "Diego Carmona's personal portfolio showcasing projects, skills, and contact information. Built with Next.js, TypeScript, and Tailwind CSS.",
    url: "https://carmona.vercel.app",
    siteName: "Diego Carmona Portfolio",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Pitada - Aplicativo de receitas com IA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pitada - Receitas com IA",
    description:
      "Descubra receitas incríveis com os ingredientes que você já tem em casa.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-bglight dark:bg-bgdark">
      <body className={`${geist.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
