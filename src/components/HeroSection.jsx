import React from "react";

const HeroSection = () => {
  return (
    <section className="py-10 animate-fadeSlideUp">
      <div className="flex flex-col items-center text-center">
        {/* Placeholder Portrait with Digital Dashboard Style */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 rounded-2xl bg-surface border border-border-mute overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-10"></div>
            <span className="text-text-dim text-[10px] font-mono uppercase tracking-[0.2em] relative z-10">
              Chân dung<br/>Placeholder
            </span>
          </div>
          {/* Decorative Corner Brackets */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent rounded-tl-sm"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent rounded-br-sm"></div>
        </div>

        <div className="mb-4">
          <span className="font-mono text-[10px] text-accent border border-accent/25 bg-accent/10 px-4 py-1 rounded-full tracking-[0.15em] uppercase">
            PORTFOLIO 2026
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2 font-sans tracking-tight">
          Đại úy Vi Ngọc Phương
        </h1>
        <h2 className="text-xs text-accent font-mono tracking-[0.15em] uppercase mb-8 opacity-90">
          Phòng An ninh đối ngoại Công an tỉnh Phú Thọ
        </h2>

        <p className="text-[13px] text-text-dim leading-[1.8] max-w-[340px] font-sans">
          Tiên phong trong định hướng chuyển đổi số nghiệp vụ, tập trung vào việc hiện đại hóa quy trình, 
          tối ưu hóa dữ liệu và ứng dụng trí tuệ nhân tạo để nâng cao hiệu quả bảo vệ an ninh quốc gia.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
