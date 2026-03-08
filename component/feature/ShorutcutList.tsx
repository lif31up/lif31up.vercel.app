"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import SVG from "@/component/common/SVG";
import { ShortcutDataType } from "@/utils/ReactQuery";

// Main Component
export default function ShortcutList({
  data,
}: DefaultProps<ShortcutDataType[]>) {
  if (!data) return <></>;
  const nodeListOfShortcut: ReactElement[] = [];
  data.forEach((element, index) => {
    nodeListOfShortcut.push(<Shortcut data={element} key={index} />);
  });
  return (
    <section className={"-ml-1 flex lg:gap-2 gap-1"}>{nodeListOfShortcut}</section>
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
    box: "lg:w-12 lg:h-12 lg:w-fit lg:h-fit lg:py-1 lg:-mt-0.5 lg:px-3 w-fit h-8 px-2 ml-1",
  layout: "flex items-center justify-center lg:gap-1.5 gap-2",
  bg_border: "lg:bg-neutral-900 lg:hover:bg-neutral-700 bg-neutral-900 hover:bg-neutral-800 bg-opacity-80 lg:border-0 border-2 border-neutral-800",
  typo: "text-white fill-white text-xs text-neutral-300 font-medium",
  etc: "lg:rounded-md rounded-full",
};
