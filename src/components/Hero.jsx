import { useRef } from "react";
import { PROJECTS } from "../data/portfolio";
import { useFadeUp } from "../hooks/useFadeUp";

export default function Hero() {
  const ref = useRef(null);
  useFadeUp(ref);

  return (
    <section
      id="top"
      ref={ref}
      className="hp"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        className="blob"
        style={{
          width: 700,
          height: 500,
          background: "rgba(52,211,153,0.055)",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="blob"
        style={{
          width: 350,
          height: 350,
          background: "rgba(96,165,250,0.04)",
          top: "35%",
          left: "5%",
        }}
      />
      <div
        className="blob"
        style={{
          width: 300,
          height: 300,
          background: "rgba(167,139,250,0.04)",
          top: "25%",
          right: "5%",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto" }}>
        <div className="fu" style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div className="bdg" style={{ fontSize: 15 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34d399",
                display: "inline-block",
                boxShadow: "0 0 8px #34d399",
              }}
            />
            Đại úy · Cán bộ Phòng An ninh đối ngoại · Công an tỉnh Phú Thọ
          </div>
        </div>

        <h1 className="fu d1 hero-title">
          <span style={{ color: "#fff" }}>Vi Ngọc</span>
          <br />
          <span
            style={{
              background: "linear-gradient(120deg,#34d399 0%,#6ee7b7 60%,#a7f3d0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Phương
          </span>
        </h1>

        <div
          className="fu d2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <span className="hero-kicker">Security Officer</span>
          <span style={{ color: "#27272a", fontSize: 18 }}>×</span>
          <span className="hero-kicker">Self-taught Engineer</span>
        </div>

        <p className="fu d3 hero-copy">
          Bắt đầu từ một file Google Sheets năm 2024,
          <span style={{ color: "#a1a1aa", fontWeight: 500 }}>
            {" "}
            không một giờ học lập trình chính quy
          </span>
          . Đến nay, tôi đã deploy các hệ thống production phục vụ lực lượng Công an, xây dựng
          hoàn toàn bằng tư duy và sự hỗ trợ của AI.
        </p>

        <div className="fu d3" style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div
            style={{
              background: "rgba(52,211,153,0.06)",
              borderRadius: 12,
              padding: "10px 20px",
              color: "#6ee7b7",
              fontStyle: "italic",
              letterSpacing: 0,
              maxWidth: 420,
              lineHeight: 1,
              border: "1px dashed rgba(52, 211, 153, 0.14)",
              fontSize: 11,
            }}
          >
            "Always shipping: từ ý tưởng trên giấy đến hệ thống chạy thật."
          </div>
        </div>

        <div
          className="fu d4 hero-btns"
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 56,
          }}
        >
          <a href="#projects" className="bp">
            Xem dự án
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#inspire" className="bs">
            Hành trình tự học →
          </a>
        </div>

        <div
          className="fu d5 stat-row"
          style={{ display: "flex", gap: 44, justifyContent: "center", flexWrap: "wrap" }}
        >
          {[
            { n: "2024", l: "Dòng code đầu tiên" },
            { n: "Always", l: "Shipping" },
            { n: String(PROJECTS.length), l: "Dự án production" },
          ].map((stat) => (
            <div key={stat.n} style={{ textAlign: "center" }}>
              <div className="hero-stat-number">{stat.n}</div>
              <div className="hero-stat-label">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-ind" style={{ position: "absolute", bottom: 28, left: "50%" }}>
        <span style={{ fontSize: 9, letterSpacing: 0, textTransform: "uppercase", color: "#3f3f46" }}>
          scroll
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
