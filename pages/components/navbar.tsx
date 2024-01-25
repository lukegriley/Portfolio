import Logo from "./logo"
import Link from 'next/link'
import "@/styles/navbar.css"
import { LogoProps } from "./logo";
import { useState, useEffect } from 'react';

export default function Navbar(props: LogoProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      // Update isMobile state based on screen width
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${isMobile && isCollapsed ? 'collapsed' : ''}`}>
      <div className="navlogo">
        <Logo collapse={props.collapse} />
      </div>
      {isMobile ? (
        <div className={`navlinks ${isCollapsed ? 'collapsed' : ''}`}>
          <div className="menu-icon hoverable" onClick={toggleCollapse}>
            Menu
          </div>
          <Link href="/projects" className="hoverable navlink">
            PROJECTS
          </Link>
          <Link href="/films" className="hoverable navlink">
            FILM
          </Link>
          <Link href="/cv" className="hoverable navlink">
            CV
          </Link>
          <Link href="/contact" className="hoverable navlink">
            CONTACT
          </Link>
        </div>
      ) : (
        <div className="navlinks">
          <Link href="/projects" className="hoverable navlink">
            PROJECTS
          </Link>
          <Link href="/films" className="hoverable navlink">
            FILM
          </Link>
          <Link href="/cv" className="hoverable navlink">
            CV
          </Link>
          <Link href="/contact" className="hoverable navlink">
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
}
