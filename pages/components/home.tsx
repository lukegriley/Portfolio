import Link from 'next/link'
import "@/styles/home.css"
export default function Home() {
    return (<Link href="/" className={"logo"} ><img className={"logoImg"} src={"home.png"}/></Link>);
}