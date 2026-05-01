import React from "react";
import heroImg from "../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 animate-fadeSlideUp">
      <div className="flex flex-col items-center text-center px-4">
        {/* Profile Image with Police Neumorphism */}
        <div className="relative mb-12 group">
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-3xl bg-police-surface shadow-neo-dark border-4 border-white/5 overflow-hidden">
            <img 
              src={heroImg} 
              alt="Vi Ngọc Phương" 
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          {/* Status Indicator */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-police-accent shadow-neo-dark border-4 border-bg rounded-2xl flex items-center justify-center animate-bounce">
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
        </div>

        <div className="mb-8">
          <span className="font-mono text-[10px] text-police-accent tracking-[0.4em] uppercase font-bold bg-white/5 px-6 py-2 rounded-full border border-white/10 shadow-neo-inner">
            EST. 2026 / SECURITY ARCHITECT
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-police-text mb-6 font-sans tracking-tight leading-tight">
          Vi Ngọc Phương
        </h1>
        <h2 className="text-sm md:text-base text-police-accent font-mono tracking-[0.2em] uppercase mb-12 max-w-lg font-bold">
          An ninh đối ngoại • Chuyển đổi số
        </h2>

        <p className="text-base md:text-lg text-police-text/70 leading-relaxed max-w-xl font-sans font-medium">
          Kiến trúc hệ thống an ninh hiện đại dựa trên dữ liệu và trí tuệ nhân tạo. 
          Tiên phong số hóa quy trình nghiệp vụ với sự tinh túy và hiệu quả.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
