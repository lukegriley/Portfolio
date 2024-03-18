import "@/styles/footer.css"
import Link from "next/link"

export default function Footer() {
    return (<div className="footer">
        <Link href="https://github.com/lukegriley" className="footerlink">GitHub</Link>
        <Link href="https://linkedin.com/in/luke-g-riley" className="footerlink">LinkedIn</Link>
        <Link href="https://vimeo.com/user215825539" className="footerlink">Vimeo</Link>
        <Link href="mailto:luke_riley@brown.edu"className="footerlink">Email</Link>
    </div>);
}