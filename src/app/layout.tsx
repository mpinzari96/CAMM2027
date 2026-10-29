import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAMM Conference 2027 | Christian American Media Ministry",
  description:
    "Join us January 22-23, 2027 at Bible Baptist Church in Sacramento, CA for the CAMM Conference. Equipping creators and advancing the mission through media ministry. Tracks: Video (Beginner), Video (Advanced), Audio, and Projection.",
  keywords: [
    "CAMM Conference",
    "Christian media",
    "church media ministry",
    "video production",
    "audio engineering",
    "church projection",
    "video beginner",
    "video advanced",
    "Sacramento conference",
    "Bible Baptist Church",
    "Christian American Media Ministry",
    "ProPresenter training",
    "live streaming church",
    "worship media",
  ],
  authors: [{ name: "CAMM Conference" }],
  openGraph: {
    title: "CAMM Conference 2027 | Christian American Media Ministry",
    description:
      "January 22-23, 2027 - Bible Baptist Church, Sacramento, CA. Equipping creators and advancing the mission through media ministry. 4 Tracks: Video (B), Video (A), Audio & Projection.",
    type: "website",
    locale: "en_US",
    siteName: "CAMM Conference 2027",
    images: [
      {
        url: "/camm-2027-banner.png",
        width: 3840,
        height: 2160,
        alt: "CAMM Conference 2027 - Christian American Media Ministry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAMM Conference 2027",
    description:
      "January 22-23, 2027 - Equipping creators and advancing the mission through media ministry at Bible Baptist Church, Sacramento, CA.",
    images: ["/camm-2027-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#040811] text-[#F4F8FC] antialiased">
        {children}
      </body>
    </html>
  );
}
