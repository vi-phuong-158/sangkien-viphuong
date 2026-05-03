# 🏛️ Cổng Thông Tin Số - Công An Phường Phú Thọ

## 📝 Giới thiệu
**Cổng Thông Tin Số Công An Phường Phú Thọ** là một nền tảng web hiện đại, được thiết kế nhằm hỗ trợ người dân tiếp cận các dịch vụ công, thủ tục hành chính và thông tin an ninh trật tự một cách nhanh chóng, minh bạch. Dự án hướng tới việc chuyển đổi số trong công tác quản lý hành chính, giúp thu hẹp khoảng cách giữa chính quyền và nhân dân.

Dự án sử dụng phong cách thiết kế **Bento Grid** và **Glassmorphism** sang trọng, mang lại trải nghiệm người dùng mượt mà trên cả máy tính và thiết bị di động.

---

## ✨ Tính năng nổi bật
*   🔍 **Tìm kiếm thông minh:** Tra cứu nhanh chóng các thủ tục hành chính và câu hỏi thường gặp (FAQ).
*   🤖 **Trợ lý ảo 24/7:** Hệ thống Chatbot tự động giải đáp các thắc mắc về cư trú, định danh, đăng ký xe và nhiều lĩnh vực khác.
*   👵 **Chế độ Người cao tuổi (Elder Mode):** Giao diện tương phản cao, cỡ chữ lớn giúp người lớn tuổi dễ dàng tiếp cận thông tin.
*   📋 **Quản lý thủ tục chuyên sâu:** Các phân hệ riêng biệt cho: Cư trú, Đăng ký xe, An ninh, Người nước ngoài, Khiếu nại và Vũ khí.
*   📄 **Kho biểu mẫu mẫu:** Cung cấp các mẫu đơn (CT01, DC01...) chuẩn quy định để người dân tải về và sử dụng.
*   🗺️ **Tương tác trực quan:** Tích hợp bản đồ chỉ đường, thông báo giờ làm việc và các phím tắt liên hệ khẩn cấp.

---

## 💻 Công nghệ sử dụng
Dự án được xây dựng trên nền tảng Web thuần túy để đảm bảo tốc độ tải trang nhanh và khả năng tương thích cao:
*   **Frontend:**
    *   HTML5 & CSS3 (Modern Design System, Grid, Flexbox).
    *   Vanilla JavaScript (ES6+).
*   **Thư viện hỗ trợ:**
    *   **FontAwesome 6:** Hệ thống icon chuyên nghiệp.
    *   **Google Fonts (Be Vietnam Pro):** Phông chữ hiện đại, tối ưu cho tiếng Việt.
*   **Công cụ:**
    *   Duy trì dữ liệu FAQ qua các file JSON/JS data.

---

## 📁 Cấu trúc thư mục
```text
capphutho/
├── index.html          # Trang chủ (Entry point)
├── app.js              # Logic điều khiển chính của ứng dụng
├── styles.css          # CSS tổng thể và Design System
├── modules/            # Các trang chi tiết về thủ tục (Cư trú, Xe, ...)
│   ├── cu-tru.html
│   ├── dang-ky-xe.html
│   └── ...
├── js/                 # Thư mục chứa scripts xử lý
│   ├── chatbot.js      # Logic xử lý trợ lý ảo
│   ├── data/           # Cơ sở dữ liệu FAQ (faq_db.js)
│   └── utils/          # Các hàm tiện ích
├── FAQ/                # Tài liệu thô và kiến thức về các lĩnh vực
├── styles/             # Các file CSS bổ trợ
└── assets/             # Hình ảnh, icon và các tài liệu PDF/DOC mẫu
```

---

## 🚀 Hướng dẫn cài đặt & Chạy dự án
Dự án là ứng dụng Static Web, không cần cài đặt môi trường phức tạp.

1.  **Clone dự án:**
    ```bash
    git clone https://github.com/vi-phuong-158/capphutho.git
    ```
2.  **Truy cập thư mục:**
    ```bash
    cd capphutho
    ```
3.  **Khởi chạy:**
    *   **Cách 1:** Mở trực tiếp file `index.html` bằng trình duyệt web (Chrome, Edge, Firefox).
    *   **Cách 2 (Khuyên dùng):** Sử dụng extension **Live Server** trên VS Code để chạy dự án tại địa chỉ `http://127.0.0.1:5500`.

---

## 🗺️ Kế hoạch phát triển (Roadmap)
Dựa trên nền tảng hiện tại, hệ thống có thể được nâng cấp các tính năng sau:
1.  **Tích hợp AI LLM:** Nâng cấp Chatbot từ dạng FAQ tĩnh sang sử dụng trí tuệ nhân tạo (như Gemini API hoặc OpenAI) để có thể tư vấn các tình huống pháp lý phức tạp một cách tự nhiên hơn.
2.  **Số hóa thủ tục trực tuyến:** Xây dựng tính năng cho phép người dân điền thông tin vào biểu mẫu trực tuyến và xuất file PDF hoàn chỉnh ngay trên web, hoặc gửi trực tiếp qua Email/API đến bộ phận tiếp nhận.

---
**Phát triển bởi:** Đội ngũ kỹ thuật - Căn cứ trên nhu cầu thực tế của Công an Phường Phú Thọ.
