import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Inspiration from "./components/Inspiration";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import TechMarquee from "./components/TechMarquee";

const ACCENT_COLOR = "#064b32";

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", ACCENT_COLOR);
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <ProjectsSection />
        <Inspiration />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
