"use client";

import Hero from "@/component/feature/Hero";
import { RecoilRoot } from "recoil";
import DescDataFetcher from "@/utils/DescDataFetcher";
import StoryBoard from "@/component/feature/StoryBoard";
import Footer from "@/component/feature/Footer";

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <DescDataFetcher />
        <Hero className="xl:px-72 px-4 xl:mt-32"/>
        <div className="snap-start"/>
        <StoryBoard />
        <div title="end" className="snap-start"/>
        <Footer />
      </RecoilRoot>
    </>
  );
}
