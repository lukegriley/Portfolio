import "@/styles/about.css"
import Footer from "./footer"

export default function About() {
    return (<div className="about">
        <div className="bar red"></div>
        <div className="bar blue"></div>
        <div className="bar yellow"></div>
        <div className="inside">
        <div className="nav">
        <a className="navlink first">PROJECTS</a>
        <a className="navlink second">FILM</a>
        <a className="navlink third ">RESUME</a>
        <a className="navlink fourth">CONTACT</a>
        </div>
        
        <div className="intro"> 
            <div className="name-title">Luke Riley</div>
            <div className="introtext">
                <p className="intropara">Hi! I&apos;m a third-year student at Brown University double concentrating Computer Science and Modern Culture &amp; Media. I'm interested in software development, computer graphics, visual effects, and film. This portfolio showcases my work in all areas. </p>
            </div>
        </div>
        
        </div>
        <div className="foot"><Footer/></div>
        
        </div>

    )
}