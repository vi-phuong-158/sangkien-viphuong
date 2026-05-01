import React from "react";

const ProjectCard = ({ project, onClick }) => {
  const isOnline = project.status === "online";
  const statusLabel = isOnline ? "ONLINE" : "OFFLINE";
  
  return (
    <div 
      onClick={onClick}
      className="bg-surface border border-border-mute rounded-2xl p-5 hover:border-accent/40 transition-all duration-300 group cursor-pointer relative overflow-hidden"
    >
      {/* Subtle Scanline Effect on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] bg-[linear-gradient(var(--color-accent)_1px,transparent_1px)] bg-[length:100%_3px] animate-scanline"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="font-mono text-[10px] text-accent tracking-[0.15em] uppercase">
          {project.code || project.id}
        </span>
        <span className={`font-mono text-[9px] tracking-[0.15em] uppercase flex items-center gap-1.5 ${isOnline ? 'text-accent' : 'text-danger'}`}>
          <span className={`w-1 h-1 rounded-full ${isOnline ? 'bg-accent' : 'bg-danger animate-pulse'}`} />
          {statusLabel}
        </span>
      </div>
      
      <h3 className="text-base font-bold text-white mb-1 font-sans leading-tight group-hover:text-accent transition-colors">
        {project.name}
      </h3>
      <p className="text-[11px] text-text-dim leading-relaxed mb-5 h-8 line-clamp-2 overflow-hidden">
        {project.subtitle}
      </p>
      
      <div className="flex gap-2 flex-wrap relative z-10">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="font-mono text-[8px] bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded tracking-[0.1em] uppercase">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-accent"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
