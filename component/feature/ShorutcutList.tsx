"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import SVG from "@/component/common/SVG";
import { ShortcutDataType } from "@/utils/ReactQuery";

// Main Component
export default function ShortcutList({
  data, className,
}: DefaultProps<ShortcutDataType[]>) {
  if (!data) return <></>;
  const nodeListOfShortcut: ReactElement[] = [];
  data.forEach((element, index) => {
    nodeListOfShortcut.push(<Shortcut data={element} key={index} />);
  });
  return (
    <section className={"-ml-1 flex lg:gap-2 gap-1 lg:mt-5"}>{nodeListOfShortcut}</section>
  );
}

// Render Component
function Shortcut({ data }: DefaultProps<ShortcutDataType>) {
  if (!data) return null;
  const onClick = () => {
    window.open(data.url);
  };
  return (
    <button onClick={onClick} className={cn(ShortcutStyle)} title={data.url}>
      <SVG
        className="pointer-events-none"
        data={{
          svg_url: data.svg_url,
          width: 16,
          height: 16,
          fill: "currentColor",
          color: "transparent",
        }}
      />
      { window.innerWidth > 0 ? <h1 className="first-letter:uppercase mb-0.5">{data.name}</h1> : <></> }
    </button>
  );
}
const ShortcutStyle: TailProperties = {
  box: "lg:w-12 lg:h-12 lg:w-fit lg:h-fit lg:py-3 lg:-mt-0.5 lg:px-5 w-fit h-8 px-4 ml-1",
  layout: "flex items-center justify-center lg:gap-1.5 gap-2",
  bg_border: "bg-white lg:bg-opacity-5 lg:hover:bg-opacity-10 hover:bg-opacity-10 ",
  typo: "text-xs text-neutral-400 font-medium",
  etc: "rounded-full",
};
