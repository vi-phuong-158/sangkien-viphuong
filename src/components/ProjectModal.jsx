import React, { useEffect } from "react";
import Tag from "./Tag";
import StatusDot from "./StatusDot";
import MetricRow from "./MetricRow";

const ProjectModal = ({ project: p, onClose }) => {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-police-dark/80 backdrop-blur-[6px] z-[100] flex items-center justify-center p-4 animate-fadeSlideUp"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-police-surface max-w-[520px] w-full max-h-[88vh] overflow-y-auto animate-fadeSlideUp rounded-3xl shadow-neo-dark border border-white/5 scrollbar-hide">
        {/* header */}
        <div className="p-8 border-b border-white/5 sticky top-0 bg-police-surface/90 backdrop-blur-md z-[1] rounded-t-3xl">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl leading-none">{p.icon}</span>
                <span
                  className="font-mono text-xs tracking-widest font-bold text-police-accent"
                >
                  {p.code}
                </span>
                <StatusDot online={p.status === "online"} />
              </div>
              <h2 className="text-xl font-black text-police-text leading-tight">
                {p.name}
              </h2>
              <div className="text-sm text-police-text/50 mt-1 font-medium">
                {p.subtitle}
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-police-surface shadow-neo-dark w-10 h-10 rounded-2xl text-police-accent grid place-items-center hover:scale-110 transition-transform border border-white/5"
            >
              ✕
            </button>
          </div>
          <div className="flex gap-2 flex-wrap mt-6">
            {p.tags.map((t) => (
              <Tag key={t} text={t} />
            ))}
          </div>
        </div>

        {/* body */}
        <div className="p-8 flex flex-col gap-10">
          {/* thực trạng */}
          <div className="bg-white/5 p-6 rounded-3xl shadow-neo-inner border border-white/5">
            <div className="font-mono text-[10px] text-police-accent tracking-[0.2em] mb-3 uppercase font-black opacity-60">
              ◆ Thực trạng
            </div>
            <p className="text-sm text-police-text/70 leading-relaxed font-medium">{p.pain}</p>
          </div>

          {/* giải pháp */}
          <div className="bg-white/5 p-6 rounded-3xl shadow-neo-inner border border-white/5">
            <div className="font-mono text-[10px] text-police-accent tracking-[0.2em] mb-3 uppercase font-black opacity-60">
              ■ Giải pháp
            </div>
            <p className="text-sm text-police-text/70 leading-relaxed font-medium">{p.solution}</p>
          </div>

          {/* hiệu quả */}
          <div>
            <div className="font-mono text-[10px] text-police-accent tracking-[0.2em] mb-4 uppercase font-black opacity-60">
              ◆ Hiệu quả
            </div>
            <div className="bg-white/5 rounded-3xl p-6 shadow-neo-dark border border-white/5">
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-white/5">
                <span className="text-[10px] font-mono text-police-text/30 uppercase tracking-widest font-bold">
                  Tiêu chí
                </span>
                <span className="text-[10px] font-mono text-danger uppercase tracking-widest font-bold text-center">
                  Trước
                </span>
                <span className="text-[10px] font-mono text-police-accent uppercase tracking-widest font-bold text-right">
                  Sau
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-4">
                {p.metrics.map(([l, b, a], i) => (
                  <MetricRow key={i} label={l} before={b} after={a} />
                ))}
              </div>
            </div>
          </div>

          {/* demo button */}
          {p.hasDemo && (
            <div className="flex justify-center pt-4">
              <div className="bg-police-accent shadow-neo-dark rounded-2xl px-10 py-4 text-sm font-black text-police-dark cursor-pointer tracking-widest hover:scale-105 transition-transform border border-white/5">
                {p.demoLabel} ↗
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
