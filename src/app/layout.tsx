import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nux-coin.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nux Coin | ERC-20 on Polygon",
    template: "%s | Nux Coin",
  },
  description:
    "Nux Coin is an ERC-20 token on Polygon. ICO is coming soon with low-fee transactions, community utility, and ecosystem growth.",
  keywords: [
    "Nux Coin",
    "ERC-20",
    "Polygon",
    "crypto",
    "ICO",
    "token",
    "blockchain",
    "Web3",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/nux-coin.svg", type: "image/svg+xml" }],
    shortcut: ["/nux-coin.svg"],
    apple: [{ url: "/nux-coin.svg" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Nux Coin",
    title: "Nux Coin | ERC-20 on Polygon",
    description:
      "Nux Coin ICO is coming soon. Built on Polygon for speed and low fees.",
    images: [
      {
        url: "/banner.svg",
        width: 1200,
        height: 675,
        alt: "Nux Coin Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nux_coin_x",
    creator: "@nux_coin_x",
    title: "Nux Coin | ERC-20 on Polygon",
    description:
      "Nux Coin ICO is coming soon. Built on Polygon for speed and low fees.",
    images: ["/banner.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
