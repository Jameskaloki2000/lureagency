import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lure Design Agency | Premium Motion Creative",
  description: "James Kaloki turns your products into high-end motion ads — kinetic, sound-designed, platform-native videos built to stop the scroll.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
