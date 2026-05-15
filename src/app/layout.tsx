import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/portfolio-data";
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
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Game Developer",
    "Portfolio",
    "Roblox",
    "Luau",
    "Java",
    "libGDX",
    "Next.js",
    "Blender",
    "3D Modeling",
    "Computer Engineering",
    "Universitas Indonesia",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
    >
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden select-none w-full max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}
