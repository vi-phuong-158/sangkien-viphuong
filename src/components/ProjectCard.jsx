import React from "react";

const ProjectCard = ({ project, onClick }) => {
  const isOnline = project.status === "online";
  const statusLabel = isOnline ? "ONLINE" : "OFFLINE";
  
  return (
    <div 
      onClick={onClick}
      className="bg-police-surface rounded-3xl p-8 shadow-neo-dark hover:scale-[1.02] transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full border border-white/5"
    >
      <div className="flex justify-between items-start mb-6 relative z-10">
        <span className="font-mono text-[10px] text-police-accent tracking-[0.2em] uppercase font-bold">
          {project.code || project.id}
        </span>
        <span className={`font-mono text-[9px] tracking-[0.2em] uppercase flex items-center gap-2 ${isOnline ? 'text-police-accent' : 'text-danger'}`}>
          <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-police-accent shadow-[0_0_10px_#D4AF37]' : 'bg-danger shadow-[0_0_10px_#ef4444]'}`} />
          {statusLabel}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-police-text mb-3 font-sans leading-tight group-hover:text-police-accent transition-colors duration-300">
        {project.name}
      </h3>
      <p className="text-xs text-police-text/60 leading-relaxed mb-8 flex-grow font-medium">
        {project.subtitle}
      </p>
      
      <div className="flex gap-3 flex-wrap relative z-10">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="font-mono text-[9px] bg-white/5 text-police-accent px-3 py-1 rounded-full border border-white/10 tracking-[0.1em] uppercase font-bold shadow-neo-inner">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
