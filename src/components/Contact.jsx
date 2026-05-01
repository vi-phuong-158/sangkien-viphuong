import React from "react";
import SectionLabel from "./SectionLabel";
import { C } from "../data/projects";

const Contact = () => (
  <section id="contact" className="mb-12">
    <SectionLabel text="Liên hệ" />
    <div className="bg-white/[0.04] border border-white/10 rounded-2xl backdrop-blur-2xl p-[18px]">
      <p className="text-xs text-white/55 leading-[1.75] mb-4">
        Kết nối trực tiếp để trao đổi về các giải pháp công nghệ nghiệp vụ.
      </p>
      <div className="flex flex-col gap-3">
        {[
          ["✉", "Email", "vingocphuong.92@gmail.com", C.lime],
          ["🏢", "Đơn vị", "Phòng An ninh Đối ngoại – CA tỉnh Phú Thọ", C.teal],
          ["📍", "Địa bàn", "Tỉnh Phú Thọ (mới)", C.olive],
        ].map(([ic, label, val, col]) => (
          <div
            key={label}
            className="flex gap-3 items-center p-[10px_14px] bg-white/[0.03] border border-white/10 rounded-[10px]"
          >
            <span className="text-lg flex-shrink-0">{ic}</span>
            <div>
              <div
                className="text-[9px] font-mono tracking-widest uppercase mb-[2px]"
                style={{ color: col }}
              >
                {label}
              </div>
              <div className="text-xs font-medium text-white">{val}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
