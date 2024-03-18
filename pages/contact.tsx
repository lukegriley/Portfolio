import "@/styles/contact.css"
import "@/app/globals.css"
import CircleCursor from "./components/circlecursor"
import Navbar from "./components/navbar"
import Navs from "./components/Nav"
import Bars from "./components/bars"



export default function Contact() {
    return (<>
    <Bars/><div className="inside">
    <Navs selected={4}/>
    <div className="contact">
        
        <div className="title">Don't hesitate, say hi!</div>
        <a className="email hoverable" href="mailto:luke_riley@brown.edu">luke_riley@brown.edu</a>

    </div></div></>
    
    )
}