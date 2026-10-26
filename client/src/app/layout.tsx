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
  title: "Anand Ahire | Full Stack MERN Developer | TypeScript & Next.js",
  description:
    "Portfolio of Anand Ahire — Aspiring Full Stack Developer specializing in MERN Stack (React, Node.js, Express, MongoDB), Next.js, TypeScript, RESTful APIs, and Google Gemini AI integrations.",
  keywords: [
    "Anand Ahire",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Software Engineer",
    "Pune",
  ],
  authors: [{ name: "Anand Ahire", url: "https://github.com/Anand8595" }],
  creator: "Anand Ahire",
  openGraph: {
    title: "Anand Ahire | Full Stack MERN Developer",
    description:
      "Engineering scalable web systems with MERN Stack, Next.js, TypeScript, and Google Gemini AI.",
    url: "https://github.com/Anand8595",
    siteName: "Anand Ahire Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080c14] text-slate-100">{children}</body>
    </html>
  );
}
