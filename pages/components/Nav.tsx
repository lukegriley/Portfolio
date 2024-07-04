import "@/styles/nav.css"
import Link from 'next/link'

export interface NavsProps {
    selected:number;
}

export default function Navs(props:NavsProps) {
      const logoClass = props.selected==0 ? "navlink logo" : "navlink logo hiddenlogo";
      const projectsClass = props.selected==1 ? "navlink first selected" : "navlink first";
      const filmsClass = props.selected==2 ? "navlink second selected" : "navlink second";
      const cvClass = props.selected==3 ? "navlink third selected" : "navlink third";
      const contactClass = props.selected==4 ? "navlink fourth selected" : "navlink fourth";
    return (<><div className="nav">
        
        
        {/* <p className={logoClass}>LR</p> */}
        <Link href="/projects" className={projectsClass}>PROJECTS</Link>
        <Link href="/films" className={filmsClass}>FILM</Link>
        <Link href="/cv" className={cvClass}>RESUME</Link>
        <Link href="/contact" className={contactClass}>CONTACT</Link>
        </div></>);
}