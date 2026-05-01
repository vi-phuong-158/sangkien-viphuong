import React, { useState, useRef, lazy, Suspense } from "react";
import { PROJECTS } from "./data/projects";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const TechStack = lazy(() => import("./components/TechStack"));
const About = lazy(() => import("./components/About"));
const ProjectCard = lazy(() => import("./components/ProjectCard"));
const ProjectModal = lazy(() => import("./components/ProjectModal"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const GlowScene = lazy(() => import("./components/GlowScene"));

const LoadingFallback = () => <div className="h-20" />;

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const scrollRef = useRef(null);

  const activeProject = PROJECTS.find((p) => p.id === activeModal);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="min-h-screen relative bg-police-dark text-police-text font-sans selection:bg-police-accent/30 selection:text-police-text">
        <GlowScene />

        <Navbar />

        {/* content wrapper */}
        <div
          ref={scrollRef}
          className="max-w-[480px] mx-auto px-5 relative z-[1]"
        >
          <HeroSection />

          <About />
          
          <TechStack />

          {/* ── PROJECTS ── */}
          <section id="projects" className="mb-16">
            <div className="flex flex-col mb-8 bg-police-surface p-6 rounded-3xl shadow-neo-dark border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-police-accent shadow-[0_0_10px_#D4AF37]"></div>
                <h2 className="font-mono text-[10px] text-police-accent tracking-[0.3em] uppercase font-bold">
                  Sáng kiến 2026
                </h2>
              </div>
              <p className="text-xs text-police-text/50 leading-relaxed font-medium">
                Các giải pháp số hóa tiêu biểu phục vụ công tác nghiệp vụ tại An ninh đối ngoại Phú Thọ.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {PROJECTS.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  onClick={() => setActiveModal(p.id)}
                />
              ))}
            </div>
          </section>

          {/* ── BONUS: Web App + Chatbot ── */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-police-accent rounded-full shadow-[0_0_10px_#D4AF37]"></div>
              <h2 className="font-mono text-[10px] text-police-accent tracking-[0.3em] uppercase font-bold">
                Tiện ích mở rộng
              </h2>
            </div>
            
            <div className="bg-police-surface rounded-3xl p-8 shadow-neo-dark border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-5xl">🤖</span>
              </div>
              
              <div className="mb-6">
                <div className="text-lg font-black text-police-text mb-1">
                  Số hóa Bài dự thi 80 Năm
                </div>
                <div className="text-[10px] text-police-accent font-mono tracking-wider font-bold">
                  bdt80nam-annd.vercel.app
                </div>
              </div>
              
              <p className="text-sm text-police-text/60 leading-relaxed mb-8 font-medium">
                Web App tương tác toàn bộ nội dung bài dự thi. Tích hợp Chatbot AI hỏi đáp lịch sử ANND và Timeline tương tác 1946–2026.
              </p>
              
              <div className="flex gap-3 flex-wrap mb-8">
                {["AI Chatbot", "Interactive", "Quiz"].map((t) => (
                  <span key={t} className="font-mono text-[9px] bg-white/5 text-police-accent px-3 py-1 rounded-full border border-white/10 font-bold uppercase shadow-neo-inner">
                    {t}
                  </span>
                ))}
              </div>
              
              <a 
                href="https://bdt80nam-annd.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-police-accent text-police-dark font-black py-4 px-8 rounded-2xl text-xs inline-block hover:scale-[1.05] transition-all shadow-neo-dark border border-white/5 text-center w-full md:w-auto"
              >
                Truy cập ứng dụng ↗
              </a>
            </div>
          </section>

          <Contact />

          <Footer />
        </div>

        {/* MODAL */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveModal(null)}
          />
        )}
      </div>
    </Suspense>
  );
}

export default App;
