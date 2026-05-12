import { useEffect, useState } from "react";

const navLinks = [
  ["Dự án", "#projects"],
  ["Cảm hứng", "#inspire"],
  ["Liên hệ", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        background: "rgb(10, 41, 29)",
        color: "rgb(255, 255, 255)",
        borderBottom: "1px solid rgb(17, 97, 17)",
        borderTopColor: "rgb(17, 97, 17)",
        borderRightColor: "rgb(17, 97, 17)",
        borderLeftColor: "rgb(17, 97, 17)",
        fontFamily: "Montserrat",
        transition: "all .35s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#top" className="brand-link">
          <div className="brand-mark">🛡️</div>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0 }}>
            Vi Ngọc Phương
          </span>
        </a>

        <div className="nav-links" style={{ display: "flex", gap: 28 }}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="bs nav-cta" style={{ padding: "7px 18px", fontSize: 12 }}>
          Liên hệ
        </a>
      </div>
    </nav>
  );
}
