import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Topbar from "@/component/layout/Topbar/Topbar";
import PopUp from "@/component/common/PopUp";
import Footer from "@/component/feature/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lif31up's Laboratory",
  description: "",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div title="start" className="snap-start"/>
      <Topbar data={{height: "3rem"}} />
      <main>{children}</main>
      <Background num={3}/>
    </body>
    </html>
  );
} // RootLayout

function Background({num}: {num:number}) {
  const nodeListOfWave: React.ReactElement[] = [];
  for (let i = 0; i < num; i++) nodeListOfWave.push(<div className="_wave" key={i}/>);
  return <section className="_waves_body fixed top-0 left-0">
    {nodeListOfWave}
  </section>
} // waves
