import type { Metadata } from "next";
import StructuredData from "./components/StructuredData";
import { Geist, Nunito } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


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
  metadataBase: new URL("https://diegocarmona.me"),
  title: "Diego Carmona | Software Developer",
  description:
    "Diego Carmona — Software Developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and web development work.",
  alternates: {
    canonical: "https://diegocarmona.me",
  },
  keywords: [
    "Diego Carmona",
    "Diego Carmona developer",
    "Software Developer Portfolio",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "React Next.js portfolio",
    "Diego Carmona desenvolvedor",
    "Diego Carmona dev",
  ],
  authors: [
    {
      name: "Diego Carmona",
    },
  ],
  creator: "Diego Carmona",
  publisher: "Diego Carmona",
  category: "technology",
  applicationName: "Diego Carmona Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Diego Carmona | Software Developer",
    description:
      "Diego Carmona — Software Developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and web development work.",
    url: "https://diegocarmona.me",
    siteName: "Diego Carmona Portfolio",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://diegocarmona.me/preview.png",
        width: 1200,
        height: 630,
        alt: "Diego Carmona Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diego Carmona | Software Developer",
    description:
      "Diego Carmona — Software Developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and web development work.",
    images: ["https://diegocarmona.me/preview.png"],
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
      <head>
        <StructuredData />
      </head>
      <body className={`${geist.variable} ${nunito.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
