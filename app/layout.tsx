import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Carmona",
  description:
    "Diego Carmona's portfolio website. Explore projects, skills, and experience in web development.",
  metadataBase: new URL("https://carmona.vercel.app"),
  icons: {
    icon: "/website-logo.png", // Ícone principal (favicon)
    shortcut: "/website-logo.png", // Ícone de atalho
    apple: "/website-logo.png", // iOS homescreen icon
  },
  openGraph: {
    title: "Diego Carmona",
    description:
      "Diego Carmona's portfolio website. Explore projects, skills, and experience in web development.",
    url: "https://carmona.vercel.app",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/4bbe9217-0ef3-4aad-bbc2-b7c17d93f633.png?token=ouUFzD5-vFUSVzNunCupfzb2ZE_5WagCRRskhLhS8Hc&height=766&width=1200&expires=33288839910",
        width: 1200,
        height: 766,
        alt: "Diego Carmona Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Carmona",
    description:
      "Diego Carmona's portfolio website. Explore projects, skills, and experience in web development.",
    images: [
      "https://opengraph.b-cdn.net/production/images/4bbe9217-0ef3-4aad-bbc2-b7c17d93f633.png?token=ouUFzD5-vFUSVzNunCupfzb2ZE_5WagCRRskhLhS8Hc&height=766&width=1200&expires=33288839910",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/dc-dark-nobg.png" />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
