"use client";

import GithubRepos from "@/component/feature/Github/GithubRepos";
import GithubProfile from "@/component/feature/Github/GithubProfile";
import { RecoilRoot } from "recoil";
import Projects from "@/component/feature/Desc/Projects";
import DescDataFetcher from "@/component/feature/Desc/DescDataFetcher";
import ObserverContainer from "@/component/common/ObserverContainer";

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <DescDataFetcher />
        <section className="xl:px-80 px-4 xl:mt-32">
          <GithubProfile />
        </section>
          <div className="snap-start"/>
        <section className="w-full h-fit xl:px-80 px-4 mt-32 lg:bg-transparent lg:border-0 bg-black border-t-2 border-neutral-800">
            <section className="w-full h-fit overflow-x-scroll overflow-y-hidden scroll-smooth snap-x mb-16" style={{scrollbarWidth: "none"}}>
              <section className="w-fit h-fit flex gap-4 text-neutral-200 text-opacity-90">
                <div className="w-80 h-96 bg-indigo-300 bg-opacity-20 rounded-2xl px-6 py-5 snap-start" >
                    <p className="w-full h-fit _font-notosans font-normal text-base text-indigo-200 text-opacity-90">
                        자기소개를 해볼게요. 저는 연세대학교 미래캠퍼스 컴퓨터학과를 재학하다 젊은 패기에 중퇴를 했습니다. 웹 개발 부트캠프에서 알게된 친구들과 창업을 하려고 했기 때문입니다. 초기 엔젤 투자 단위에서 불미스러운 일이 발생해서 시작도 못해보고 끝났습니다. 그 이후 큰 방황을 하며 아르바이트를 전전하게 되었습니다. 스펙이라 할 순 없지만 어떤 상황에서도 긍정적으로 일할 수 있게 된 경험이었다고 생각합니다. 그래도 개발을 놓지 못해서 프론트엔드 개발자로서의 커리어를 쌓아가고 싶습니다.
                    </p>
                </div>
                <div className="w-80 h-96 bg-white bg-opacity-5  rounded-2xl px-6 py-5 snap-start">
                    dfdfdf
                </div>
                <div className="w-80 h-96 bg-white bg-opacity-5  rounded-2xl px-6 py-5 snap-start">
                    dfdfdf
                </div>
                <div className="w-80 h-96 bg-white bg-opacity-5  rounded-2xl px-6 py-5 snap-start">
                    dfdfdf
                </div>
              </section>
            </section>

            <ObserverContainer animation="_fadeInUp" id="section--4" threshold={0.5} delay={100}>
                <section className="mt-16 grid justify-items-center">
                    <div className="flex w-fit">
                        <h1 className="text-3xl text-neutral-100 _font-notosans font-normal leading-tight">
                            저는 이런 삶을 살아왔습니다
                        </h1>
                    </div>
                    <div className="flex w-fit">
                        <h1 className="text-4xl text-neutral-100 _font-notosans font-normal leading-tight">
                            기회를 주시면 열심히 할 자신있습니다.
                        </h1>
                    </div>
                </section>
            </ObserverContainer>
          <Projects />
          <GithubRepos />
            <section className="lg:w-full h-fit flex items-center justify-center py-4 lg:mt-16 mt-4 gap-2 lg:text-xs text-xs text-neutral-500">
                <h1>Laboratory Website – @lif31up powered by 2025</h1>
                <a href="https://vercel.com/">▼ Vercel</a>
            </section>
        </section>
      </RecoilRoot>
    </>
  );
}
