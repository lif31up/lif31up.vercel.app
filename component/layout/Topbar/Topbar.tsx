"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import { RecoilRoot } from "recoil";
import DefaultProps from "@/utils/DefaultProps";
import { useRef } from "react";
import ToTopButton from "@/component/layout/Topbar/ToTopButton";
import { useActivate } from "@/utils/hook/Hooks";

// ID for the topbar element, used for DOM manipulation
const topbarId: string = "topbar--0";

// ID for the topbar element, used for DOM manipulation
type TopbarDataType = { height: string }; // TopbarDataType

/* Topbar Component:
 * Displays a fixed navigation bar at the top of the page.
 * Adjusts body padding and dynamically adds a border when scrolling on small screens.*/
function Topbar({ data }: DefaultProps<TopbarDataType>) {
  const elementRef = useRef<any>(null);
  // useEffect to handle dynamic styling and scroll behavior
  useActivate(elementRef, data);
  // Return nothing if no data is provided
  if (!data) return <></>;
  // Styling for the topbar container
  const style: TailProperties = {
    layout: "flex items-center justify-center gap-4",
    bg_border: "bg-neutral-950",
    box: "w-fit px-3 pb-1",
    etc: "lg:rounded-xs rounded-md"
  }; // style
  // Render the topbar component
  return (
    <RecoilRoot>
      <section
        className="w-full flex items-center justify-center py-4 transition-transform ease-in-out"
        ref={elementRef}
        id={topbarId}
      >
        <div className={cn(style)} style={{ height: data.height}}>
          <ToTopButton />
          <div className="flex-col gap-1">
            <h1 className="font-bold text-sm text-neutral-200">lif31up</h1>
            <h2 className="font-medium text-xs text-neutral-400">
              Growing Frontend Developer
            </h2>
          </div>
        </div>
      </section>
    </RecoilRoot>
  );
} // Topbar()
export default Topbar;
