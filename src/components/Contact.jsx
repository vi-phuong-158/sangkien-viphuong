import { useRef } from "react";
import { useFadeUp } from "../hooks/useFadeUp";

export default function Contact() {
  const ref = useRef(null);
  useFadeUp(ref);

  return (
    <section
      id="contact"
      ref={ref}
      className="sp"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        className="blob"
        style={{
          width: 500,
          height: 500,
          background: "rgba(52,211,153,0.055)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      <div style={{ maxWidth: 620, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="fu">
          <div className="slbl section-label-large" style={{ color: "rgb(54, 211, 153)" }}>
            Liên hệ
          </div>
          <h2 className="contact-title">
            Cùng build
            <br />
            <span style={{ color: "#34d399" }}>thứ gì đó có ý nghĩa.</span>
          </h2>
          <p className="contact-copy">
            Tôi sẵn sàng hợp tác về chuyển đổi số, AI ứng dụng, kiến trúc bảo mật, hoặc đơn giản
            là chia sẻ về hành trình tự học lập trình.
          </p>
          <div className="cta-btns" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:vinguocphuong@example.com" className="bp">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="22,6 12,12 2,6" />
              </svg>
              Gửi email
            </a>
            <a href="https://github.com/vi-phuong-158" target="_blank" rel="noopener noreferrer" className="bs">
              GitHub
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M7 7h10v10M7 17L17 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
