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
    "Join us January 22-23, 2027 at Bible Baptist Church in Sacramento, CA for the CAMM Conference. Equipping creators and advancing the mission through media ministry. Training in Video, Audio, Projection & Photography.",
  keywords: [
    "CAMM Conference",
    "Christian media",
    "church media ministry",
    "video production",
    "audio engineering",
    "church projection",
    "photography ministry",
    "Sacramento conference",
    "Bible Baptist Church",
    "Christian American Media Ministry",
  ],
  authors: [{ name: "CAMM Conference" }],
  openGraph: {
    title: "CAMM Conference 2027 | Christian American Media Ministry",
    description:
      "January 22-23, 2027 - Bible Baptist Church, Sacramento, CA. Equipping creators and advancing the mission through media ministry.",
    type: "website",
    locale: "en_US",
    siteName: "CAMM Conference 2027",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAMM Conference 2027",
    description:
      "January 22-23, 2027 - Equipping creators and advancing the mission through media ministry.",
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
      <body className="min-h-screen bg-[#07101E] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
