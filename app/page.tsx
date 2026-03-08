"use client";

import GithubRepos from "@/component/feature/Github/GithubRepos";
import GithubProfile from "@/component/feature/Github/GithubProfile";
import { RecoilRoot } from "recoil";
import Interests from "@/component/feature/Desc/Interests";
import SVG from "@/component/common/SVG";
import Projects from "@/component/feature/Desc/Projects";
import DescDataFetcher from "@/component/feature/Desc/DescDataFetcher";

export default function Home() {
  return (
    <section>
      <RecoilRoot>
        <DescDataFetcher />
        <section className="xl:px-80 px-4">
          <GithubProfile />
        </section>
        <section className="xl:px-80 px-4 mt-8 lg:bg-transparent lg:border-0 bg-black border-t-2 border-neutral-800">
          <Projects />
          <GithubRepos />
            <section className="lg:w-full h-fit flex items-center justify-center py-4 lg:mt-16 mt-4 gap-2 lg:text-xs text-xs text-neutral-500">
                <h1>Laboratory Website – @lif31up powered by 2025</h1>
                <a href="https://vercel.com/">▼ Vercel</a>
            </section>
        </section>
      </RecoilRoot>
    </section>
  );
}
