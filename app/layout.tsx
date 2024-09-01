"use client";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site-config";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeToggle from "@/components/theme-toggle"; // Import the ThemeToggle component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            <ThemeToggle /> {/* Add the ThemeToggle component here */}
            <main className="pt-16">{children}</main>
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
