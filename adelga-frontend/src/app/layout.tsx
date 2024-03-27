import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bem vindo à Adelga",
  description: "A adega do Adel",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer theme="colored" autoClose={1500} />
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
