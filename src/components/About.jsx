import React from "react";

const About = () => (
  <section
    id="about"
    className="mb-12 animate-fadeSlideUp"
    style={{ animationDelay: "0.1s" }}
  >
    <div className="bg-surface border border-border-mute rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
        <h2 className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
          Thông tin nghiệp vụ
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-white/5 pb-3">
          <span className="font-mono text-[9px] text-text-dim uppercase tracking-wider">Đơn vị công tác</span>
          <span className="text-[11px] font-bold text-white">PA01 - CA Tỉnh Phú Thọ</span>
        </div>
        <div className="flex justify-between items-center border-b border-white/5 pb-3">
          <span className="font-mono text-[9px] text-text-dim uppercase tracking-wider">Lĩnh vực ưu tiên</span>
          <span className="text-[11px] font-bold text-white">An ninh mạng & CCHC</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-mono text-[9px] text-text-dim uppercase tracking-wider">Trình độ chuyên môn</span>
          <span className="text-[11px] font-bold text-white">Lập trình ứng dụng nghiệp vụ</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5">
        <p className="text-[12px] text-text-dim leading-[1.8]">
          Gần 10 năm kinh nghiệm trong lực lượng Công an, kết hợp tư duy nghiệp vụ sắc bén với khả năng lập trình để giải quyết các bài toán thực tế trong quản lý và đấu tranh phòng chống tội phạm.
        </p>
      </div>
    </div>
  </section>
);

export default About;
