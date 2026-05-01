/**
 * DATA: PROJECTS
 * Chứa danh sách các dự án sáng kiến tiêu biểu.
 * Phong cách: Minimalist, Neutral, Hiện đại.
 */

export const C = {
  black: "#000000",
  white: "#ffffff",
  charcoal: "#1a1a1a",
  zinc: "#525252",
  gray: "#888888",
  danger: "#ff4444",
};

export const PROJECTS = [
  {
    id: "qlnnn-api",
    code: "QLNNN-API",
    name: "Hệ thống QLNNN-API",
    subtitle: "Quản lý ngoại kiều offline với mã hóa AES-256",
    type: "offline",
    status: "offline",
    tags: ["Security", "AES-256", "Python", "SQLite"],
    color: C.charcoal,
    icon: "🔒",
    pain: "Dữ liệu người nước ngoài cực kỳ nhạy cảm. Việc lưu trữ trên Excel hoặc các hệ thống không mã hóa tiềm ẩn rủi ro rò rỉ thông tin và khó khăn trong việc tra cứu nhanh.",
    solution:
      "Phần mềm chạy hoàn toàn offline, tích hợp thư viện SQLCipher để mã hóa toàn bộ cơ sở dữ liệu với thuật toán AES-256. Hệ thống cho phép tra cứu hồ sơ 360 độ và đối chiếu dữ liệu tạm trú - lao động tự động.",
    metrics: [
      ["Bảo mật dữ liệu", "Cơ bản", "Mã hóa quân đội AES-256"],
      ["Tra cứu thông tin", "30-60 phút", "Dưới 2 giây"],
      ["Tính toàn vẹn", "Dễ sai sót", "Kiểm tra chéo tự động"],
    ],
    hasDemo: false,
  },
  {
    id: "cam-nang-phap-luat",
    code: "LEGAL-AI",
    name: "Cẩm nang Pháp luật Điện tử",
    subtitle: "Trợ lý ảo thông minh cho người nước ngoài",
    type: "webapp",
    status: "online",
    tags: ["LLM", "RAG", "React", "Multi-language"],
    color: C.zinc,
    icon: "🤖",
    pain: "Người nước ngoài gặp rào cản ngôn ngữ và khó khăn khi tiếp cận các quy định pháp luật về xuất nhập cảnh tại Việt Nam, dẫn đến các vi phạm không đáng có.",
    solution:
      "Web App đa ngôn ngữ tích hợp công nghệ RAG (Retrieval-Augmented Generation) kết hợp với Gemini API. Trợ lý ảo có khả năng trả lời chính xác các câu hỏi dựa trên kho văn bản pháp luật đã được chuẩn hóa.",
    metrics: [
      ["Hỗ trợ ngôn ngữ", "Chỉ Tiếng Việt", "Việt - Anh - Trung - Hàn"],
      ["Thời gian phản hồi", "Trong giờ hành chính", "24/7 tức thì"],
      ["Độ chính xác AI", "Thấp (Ảo giác)", "Cao (RAG Control)"],
    ],
    hasDemo: true,
    demoLabel: "Truy cập trợ lý ảo",
  },
  {
    id: "nhat-ky-3-nhat",
    code: "DIGITAL-LOG",
    name: "Nhật ký 3 Nhất (Digital Edition)",
    subtitle: "Số hóa phong trào thi đua '3 Nhất'",
    type: "internal",
    status: "online",
    tags: ["Management", "Digitalization", "Cloud"],
    color: C.black,
    icon: "✍️",
    pain: "Việc ghi chép và theo dõi phong trào thi đua '3 Nhất' bằng sổ tay truyền thống gây khó khăn trong việc tổng hợp, đánh giá và chia sẻ các gương điển hình tiên tiến.",
    solution:
      "Nền tảng số hóa nhật ký thi đua, cho phép cán bộ chiến sĩ cập nhật thành tích, chia sẻ sáng kiến và theo dõi tiến độ thi đua cá nhân/đơn vị theo thời gian thực.",
    metrics: [
      ["Tổng hợp báo cáo", "Theo tháng/quý", "Cập nhật thời gian thực"],
      ["Tương tác", "Hạn chế", "Chia sẻ & Lan tỏa sáng kiến"],
      ["Lưu trữ", "Giấy tờ vật lý", "Số hóa an toàn trên Cloud"],
    ],
    hasDemo: true,
    demoLabel: "Xem nhật ký số",
  },
];
