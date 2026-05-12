import { useRef } from "react";
import { SKILL_GROUPS } from "../data/portfolio";
import { useFadeUp } from "../hooks/useFadeUp";

export default function Skills() {
  const ref = useRef(null);
  useFadeUp(ref);

  return (
    <section ref={ref} className="sp" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px" }}>
      <div className="fu" style={{ textAlign: "center", marginBottom: 52 }}>
        <div className="slbl section-label-large" style={{ color: "rgb(55, 210, 153)" }}>
          Kỹ năng
        </div>
        <h2 className="section-heading">
          Full-stack · AI · Security
        </h2>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group, index) => (
          <div key={group.cat} className={`gc fu d${(index % 3) + 1}`} style={{ padding: "20px 22px" }}>
            <div className="skill-category">{group.cat}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {group.items.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div className="skill-dot" />
                  <span style={{ fontSize: 13, color: "#71717a", fontWeight: 450 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
