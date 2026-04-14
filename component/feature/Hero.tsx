import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import ReactQueryProvider, {
  descDataAtom, DescDataType,
} from "@/utils/ReactQuery";
import { useRecoilValue } from "recoil";
import ShortcutsContainer from "@/component/common/ShorutcutList";
import ObserverContainer from "@/component/common/ObserverContainer";


export default function Hero({className}: DefaultProps<never>) {
  return (
    <section className={className}>
      <ReactQueryProvider>
        <GithubProfileContainer />
      </ReactQueryProvider>
    </section>
  );
} // Hero

function GithubProfileContainer() {
  const descData = useRecoilValue(descDataAtom);
  let present = <div style={{height: "100vh"}}/>
  if (descData) present = <GithubProfilePresenter data={descData} />;
  return present;
} // GithubProfileContainer

function GithubProfilePresenter({ data }: DefaultProps<DescDataType>) {
  if (!data) return null;
  const style: TailProperties = {
    layout: "lg:flex items-center gap-12 md:block relative",
    box: "w-full lg:h-fit h-screen mb-4 lg:mb-4 lg:pt-8",
  }; // style
  const id: string = "github-profile"
  return (
    <div id={id} className={cn(style)}>
      <section title="hero-text" className="w-full h-fit flex-col lg:p-4 p-0 select-none">
        <ObserverContainer animation="_fadeInUp" id="section-1-h1" delay={100} threshold={0.5}>
          <h2 className="text-3xl _font-notosans font-normal leading-tight">🔥안녕하세요</h2>
          <h1 className="text-4xl _font-notosans font-normal leading-tight">프론트엔드와 디자인 최적화를 공부해온 한명환입니다.</h1>
        </ObserverContainer>
        <p className="select-none text-white text-opacity-70 mt-4 lg:bg-white lg:bg-opacity-5 leading-6 px-6 py-5 lg:rounded-3xl text-base">
          안녕하세요. 저는 프론트엔드 개발자 한명환입니다. 제 특기는 최신 웹 기술을 활용해 직관적이고 반응성 높은 인터페이스의 구축입니다. <abbr className="italic font-bold">같은 구조의 인터페이스여도 시각적 디테일, 에니메이션 등에 따라 사용자는 완전 다른 경험을 한다</abbr>가 제 웹 개발 모토입니다.
        </p>
        <ShortcutsContainer data={data.shortcuts}/>
      </section>
    </div>
  );
} // GithubProfilePresenter