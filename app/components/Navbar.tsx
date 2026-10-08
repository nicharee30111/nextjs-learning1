import Link from "next/link";
export default function Navbar() {
  return <header className="lab-header">
    <Link className="skip-link" href="/#main-content">Skip to content</Link>
    <div className="lab-container lab-nav">
      <Link className="lab-logo" href="/#home" aria-label="AMERICANO By AA home">AMERICANO <span>By AA<span className="olive">®</span></span></Link>
      <nav aria-label="Main navigation" className="lab-nav-links">
        <Link href="/#home">Home</Link><Link href="/#menu">Menu</Link><Link href="/#about">About</Link><Link href="/#contact">Contact <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
  </header>;
}
