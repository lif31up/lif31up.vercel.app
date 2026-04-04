import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Topbar from "@/component/layout/Topbar/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lif31up's Laboratory",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className="snap-start"/>
    <Topbar data={{height: "3rem"}} />
    <main>{children}</main>
    <div className="snap-start"/>
    <div className="_waves_body fixed top-0 left-0">
      <div className="_wave"/>
      <div className="_wave"/>
      <div className="_wave"/>
    </div>
    </body>
    </html>
  );
}
