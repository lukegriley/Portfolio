import "@/styles/about.css"
import Footer from "./footer"
import Bars from "./components/bars"
import Navs from "./components/Nav"

export default function About() {
    return (<div className="about">
        <Bars/>
        <div className="inside">
        <Navs selected={0}/>
        
        <div className="intro"> 
            <div className="name-title">Luke Riley</div>
            <div className="introtext">
                <p className="intropara">I&apos;m a fourth-year student at Brown University double concentrating in Computer Science and Modern Culture &amp; Media. I'm interested in software development, computer graphics, visual effects, and film. This portfolio showcases my work in all areas. </p>
            </div>
        </div>
        
        </div>
        <div className="foot"><Footer/></div>
        
        </div>

    )
}