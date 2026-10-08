import type { Metadata } from "next";
import Image from "next/image";
import { DrinkCard } from "./components/Coffee";
import pureAmericano from "./image/home/Pure Americano.png";
import coffeeLogo from "./image/logo/AA Coffee Logo.png";
import coconut from "./image/menu/Coconut Americano.png";
import honey from "./image/menu/Honey Americano.png";
import honeyLemon from "./image/menu/Honey Lemon Americano.png";
import lemon from "./image/menu/Lemon Americano.png";
import orange from "./image/menu/Orange Americano.png";
import pineapple from "./image/menu/Pineapple Americano.png";

export const metadata: Metadata = {
  title: "AMERICANO By AA - One Coffee. Endless Possibilities.",
  description: "Specialty espresso meets fresh perspectives. Discover six signature Americanos at AMERICANO By AA.",
};
const drinks = [
  {
    name: "Coconut Americano",
    image: coconut,
    description: "เอสเพรสโซ่เข้มข้นกับน้ำมะพร้าว สดชื่นแบบทรอปิคอล",
  },
  {
    name: "Honey Americano",
    image: honey,
    description: "เอสเพรสโซ่เข้มข้นกับน้ำผึ้ง หวานนุ่มอย่างลงตัว",
  },
  {
    name: "Honey Lemon Americano",
    image: honeyLemon,
    description: "เอสเพรสโซ่เข้มข้นกับน้ำผึ้งและเลมอน หวานเปรี้ยวสดชื่น",
  },
  {
    name: "Lemon Americano",
    image: lemon,
    description: "เอสเพรสโซ่เข้มข้นกับเลมอน ปลุกความสดชื่น",
  },
  {
    name: "Orange Americano",
    image: orange,
    description: "เอสเพรสโซ่เข้มข้นกับส้ม หอมหวานอมเปรี้ยว",
  },
  {
    name: "Pineapple Americano",
    image: pineapple,
    description: "เอสเพรสโซ่เข้มข้นกับสับปะรด สดชื่นในสไตล์ทรอปิคอล",
  },
];
export default function Home() {
  return <div className="coffee-home" id="home">
    <main id="main-content">
      <section className="lab-hero lab-container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> A LITTLE CURIOUS. ALWAYS COFFEE.</p>
          <h1 id="hero-title">One Coffee.<br />Endless <em>Possibilities.</em></h1>
          <p className="hero-description">กาแฟดี ๆ เป็นเพียงจุดเริ่มต้น เราผสานเอสเพรสโซรสชาติเข้มข้นเข้ากับวัตถุดิบสดใหม่และรสชาติที่คาดไม่ถึง เพื่อเปลี่ยนทุกวันธรรมดาของคุณให้พิเศษขึ้นอีกนิด</p>
          <a className="lab-button" href="#menu">View Our Menu <span aria-hidden="true">&#8599;</span></a>
          <p className="hero-footnote">SPECIALTY ESPRESSO <span aria-hidden="true">&middot;</span> FRESH PERSPECTIVES</p>
        </div>
        <div className="hero-photo-frame">
          <Image
            className="hero-photo"
            src={pureAmericano}
            alt="Pure Americano — iced black coffee with coffee beans in warm natural light"
            placeholder="blur"
            preload
            sizes="(max-width: 767px) calc(80vw - 32px), (max-width: 1295px) 36vw, 432px"
          />
        </div>
      </section>
      <div className="lab-philosophy"><span>Thoughtfully brewed.</span><span aria-hidden="true">&#10035;</span><span>Naturally curious.</span><span aria-hidden="true">&#10035;</span><span>Made to brighten your day.</span></div>
      <section id="menu" className="lab-menu lab-container" aria-labelledby="menu-title">
        <div className="section-heading"><div><p className="eyebrow">OUR FAVORITES</p><h2 id="menu-title">Menu<span className="olive"></span></h2></div><p>One familiar coffee.<br />Six fresh ways to fall in love.</p></div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{drinks.map((drink) => <DrinkCard key={drink.name} {...drink} />)}</div>
        <p className="menu-note">A taste of what we do. Crafted to enjoy, one sip at a time.</p>
      </section>
      <section id="about" className="lab-story" aria-labelledby="story-title"><div className="lab-container story-grid">
        <div className="story-logo-block">
          <div className="story-logo-circle">
            <Image
            className="story-logo"
            src={coffeeLogo}
            alt="AA Coffee logo — a coffee cup beneath a rising sun"
            placeholder="blur"
            sizes="(max-width: 767px) calc(100vw - 40px), 403px"
            />
          </div>
          <p>COFFEE. CURIOSITY. CONNECTION.</p>
        </div>
        <div><p className="eyebrow">OUR STORY</p>
        <h2 id="story-title">Rooted in coffee.<br /><em>Open to possibility.</em></h2>
        <p>AMERICANO By AA เริ่มต้นจากความเชื่อเรียบง่ายว่า กาแฟที่ดีควรมีรสชาติเป็นของตัวเอง แม้จะถูกเติมแต่งด้วยความคิดสร้างสรรค์</p>
        <p>เราจึงเลือกกาแฟโรบัสต้าจาก <b>เขาทะลุ จังหวัดชุมพร</b> แหล่งกาแฟไทยที่ขึ้นชื่อเรื่องรสชาติเข้มข้น หนักแน่น และกลิ่นหอมอันเป็นเอกลักษณ์ มาเป็นหัวใจของทุกแก้ว</p>
        <p>ไม่ว่าจะเป็นความสดชื่นของส้ม ความเปรี้ยวละมุนของเลมอน หรือความหอมหวานของน้ำผึ้ง เราอยากให้ทุกส่วนผสมช่วยเปิดมิติใหม่ของรสชาติ โดยไม่กลบเสน่ห์ของกาแฟ</p>
        <a className="story-link" href="#contact">Let&apos;s connect <span aria-hidden="true">&#8599;</span></a></div>
      </div></section>
    </main>
    <footer id="contact" className="lab-footer lab-container">
      <div><a className="lab-logo" href="#home">AMERICANO <span>By AA<span className="olive">&reg;</span></span></a><p>Your daily coffee. A new perspective.</p></div>
      <div className="footer-contact"><p className="eyebrow">SAY HELLO</p><span>nicharee30111@gmail.com</span><small>Fictional brand &middot; Showcase concept</small></div>
      <div className="footer-bottom"><span>&copy; 2026 AMERICANO By AA</span><a href="#home">Back to top &#8593;</a><span>BREWED WITH CURIOSITY.</span></div>
    </footer>
  </div>;
}
