import ObserverContainer from "@/component/common/ObserverContainer";
import TailProperties, {cn} from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";

function StoryBoard() {
  const style: TailProperties = {
    box: "w-full h-screen xl:px-80 px-4",
    layout: "flex justify-center flex-col",
    bg_border: "lg:bg-transparent bg-black",
    etc: "lg:border-0 border-t-2 border-neutral-800",
  }
  return <>
    <section className={cn(style)}>
      <div className="w-full h-fit overflow-x-scroll overflow-y-hidden scroll-smooth snap-x" style={{scrollbarWidth: "none"}}>
        <div title="scroll" className="w-fit h-fit flex gap-4 text-neutral-200 text-opacity-90">
          <Story data={fallback} />
          <Story data={fallback} />
          <Story data={fallback} />
          <Story data={fallback} />
        </div>
      </div>

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
    </section>
  </>
}
export default StoryBoard;

type StoryDataType = {
  h1: string;
  p: string;
} // StoryDataType
const fallback: StoryDataType = {
  h1: "hello",
  p: "world"
} // Fallback

function Story({data}: DefaultProps<StoryDataType>) {
  if (!data) return null
  const {h1, p} = data;
  const style: TailProperties = {
    layout: "",
    box: "w-72 h-96 p-6",
    bg_border: "bg-white bg-opacity-10",
    etc: "rounded-3xl",
  } // style
  return <div className={cn(style)}>
    <h1 className="text-white">{h1}</h1>
    <p className="text-white">{p}</p>
  </div>
} // Story