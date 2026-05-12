import ProjectImage from "./ProjectImage";

export default function ProjectCard({ project, index }) {
  const delayClass = `d${(index % 3) + 1}`;

  return (
    <div
      className={`gc fu ${delayClass} ${project.featured ? "b-feat" : ""}`}
      style={{
        background: `linear-gradient(160deg,${project.color} 0%,rgba(18,18,20,0.6) 100%)`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProjectImage project={project} />

      <div
        className="gc-body"
        style={{
          padding: "22px 24px 24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <div>
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: "uppercase",
                color: project.imgAccent,
                background: `${project.imgAccent}14`,
                border: `1px solid ${project.imgAccent}28`,
                borderRadius: 6,
                padding: "3px 8px",
                display: "inline-block",
              }}
            >
              {project.cat}
            </div>
          </div>
          {project.featured && (
            <div className="bdg acc-bdg" style={{ fontSize: 9, whiteSpace: "nowrap" }}>
              ✦ Featured
            </div>
          )}
        </div>

        <div>
          <h3
            style={{
              fontSize: project.featured ? 19 : 17,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: 0,
              lineHeight: 1.25,
              marginBottom: 4,
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: 12, fontWeight: 500, color: "rgb(255, 255, 255)" }}>{project.sub}</p>
        </div>

        <p style={{ fontSize: 13.5, lineHeight: 1.68, fontWeight: 400, color: "rgb(255, 255, 255)" }}>
          {project.desc}
        </p>

        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: 2,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 9,
            padding: "9px 14px",
            alignSelf: "flex-start",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 800, color: "#fff", letterSpacing: 0 }}>
            {project.stat.v}
          </span>
          <span
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: 0,
              textTransform: "uppercase",
              color: "rgb(255, 255, 255)",
            }}
          >
            {project.stat.l}
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="bdg" style={{ fontSize: 9.5 }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ marginTop: "auto", paddingTop: 4 }}>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{
                color: project.imgAccent,
                border: `1px solid ${project.imgAccent}22`,
                background: `${project.imgAccent}08`,
              }}
            >
              Live Demo / GitHub
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M7 7h10v10M7 17L17 7" />
              </svg>
            </a>
          ) : (
            <span style={{ fontSize: 11, color: "#3f3f46", fontStyle: "italic" }}>
              Nội bộ · Internal use only
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
