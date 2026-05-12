const footerLinks = [
  ["GitHub", "https://github.com/vi-phuong-158"],
  ["Email", "mailto:vinguocphuong@example.com"],
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "32px 24px" }}>
      <div className="footer-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div className="footer-mark">🛡️</div>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Vi Ngọc Phương</span>
          <span style={{ fontSize: 11, color: "#27272a" }}>· Kỹ sư An ninh Mạng · Công an tỉnh Phú Thọ</span>
        </div>

        <div style={{ fontSize: 11, color: "rgb(255, 255, 255)" }}>Always shipping · © 2026</div>

        <div style={{ display: "flex", gap: 20, color: "rgb(254, 254, 255)" }}>
          {footerLinks.map(([label, href]) => (
            <a key={label} href={href} className="footer-link" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
