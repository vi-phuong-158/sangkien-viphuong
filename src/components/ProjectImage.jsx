export default function ProjectImage({ project }) {
  return (
    <div className="img-ph" style={{ background: project.imgColor }}>
      {project.image && (
        <img
          src={project.image}
          alt={`Ảnh chụp màn hình ${project.title}`}
          loading="lazy"
          className="project-screenshot"
        />
      )}

      <svg
        className={project.image ? "project-image-overlay" : undefined}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${project.id}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={project.imgAccent} strokeWidth="0.4" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
      </svg>

      <div
        className={project.image ? "project-image-overlay" : undefined}
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: project.imgAccent,
          filter: "blur(50px)",
          opacity: 0.18,
        }}
      />

      <div
        className={project.image ? "project-image-overlay" : undefined}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div style={{ fontSize: 32, filter: "grayscale(0.2)" }}>{project.icon}</div>
        <div className="img-ph-label" style={{ color: project.imgAccent, opacity: 0.5 }}>
          {project.imgLabel}
        </div>
        <div style={{ fontSize: 9, color: "#27272a", letterSpacing: 0, textTransform: "uppercase" }}>
          Drop screenshot here
        </div>
      </div>
    </div>
  );
}
