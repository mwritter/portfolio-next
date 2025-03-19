import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ImageToastProvider } from "@/providers/ImageToastProvider";
import { ImageToast } from "@/components/ImageToast/ImageToast";
import Header from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mwritter",
  description: "mwritter portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mb-20 ${inter.variable} ${inter.variable} antialiased`}>
        <Header />
        <ImageToastProvider>
          {children}
          <ImageToast />
        </ImageToastProvider>
      </body>
    </html>
  );
}
