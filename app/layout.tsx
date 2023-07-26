import "./globals.css";
import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import localFont from "next/font/local";

const openSansFont = localFont({
  src: "./assets/fonts/OpenSans.ttf",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Pharma products",
  description: "Pharma products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${openSansFont.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
