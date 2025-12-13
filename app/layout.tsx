import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Federis AI – Banking AI Demo",
  description:
    "Demo environment for bank-grade AI & machine learning projects: model governance, experiment tracking, and model cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Theme accentColor="gray" radius="small">
            <Header />
            <main className="flex-1 bg-gradient-to-b from-zinc-50 via-white to-zinc-100/80 px-4 py-10 dark:from-black dark:via-zinc-950 dark:to-zinc-900/80 sm:px-6">
                {children}
            </main>
            <Footer />
          </Theme>
        </div>
      </body>
    </html>
  );
}
