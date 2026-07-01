import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Motion Creative | Scroll-Stopping Ads",
  description: "I turn your products into high-end motion ads — kinetic, sound-designed, platform-native videos built to stop the scroll.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
