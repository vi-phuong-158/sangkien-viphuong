import { useRef } from "react";
import { PROJECTS } from "../data/portfolio";
import { useFadeUp } from "../hooks/useFadeUp";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const ref = useRef(null);
  useFadeUp(ref);

  return (
    <section id="projects" ref={ref} className="sp" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px" }}>
      <div className="fu" style={{ textAlign: "center", marginBottom: 56 }}>
        <div className="slbl section-label-large" style={{ color: "rgb(48, 245, 174)" }}>
          Dự án
        </div>
        <h2 className="section-title">
          Hệ thống số hóa
          <br />
          nghiệp vụ công an
        </h2>
        <p style={{ fontSize: 14, maxWidth: 400, margin: "0 auto", lineHeight: 1.7, color: "rgb(255, 255, 255)" }}>
          Mỗi sản phẩm là một bài toán thực tế được giải, từ bản đồ số đến AI pháp luật.
        </p>
      </div>

      <div className="bento-grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
