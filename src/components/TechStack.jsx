import React from "react";

const TechStack = () => {
  const tools = ["Python", "Streamlit", "Gemini API", "SQLCipher"];
  
  return (
    <section className="py-16 border-t border-white/5 mt-12">
      <div className="flex flex-col items-center">
        <h3 className="font-mono text-[10px] text-police-text/40 tracking-[0.3em] uppercase mb-10 text-center font-bold">
          Stack công nghệ ưu tiên
        </h3>
        
        <div className="flex justify-center gap-4 flex-wrap max-w-[400px]">
          {tools.map((tool) => (
            <div 
              key={tool} 
              className="font-mono text-[10px] text-police-accent bg-police-surface shadow-neo-dark border border-white/5 px-6 py-4 rounded-2xl tracking-[0.1em] uppercase flex items-center gap-3 hover:scale-110 transition-all cursor-default font-black"
            >
              <div className="w-1.5 h-1.5 bg-police-accent rounded-full shadow-[0_0_10px_#D4AF37]"></div>
              {tool}
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex items-center gap-6 opacity-10">
          <div className="h-[1px] w-16 bg-police-text"></div>
          <div className="font-mono text-[9px] tracking-[0.5em] uppercase font-bold text-police-text">Trusted Operations</div>
          <div className="h-[1px] w-16 bg-police-text"></div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
