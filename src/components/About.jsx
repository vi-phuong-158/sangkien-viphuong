import React from "react";

const About = () => (
  <section
    id="about"
    className="mb-12 animate-fadeSlideUp"
    style={{ animationDelay: "0.1s" }}
  >
    <div className="bg-police-surface rounded-3xl p-8 shadow-neo-dark border border-white/5 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 bg-police-accent rounded-full shadow-[0_0_10px_#D4AF37]"></div>
        <h2 className="font-mono text-[10px] text-police-accent tracking-[0.3em] uppercase font-bold">
          Thông tin nghiệp vụ
        </h2>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center border-b border-white/5 pb-4">
          <span className="font-mono text-[10px] text-police-text/40 uppercase tracking-widest font-bold">Đơn vị</span>
          <span className="text-xs font-black text-police-text">PA01 - CA Tỉnh Phú Thọ</span>
        </div>
        <div className="flex justify-between items-center border-b border-white/5 pb-4">
          <span className="font-mono text-[10px] text-police-text/40 uppercase tracking-widest font-bold">Ưu tiên</span>
          <span className="text-xs font-black text-police-text">An ninh mạng & CCHC</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] text-police-text/40 uppercase tracking-widest font-bold">Chuyên môn</span>
          <span className="text-xs font-black text-police-text">Số hóa nghiệp vụ</span>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5">
        <p className="text-xs text-police-text/60 leading-relaxed font-medium">
          Hơn 10 năm kinh nghiệm trong lực lượng ANND, kết hợp tư duy nghiệp vụ với công nghệ để tối ưu hóa quy trình quản lý và đấu tranh phòng chống tội phạm.
        </p>
      </div>
    </div>
  </section>
);

export default About;
