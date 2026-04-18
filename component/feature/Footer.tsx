import TailProperties, {cn} from "@/styles/TailProperties";

function Footer({}){
  const style: TailProperties = {
    box: "",
    layout: "",
    bg_border: "bg-transparent",
  } // style
  return <footer className={cn(style)} style={{height: "75vh"}}>
    <h1>HELLO</h1>
    <h2>WORLD</h2>
  </footer>
}
export default Footer;