import React, { useState, useRef } from "react";
import { PROJECTS, C } from "./data/projects";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlowScene from "./components/GlowScene";
import Tag from "./components/Tag";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const scrollRef = useRef(null);

  const activeProject = PROJECTS.find((p) => p.id === activeModal);

  return (
    <div className="min-h-screen relative bg-bg text-white font-sans selection:bg-accent/30 selection:text-accent">
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
        <section id="projects" className="mb-12">
          <div className="flex flex-col mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <h2 className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
                Hệ thống sáng kiến 2026
              </h2>
            </div>
            <p className="text-[12px] text-text-dim leading-[1.7]">
              Các giải pháp số hóa tiêu biểu phục vụ công tác nghiệp vụ tại An ninh đối ngoại Phú Thọ.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
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
        <section className="mb-12">
           <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <h2 className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
              Tiện ích mở rộng
            </h2>
          </div>
          
          <div className="bg-surface border border-accent/20 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-4xl">🤖</span>
            </div>
            
            <div className="mb-4">
              <div className="text-sm font-bold text-white mb-1">
                Số hóa Bài dự thi 80 Năm
              </div>
              <div className="text-[10px] text-accent font-mono tracking-wider">
                bdt80nam-annd.vercel.app
              </div>
            </div>
            
            <p className="text-[12px] text-text-dim leading-[1.8] mb-6">
              Web App tương tác toàn bộ nội dung bài dự thi. Tích hợp Chatbot AI hỏi đáp lịch sử ANND và Timeline tương tác 1946–2026.
            </p>
            
            <div className="flex gap-2 flex-wrap mb-6">
              {["AI Chatbot", "Interactive", "Quiz"].map((t) => (
                <span key={t} className="font-mono text-[8px] bg-accent/5 border border-accent/10 text-accent/70 px-2 py-0.5 rounded tracking-wider uppercase">
                  {t}
                </span>
              ))}
            </div>
            
            <a 
              href="https://bdt80nam-annd.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-bg font-bold py-2.5 px-6 rounded-xl text-xs inline-block hover:scale-[1.02] transition-transform shadow-[0_4px_20px_rgba(16,185,129,0.2)]"
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
  );
}

export default App;
