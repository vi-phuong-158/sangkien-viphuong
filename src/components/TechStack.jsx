import React from "react";

const TechStack = () => {
  const tools = ["Python", "Streamlit", "Gemini API", "SQLCipher"];
  
  return (
    <section className="py-12 border-t border-white/5 mt-8">
      <div className="flex flex-col items-center">
        <h3 className="font-mono text-[10px] text-text-dim tracking-[0.2em] uppercase mb-8 text-center">
          Stack công nghệ ưu tiên
        </h3>
        
        <div className="flex justify-center gap-3 flex-wrap max-w-[360px]">
          {tools.map((tool) => (
            <div 
              key={tool} 
              className="font-mono text-[11px] text-accent bg-accent/5 border border-accent/20 px-4 py-2.5 rounded-xl tracking-wider uppercase flex items-center gap-2 hover:bg-accent/10 hover:border-accent/40 transition-all cursor-default"
            >
              <div className="w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_var(--color-accent)]"></div>
              {tool}
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex items-center gap-4 opacity-20">
          <div className="h-[1px] w-12 bg-white"></div>
          <div className="font-mono text-[8px] tracking-[0.4em] uppercase">Trusted Operations</div>
          <div className="h-[1px] w-12 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
