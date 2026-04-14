"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, {cn} from "@/styles/TailProperties";
import {useState} from "react";

function PopUp({className}:DefaultProps<never>) {
  return <section className={className}>
    <PopUpPresenter/>
  </section>
} // PopUp
export default PopUp;

function PopUpPresenter() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const id: string = "popup--0"
  const style: TailProperties = {
    box: "w-full h-16 px-4 pb-1",
    layout: "flex items-center justify-start",
    bg_border: "bg-transparent hover:bg-white hover:bg-opacity-15",
    typo: "_font-notosans text-xs text-white text-opacity-70 font-semibold",
    etc: "relative z-10 rounded-md cursor-pointer"
  } // style
  const clickHandler = () => setIsActive(false);
  if (isActive) return (
    <section className="w-full px-6 mt-4 absolute">
      <div id={id} className={cn(style)} onClick={clickHandler}>
        <InformationCircleIcon />
        <div className="absolute left-14">
          <h1 className="text-sm font-bold">현재 구인구직 중입니다.</h1>
          <h2 className="mt-0.5">한명환의 깃허브 페이지로 이동하려면 <a href="" className="underline">여기</a>를 클릭하세요.</h2>
        </div>
        {/*<button onClick={clickHandler} className="absolute right-4">X</button>*/}
      </div>
    </section>
  )
  else return null;
} // PopUpPresenter

const InformationCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"currentColor"} fill={"none"} {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
    <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);
