# 🛡️ Sáng kiến Vi Phương - Digital Portfolio

Chào mừng bạn đến với kho lưu trữ mã nguồn của **Sáng kiến Vi Phương**. Đây là một nền tảng Portfolio hiện đại, được thiết kế chuyên biệt để giới thiệu các giải pháp chuyển đổi số và sáng kiến nghiệp vụ trong lĩnh vực an ninh. Dự án tập trung vào việc trình diễn các ứng dụng thực tiễn như quản lý dữ liệu bảo mật, trợ lý ảo pháp luật và số hóa quy trình nghiệp vụ.

---

## ✨ Tính năng nổi bật

Dựa trên phân tích mã nguồn, hệ thống bao gồm các tính năng cốt lõi sau:

*   **🚀 Showcase Sáng kiến:** Trình bày danh mục các dự án số hóa (QLNNN-API, Legal AI, Nhật ký 3 Nhất) với thông tin chi tiết về nỗi đau (Pain points), giải pháp (Solution) và các chỉ số đo lường (Metrics).
*   **🤖 Tích hợp AI & Chatbot:** Giới thiệu các tiện ích mở rộng như "Số hóa Bài dự thi 80 Năm" tích hợp Chatbot AI hỏi đáp lịch sử và Timeline tương tác.
*   **📱 Trải nghiệm Mobile-first:** Giao diện được tối ưu hóa hoàn hảo cho các thiết bị di động, đảm bảo tính tiếp cận cao trong môi trường làm việc năng động.
*   **💎 Thiết kế "Police Style":** Ngôn ngữ thiết kế Dark Mode sang trọng với tone màu chủ đạo Xanh Cảnh sát (Police Blue) và các điểm nhấn Vàng Ánh Kim (Gold accent), mang lại cảm giác chuyên nghiệp và tin cậy.
*   **⚡ Hiệu ứng Glow Scene:** Sử dụng các hiệu ứng ánh sáng động (Glow) tạo chiều sâu và sự sinh động cho giao diện web hiện đại.
*   **🔍 Modal Chi tiết:** Hệ thống Modal thông minh giúp người dùng xem sâu hơn về cấu trúc kỹ thuật và lợi ích của từng sáng kiến mà không làm gián đoạn luồng trải nghiệm.

---

## 🛠️ Công nghệ sử dụng

Dự án được xây dựng trên một Tech Stack hiện đại, đảm bảo hiệu suất và khả năng bảo trì cao:

*   **Frontend:** 
    *   **React 19:** Thư viện UI mạnh mẽ nhất hiện nay với các tính năng mới nhất (Suspense, Lazy loading).
    *   **Vite:** Công cụ build siêu nhanh cho trải nghiệm phát triển tối ưu.
    *   **Tailwind CSS 4:** Framework CSS tiện ích thế hệ mới giúp xây dựng giao diện nhanh chóng và đồng nhất.
*   **UI/UX & Tooling:**
    *   **Lucide React:** Bộ icon vector tinh tế.
    *   **Framer Motion (Optional/Logic):** Hỗ trợ các chuyển động mượt mà trong UI.
    *   **ESLint & PostCSS:** Đảm bảo chất lượng mã nguồn và tối ưu hóa CSS.

---

## 📁 Cấu trúc thư mục

Dưới đây là sơ đồ cấu trúc các thành phần chính của dự án:

```text
sangkien-viphuong/
├── public/                # Tài sản tĩnh (images, icons, robots.txt)
├── src/
│   ├── assets/            # Hình ảnh và font chữ local
│   ├── components/        # Các thành phần giao diện tái sử dụng
│   │   ├── HeroSection.jsx# Phần giới thiệu đầu trang
│   │   ├── ProjectCard.jsx# Thẻ hiển thị tóm tắt dự án
│   │   ├── ProjectModal.jsx# Cửa sổ chi tiết dự án
│   │   ├── TechStack.jsx   # Hiển thị các công nghệ sử dụng
│   │   └── GlowScene.jsx   # Hiệu ứng ánh sáng nền
│   ├── data/
│   │   └── projects.js    # Quản lý nội dung và thông số các dự án
│   ├── App.jsx            # Thành phần gốc (Root Component)
│   ├── index.css          # Cấu hình Tailwind và CSS tùy chỉnh
│   └── main.jsx           # Điểm khởi đầu của ứng dụng
├── index.html             # Entry point HTML
├── tailwind.config.js     # Cấu hình theme và các lớp tùy chỉnh
└── vite.config.js         # Cấu hình trình đóng gói Vite
```

---

## 🚀 Hướng dẫn cài đặt & Chạy dự án

Để chạy dự án này trên máy tính cá nhân của bạn, hãy làm theo các bước sau:

### 1. Yêu cầu hệ thống
*   Đã cài đặt **Node.js** (Phiên bản 18.x trở lên).
*   Đã cài đặt **npm** hoặc **yarn**.

### 2. Các bước thực hiện
```bash
# Clone project từ kho lưu trữ
git clone https://github.com/your-username/sangkien-viphuong.git

# Di chuyển vào thư mục dự án
cd sangkien-viphuong

# Cài đặt các thư viện phụ thuộc
npm install

# Khởi chạy ứng dụng ở chế độ phát triển
npm run dev
```

Sau khi chạy lệnh trên, ứng dụng sẽ khả dụng tại địa chỉ: `http://localhost:5173`.

### 3. Xây dựng bản sản xuất
```bash
npm run build
```
Kết quả sẽ nằm trong thư mục `/dist`, sẵn sàng để triển khai lên Vercel hoặc Netlify.

---

## 🗺️ Kế hoạch phát triển (Roadmap)

Trong các phiên bản tiếp theo, dự án dự kiến sẽ được nâng cấp các tính năng sau:

1.  **📊 Dashboard Thống kê:** Xây dựng một trang quản trị tập trung để theo dõi hiệu quả thực tế của các sáng kiến (lượt truy cập, phản hồi người dùng).
2.  **🌐 Đa ngôn ngữ (i18n):** Tích hợp hệ thống chuyển đổi ngôn ngữ (Việt - Anh) để giới thiệu các sáng kiến đến các đối tác quốc tế trong công tác đối ngoại.

---

**Sáng kiến Vi Phương** - *Sáng tạo không ngừng vì sự nghiệp an ninh Tổ quốc.*
