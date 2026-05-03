# 🇻🇳 Nền tảng Học tập & Kiểm tra Nghị quyết Đại hội XIV

> **Hệ thống trực tuyến hỗ trợ cán bộ, đoàn viên nghiên cứu, học tập và quán triệt các Nghị quyết của Đảng.**

---

## 🌟 Giới thiệu
Dự án **Học Nghị Quyết Online** là một nền tảng web hiện đại được thiết kế dành riêng cho đợt sinh hoạt chính trị năm 2026 của **Chi đoàn ghép Phòng PA01-PA08**. Hệ thống cung cấp không gian học tập trực quan với các tư liệu đa phương tiện và công cụ kiểm tra kiến thức nhanh chóng, giúp nâng cao hiệu quả công tác tuyên truyền và giáo dục chính trị tư tưởng.

**Mục tiêu chính:**
- Số hóa nội dung các Nghị quyết Đại hội XIV, CATW VIII và Đoàn Bộ Công an XXIII.
- Tạo môi trường thi kiểm tra kiến thức trực tuyến chuyên nghiệp và khách quan.
- Trực quan hóa dữ liệu thông qua hệ thống Infographic và trợ lý AI.

---

## ✨ Tính năng nổi bật
Hệ thống được xây dựng với các phân hệ chức năng cốt lõi sau:

*   **📚 Kho tư liệu đa phương tiện:** Truy cập nhanh các video chuyên đề, bài giảng về Nghị quyết Đại hội Đảng các cấp.
*   **✏️ Thi kiểm tra trực tuyến:** Hệ thống trắc nghiệm ngẫu nhiên từ bộ đề 150 câu hỏi chính thức. Tự động chấm điểm và phản hồi kết quả tức thì.
*   **🏅 Chứng nhận điện tử:** Tự động cấp chứng nhận hoàn thành (Digital Certificate) cho người dùng đạt trên 60% tổng số điểm.
*   **🖼️ Thư viện Infographic:** Tóm tắt các nội dung trọng tâm bằng hình ảnh sinh động, dễ hiểu và dễ ghi nhớ.
*   **🤖 Sổ tay AI (NotebookLM):** Tích hợp trợ lý ảo thông minh giúp giải đáp nhanh các thắc mắc về nội dung văn kiện.
*   **📱 Trải nghiệm Mobile-First:** Giao diện tối ưu hoàn hảo cho các thiết bị di động, giúp học tập mọi lúc, mọi nơi.

---

## 🛠 Công nghệ sử dụng
Dự án áp dụng các công nghệ hiện đại nhằm đảm bảo tính thẩm mỹ, tốc độ và khả năng mở rộng:

**Frontend:**
- **React 18:** Thư viện giao diện người dùng mạnh mẽ.
- **Vite:** Công cụ build siêu nhanh cho dự án hiện đại.
- **Tailwind CSS:** Framework thiết kế giao diện linh hoạt, chuyên nghiệp.
- **Framer Motion:** Xử lý hiệu ứng chuyển động mượt mà (Micro-animations).
- **Lucide React:** Bộ icon hiện đại và đồng nhất.

**Backend & Storage:**
- **Google Apps Script:** Xử lý logic nghiệp vụ và lưu trữ dữ liệu.
- **Google Sheets API:** Sử dụng làm cơ sở dữ liệu để quản lý danh sách thí sinh và kết quả thi.

**Tooling:**
- **PostCSS & Autoprefixer:** Đảm bảo hiển thị tốt trên mọi trình duyệt.
- **React Router Dom:** Quản lý điều hướng trang (SPA).

---

## 📂 Cấu trúc thư mục
Dưới đây là sơ đồ tổ chức mã nguồn của dự án:

```text
hoc-nghiquyet/
├── google-apps-script/     # Mã nguồn backend chạy trên Google Cloud
│   └── Code.gs             # Logic xử lý lưu kết quả và authentication
├── public/                 # Tài nguyên tĩnh (favicon, v.v.)
├── src/
│   ├── assets/             # Hình ảnh, logo, tài nguyên thiết kế
│   ├── components/         # Các thành phần giao diện dùng chung (Header, Footer, v.v.)
│   ├── data/               # Cấu trúc dữ liệu và bộ đề câu hỏi
│   ├── lib/                # Các hàm tiện ích và cấu hình API
│   ├── pages/              # Các màn hình chính (Home, Quiz, Result, Infographic)
│   ├── App.jsx             # Cấu hình Routing và quản lý State chính
│   ├── main.jsx            # Điểm khởi đầu của ứng dụng
│   └── index.css           # Cấu hình styles và Tailwind directives
├── package.json            # Quản lý dependencies và scripts
├── tailwind.config.js      # Cấu hình Design System (Color Palette, Fonts)
└── vite.config.js          # Cấu hình công cụ đóng gói Vite
```

---

## 🚀 Hướng dẫn cài đặt & Chạy dự án (Getting Started)

### 1. Yêu cầu hệ thống
- Đã cài đặt **Node.js** (Phiên bản 18.x trở lên).
- Trình quản lý gói **npm** hoặc **yarn**.

### 2. Các bước cài đặt
Clone mã nguồn về máy cục bộ:
```bash
git clone [link-git-cua-ban]
cd hoc-nghiquyet
```

Cài đặt các thư viện cần thiết:
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file `.env` tại thư mục gốc dựa trên file mẫu `.env.example`:
```env
VITE_GAS_URL=your_google_apps_script_web_app_url
```

### 4. Khởi chạy dự án
Chạy chế độ phát triển (Development mode):
```bash
npm run dev
```
Ứng dụng sẽ chạy tại địa chỉ: `http://localhost:5173`

Xây dựng bản chính thức (Production build):
```bash
npm run build
```

---

## 🗺️ Kế hoạch phát triển (Roadmap)
Để nâng cấp hệ thống trong các giai đoạn tiếp theo, 2 tính năng sau được đề xuất triển khai:

1.  **📊 Dashboard Thống kê & Bảng xếp hạng (Leaderboard):** Xây dựng trang quản trị dành cho ban tổ chức để theo dõi tỉ lệ cán bộ hoàn thành bài thi và hiển thị bảng xếp hạng top các cá nhân có điểm số cao nhất theo thời gian thực để thúc đẩy phong trào thi đua.
2.  **💬 Trợ lý ảo AI trực tiếp (Integrated Chatbot):** Thay thế link ngoài bằng một Chatbot AI được nhúng trực tiếp vào ứng dụng, cho phép người dùng hỏi đáp về nội dung Nghị quyết ngay trong quá trình làm bài thi để hỗ trợ ôn tập tốt hơn.

---
**Thiết kế bởi Đ/c Vi Ngọc Phương – Bí thư Chi đoàn**
*© 2026 – Phục vụ nội bộ cán bộ, đoàn viên Chi đoàn ghép PA01-PA08.*
