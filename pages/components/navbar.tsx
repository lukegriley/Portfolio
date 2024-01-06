import Logo from "./logo"
import Link from "@/node_modules/next/link";
import "styles/navbar.css"
import { LogoProps } from "./logo";
export default function Navbar(props: LogoProps) {
    return (<div className="navbar">
        <div className="navlogo">
        <Logo collapse={props.collapse}/>
        </div>
        <div className="navlinks">
        <Link href="/projects" className="hoverable navlink">PROJECTS</Link>
        <Link href="/films" className="hoverable navlink">FILM</Link>
        <Link href="/contact" className="hoverable navlink">CONTACT</Link>
        </div>
        </div>);
}