import React from "react";
import { C } from "../data/projects";

const Navbar = () => (
  <nav className="sticky top-0 z-50 p-[10px_16px]">
    <div className="bg-[#080f08]/80 border border-white/10 rounded-2xl backdrop-blur-2xl p-[10px_16px] flex justify-between items-center max-w-[480px] mx-auto">
      <div className="flex items-center gap-[10px]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime to-teal grid place-items-center flex-shrink-0">
          <span className="font-mono text-[11px] font-bold text-bg">SK</span>
        </div>
        <div>
          <div className="text-[13px] font-bold text-white leading-none">
            Sáng Kiến Số
          </div>
          <div className="text-[9px] text-teal font-mono tracking-widest">
            PORTFOLIO 2026
          </div>
        </div>
      </div>
      <div className="flex gap-[14px] items-center">
        {["Dự Án", "Giới Thiệu", "Liên Hệ"].map((t) => (
          <a
            key={t}
            href={`#${t === "Dự Án" ? "projects" : t === "Giới Thiệu" ? "about" : "contact"}`}
            className="text-[11px] text-white/55 no-underline transition-colors hover:text-lime"
          >
            {t}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
