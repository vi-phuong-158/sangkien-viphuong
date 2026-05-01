import React from "react";
import { C } from "../data/projects";

const Navbar = () => (
  <nav className="sticky top-0 z-50 py-6 px-4">
    <div className="bg-police-surface/90 border border-white/5 rounded-2xl backdrop-blur-md p-4 flex justify-between items-center max-w-[480px] mx-auto shadow-neo-dark">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-police-accent shadow-neo-dark grid place-items-center flex-shrink-0 border border-white/5">
          <span className="font-mono text-xs font-black text-police-dark">SK</span>
        </div>
        <div>
          <div className="text-sm font-black text-police-text leading-none">
            Sáng Kiến
          </div>
          <div className="text-[9px] text-police-accent font-mono tracking-widest font-bold">
            ARCHITECT 2026
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        {["Dự Án", "Liên Hệ"].map((t) => (
          <a
            key={t}
            href={`#${t === "Dự Án" ? "projects" : "contact"}`}
            className="text-[10px] text-police-accent font-black no-underline transition-all hover:text-police-text hover:scale-110"
          >
            {t}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
