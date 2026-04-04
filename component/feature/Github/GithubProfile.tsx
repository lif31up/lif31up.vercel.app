import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import ReactQueryProvider, {
  descDataAtom, DescDataType,
  githubDataQueryFn,
  GithubDataType,
} from "@/utils/ReactQuery";
import { useRecoilValue } from "recoil";
import ShortcutList from "@/component/feature/ShorutcutList";
import ObserverContainer from "@/component/common/ObserverContainer";

// Type definitions
type PresenterDataType = {
  github: GithubDataType;
  desc: DescDataType;
};

const offlineGithubData = {
  avatar_url: "https://avatars.githubusercontent.com/u/105752792?v=4",
  login: "string",
  id: "string",
  location: "string",
  public_repos: "string",
  followers: "string",
  following: "string",
}; // PresenterDataType

// Main Function
export default function GithubProfile() {
  return (
    <ReactQueryProvider>
      <GithubProfileContainer />
    </ReactQueryProvider>
  );
}

// ContainerFunction
function GithubProfileContainer() {
  const descData = useRecoilValue(descDataAtom);
  const {
    data: github,
    isLoading: isLoadingGithub,
    isError: isErrorGithub,
  } = useQuery({
    queryFn: async () => await githubDataQueryFn(),
    queryKey: ["github-profile"],
  });
  if (isLoadingGithub) return defaultPresent;
  if (!descData) return defaultPresent;
  if (!github) return <GithubProfilePresenter data={{ github: offlineGithubData, desc: descData }} />;
  return <GithubProfilePresenter data={{ github: github, desc: descData }} />;
}
const defaultPresent = <section style={{height: "100vh"}}/>
// PresenterComponent
function GithubProfilePresenter({ data }: DefaultProps<PresenterDataType>) {
  if (!data) return defaultPresent;
  const github: GithubDataType = data.github;
  const desc: DescDataType = data.desc;
  const id: string = "github-profile"
  return (
    <section id={id} className={cn(GithubProfilePresenterStyle)}>
      <section title="right" className="w-full h-fit flex-col lg:p-4 p-0">
        <Image
            src={github.avatar_url}
            alt="profile_img"
            width={16 * 3}
            height={16 * 3}
            className="hidden rounded-full border-2 border-neutral-800 mb-4"
            style={{ boxShadow: "0 0 5vw 5vw rgba(240, 240, 240, 0.008)" }}
        />
        <ObserverContainer animation="_fadeInUp" id="section-1-h1" delay={100} threshold={0.5}>
          <h1 className="text-3xl _font-notosans font-normal leading-tight">
            🔥안녕하세요
          </h1>
          <div className="flex">
            <h1 className="text-4xl _font-notosans font-normal leading-tight">
              프론트엔드와 디자인 최적화를 공부해온 한명환입니다.
            </h1>
            <GithubLinkButton />
          </div>
        </ObserverContainer>
        <div className="hidden text-neutral-400 items-center gap-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={14}
            height={14}
            fill={"none"}
          >
            <path
              d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <h1>{github.location}</h1>
        </div>
        <p className="select-none text-white text-opacity-70 mt-4 lg:bg-white lg:bg-opacity-5 leading-6 px-6 py-5 lg:rounded-3xl text-base">
          안녕하세요. 저는 프론트엔드 개발자 한명환입니다. 제 특기는 최신 웹 기술을 활용해 직관적이고 반응성 높은 인터페이스의 구축입니다. <abbr className="italic font-bold">같은 구조의 인터페이스여도 시각적 디테일, 에니메이션 등에 따라 사용자는 완전 다른 경험을 한다</abbr>가 제 웹 개발 모토입니다.
        </p>
        <ShortcutList data={desc.shortcuts}/>
      </section>
      <section className="absolute bottom-0 flex items-center justify-center w-full h-fit py-4 lg:hidden">
        <ScrollButton data={{target: id, behavior: "smooth"}}/>
      </section>
    </section>
  );
}
const GithubProfilePresenterStyle: TailProperties = {
  typo: "",
  layout: "lg:flex items-center gap-12 md:block lg:mt-4 mt-0 relative",
  box: "w-full lg:h-fit h-screen mb-4 lg:mb-12",
  bg_border: ""
};

const GithubLinkButton = () => {
  return (
    <button
      title="share"
      className={cn(GithubButtonStyle)}
      onClick={() => {
        navigator.clipboard.writeText(window.location.href); // copied the current location url to clipboard
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={16}
        height={16}
        fill={"none"}
      >
        <path
          d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
const GithubButtonStyle: TailProperties = {
  bg_border: "bg-neutral-950 hover:bg-neutral-800",
  typo: "text-white",
  etc: "rounded-full",
  box: "w-fit h-fit p-1",
};

type ScrollButtonData = {target: string; behavior: string}
function ScrollButton({data, className}: DefaultProps<ScrollButtonData>) {
  if (!data) return <></>;
  return <button className={cn(ScrollButtonStyle) + ' ' + className} onClick={()=> ScrollButtonClickHandler(data)}>
    <ScrollButtonPresenter/>
  </button>
} // ScrollButton()

function ScrollButtonClickHandler(data: ScrollButtonData) {
  if (!data) return;
  const {target, behavior}: ScrollButtonData = data;
  const element: HTMLElement | null = document.getElementById(target);
  if (!element) return;
  const elementBottom = element.offsetTop + element.offsetHeight;
  window.scrollTo({
    top: elementBottom, behavior: "smooth"
  });
  return;
} // ScrollButtonClickHandler()

function ScrollButtonPresenter() {
  return <h1>SCROLL DOWN</h1>
}

const ScrollButtonStyle: TailProperties = {
  box: "",
  bg_border: "",
  layout: ""
} // ScrollButtonStyle