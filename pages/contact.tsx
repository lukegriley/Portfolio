import "../styles/contact.css"
import "../app/globals.css"
import CircleCursor from "./components/circlecursor"
import Navbar from "./components/navbar"

export default function Contact() {
    return (<><Navbar collapse={false}/>
    <CircleCursor/><div className="contact">
        
        <h1 className="title">Say hello!</h1>
        <a className="email hoverable" href="mailto:luke_riley@brown.edu">luke_riley@brown.edu</a>

    </div></>
    
    )
}