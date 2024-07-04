import "@/styles/bars.css"
import Link from "next/link"
export default function Bars() {
    return <>
    <Link href={"/"}>
    <div className="bar red"></div>
        <div className="bar blue"></div>
        <div className="bar yellow"></div>
        </Link>
    </>
    
}