import React from "react";
import SectionLabel from "./SectionLabel";
import { C } from "../data/projects";

const Contact = () => (
  <section id="contact" className="mb-12">
    <SectionLabel text="Liên hệ" />
    <div className="bg-police-surface rounded-3xl p-8 shadow-neo-dark border border-white/5">
      <p className="text-xs text-police-text/60 leading-relaxed mb-6 font-medium">
        Kết nối trực tiếp để trao đổi về các giải pháp công nghệ nghiệp vụ.
      </p>
      <div className="flex flex-col gap-4">
        {[
          ["✉", "Email", "vingocphuong.92@gmail.com", "police-accent"],
          ["🏢", "Đơn vị", "Phòng ANĐN – CA tỉnh Phú Thọ", "police-accent"],
          ["📍", "Địa bàn", "Tỉnh Phú Thọ", "police-accent"],
        ].map(([ic, label, val, themeColor]) => (
          <div
            key={label}
            className="flex gap-4 items-center p-4 bg-white/5 border border-white/5 rounded-2xl shadow-neo-inner"
          >
            <span className="text-xl flex-shrink-0">{ic}</span>
            <div>
              <div
                className={`text-[9px] font-mono tracking-[0.2em] uppercase mb-1 font-black text-${themeColor}`}
              >
                {label}
              </div>
              <div className="text-xs font-black text-police-text leading-tight">{val}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
