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
      className="fixed inset-0 bg-black/75 backdrop-blur-[6px] z-[100] flex items-center justify-center p-4 animate-fadeSlideUp"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="glass max-w-[520px] w-full max-h-[88vh] overflow-y-auto animate-fadeSlideUp !bg-[#0d1a0d]/80">
        {/* header */}
        <div className="p-[20px_20px_16px] border-b border-white/10 sticky top-0 bg-[#0d1a0d] z-[1] rounded-t-[24px]">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-[6px]">
                <span className="text-xl leading-none">{p.icon}</span>
                <span
                  className="font-mono text-[11px] tracking-widest"
                  style={{ color: p.color }}
                >
                  {p.code}
                </span>
                <StatusDot online={p.status === "online"} />
              </div>
              <h2 className="text-[17px] font-extrabold text-white leading-[1.3]">
                {p.name}
              </h2>
              <div className="text-[13px] text-white/55 mt-[2px]">
                {p.subtitle}
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-white/5 border border-white/12 rounded-lg text-white/55 text-base w-8 h-8 cursor-pointer grid place-items-center flex-shrink-0 hover:bg-white/10 transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="flex gap-[6px] flex-wrap mt-[10px]">
            {p.tags.map((t) => (
              <Tag key={t} text={t} color={p.color} />
            ))}
          </div>
        </div>

        {/* body */}
        <div className="p-[16px_20px_20px] flex flex-col gap-[18px]">
          {/* thực trạng */}
          <div>
            <div className="font-mono text-[9px] text-teal tracking-[0.12em] mb-[6px] uppercase">
              ◆ Thực trạng
            </div>
            <p className="text-xs text-white/55 leading-[1.75]">{p.pain}</p>
          </div>

          {/* giải pháp */}
          <div>
            <div className="font-mono text-[9px] text-lime tracking-[0.12em] mb-[6px] uppercase">
              ■ Giải pháp
            </div>
            <p className="text-xs text-white/55 leading-[1.75]">{p.solution}</p>
          </div>

          {/* hiệu quả */}
          <div>
            <div className="font-mono text-[9px] text-[#f0c040] tracking-[0.12em] mb-2 uppercase">
              ◆ Hiệu quả
            </div>
            <div className="bg-white/[0.025] rounded-[10px] p-[4px_10px] border border-white/10">
              <div className="grid grid-cols-3 gap-[6px] py-[6px] pb-2 border-b border-white/[0.08]">
                <span className="text-[9px] font-mono text-white/25 uppercase tracking-wider">
                  Tiêu chí
                </span>
                <span className="text-[9px] font-mono text-red-400 uppercase tracking-wider text-center">
                  Trước
                </span>
                <span className="text-[9px] font-mono text-green-400 uppercase tracking-wider text-right">
                  Sau
                </span>
              </div>
              {p.metrics.map(([l, b, a], i) => (
                <MetricRow key={i} label={l} before={b} after={a} />
              ))}
            </div>
          </div>

          {/* demo button */}
          {p.hasDemo && (
            <div className="flex justify-center pt-1">
              <div className="bg-gradient-to-br from-lime to-teal rounded-full px-7 py-[10px] text-[13px] font-bold text-bg cursor-pointer tracking-wider shadow-[0_4px_20px_rgba(181,194,41,0.3)] hover:scale-105 transition-transform">
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
