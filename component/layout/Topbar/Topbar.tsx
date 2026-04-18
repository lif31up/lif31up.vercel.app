"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import { RecoilRoot } from "recoil";
import DefaultProps from "@/utils/DefaultProps";
import { useRef } from "react";
import { useActivate } from "@/utils/hook/Hooks";
import PopUp from "@/component/common/PopUp";


type TopbarDataType = { height: string }; // TopbarDataType

function Topbar({ data, className }: DefaultProps<TopbarDataType>) {
  const elementRef = useRef<any>(null);
  useActivate(elementRef, data);
  if (!data) return <></>;
  const id: string = "topbar--0";
  const style: TailProperties = {
    box: "w-full h-fit",
    layout: "flex items-center justify-between lg:px-8 lg:pt-4 px-4 pt-2",
    etc: "transition-transform ease-in-out"
  }
  // Render the topbar component
  return (
    <RecoilRoot>
      <section
        className={cn(style) + " " + className}
        ref={elementRef}
        id={id}
        style={{transitionDuration: "1000ms"}}
      >
        <section className="flex items-center gap-1.5">
          <FirstBracketIcon className="mt-0.5 opacity-70" />
          <h1 className="lg:flex hidden _font-notosans font-semibold text-white text-opacity-90">DEV PORTFOLIO</h1>
        </section>
        <section className="flex items-center gap-6">
          <section className="lg:flex hidden items-center gap-6">
            <button>
              <Share08Icon className="opacity-70"/>
            </button>
            <button>
              <MoreVerticalCircle01Icon className="opacity-70"/>
            </button>
          </section>
          <button title="hero" className={cn(HeroButtonStyle)} style={{ height: data.height}}>
            <h2 className="mt-0.5 font-medium _font-notosans text-sm text-white text-opacity-90">
              이 웹 서비스의 레포지토리
            </h2>
          </button>
        </section>
      </section>
      <PopUp />
    </RecoilRoot>
  );
} // Topbar()
export default Topbar;

const HeroButtonStyle: TailProperties = {
  layout: "flex items-center justify-center gap-4",
  bg_border: "bg-indigo-700 bg-opacity-90",
  box: "w-fit px-6 pb-1",
  etc: "lg:rounded-xs rounded-full",
  typo: "text-white text-opacity-70",
}; // style

const FirstBracketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={22} height={22} color={"white"} fill={"none"} {...props}>
      <path d="M6 3C3.58901 4.93486 2 8.24345 2 12C2 15.7565 3.58901 19.0651 6 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 3C20.411 4.93486 22 8.24345 22 12C22 15.7565 20.411 19.0651 18 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const Share08Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} fill={"none"} stroke={"white"} {...props}>
      <path d="M21 6.5C21 8.15685 19.6569 9.5 18 9.5C16.3431 9.5 15 8.15685 15 6.5C15 4.84315 16.3431 3.5 18 3.5C19.6569 3.5 21 4.84315 21 6.5Z" strokeWidth="1.5" />
      <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" strokeWidth="1.5" />
      <path d="M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z" strokeWidth="1.5" />
      <path d="M8.72852 10.7495L15.2285 7.75M8.72852 13.25L15.2285 16.2495" strokeWidth="1.5" />
    </svg>
);
    const MoreVerticalCircle01Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} stroke={"white"} fill={"none"} {...props}>
        <path d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z" strokeWidth="1.5" />
        <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" strokeWidth="1.5" />
        <path d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z" strokeWidth="1.5" />
    </svg>
);
