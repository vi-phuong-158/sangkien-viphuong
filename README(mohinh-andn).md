# Cổng Hỗ trợ Pháp luật và Thủ tục hành chính về Xuất nhập cảnh (mohinh-andn)

Dự án phát triển hệ thống hỗ trợ pháp luật và tra cứu thủ tục hành chính thông minh, ứng dụng công nghệ Trí tuệ nhân tạo (AI) phục vụ công dân và người nước ngoài tại tỉnh Phú Thọ.

## 🌟 Tổng quan dự án

**Cổng Hỗ trợ Pháp luật và Thủ tục hành chính về Xuất nhập cảnh** là giải pháp số hóa của Công an tỉnh Phú Thọ nhằm cung cấp thông tin pháp luật chính xác, kịp thời và hỗ trợ giải đáp thắc mắc tự động thông qua trợ lý ảo AI. Hệ thống được tối ưu hóa cho cả thiết bị di động và máy tính, hỗ trợ đa ngôn ngữ để phục vụ người nước ngoài cư trú và làm việc tại Việt Nam.

## 🚀 Công nghệ sử dụng

Hệ thống được xây dựng trên nền tảng hiện đại, đảm bảo tốc độ và khả năng mở rộng:

- **Frontend:** HTML5, Vanilla JavaScript (ES6+), Tailwind CSS (Styling).
- **Backend:** Node.js, Vercel Serverless Functions.
- **AI Engine:** Google Gemini AI (Generative AI).
- **RAG (Retrieval-Augmented Generation):** Pinecone Vector Database (giúp AI trả lời dựa trên kho dữ liệu pháp luật nội bộ).
- **Bảo mật:** Cloudflare Turnstile (chống bot), Vercel Edge Config.
- **Dữ liệu:** PDF-parse (xử lý văn bản pháp luật), Google Analytics.

## ✨ Tính năng cốt lõi

1. **Trợ lý ảo AI (Guardian AI):**
   - Giải đáp tự động các câu hỏi về visa, thẻ tạm trú, quy định xuất nhập cảnh.
   - Hỗ trợ đa ngôn ngữ: Tiếng Việt, Tiếng Anh, Tiếng Hàn, Tiếng Trung.
2. **Thư viện số:**
   - Lưu trữ và cung cấp nội dung chi tiết các bộ luật, nghị định, thông tư mới nhất.
   - Tính năng "Dịch trực tiếp" nội dung văn bản pháp luật sang các ngôn ngữ khác.
3. **Tra cứu Thủ tục hành chính (TTHC):**
   - Danh mục đầy đủ các thủ tục cấp Trung ương, cấp Tỉnh và cấp Xã.
   - Tìm kiếm thông minh và phân loại theo cơ quan thẩm quyền.
4. **Tin tức thời sự:** Cập nhật thông tin mới nhất từ cơ quan Công an và các quy định pháp luật vừa ban hành.
5. **Sổ tay pháp luật AI:** Tích hợp Google NotebookLM để cung cấp trải nghiệm nghiên cứu tài liệu chuyên sâu.

## 📂 Cấu trúc thư mục

```text
mohinh-andn/
├── api/                    # Các hàm xử lý API (Vercel Serverless Functions)
│   ├── chat.js             # Logic xử lý AI Chat và RAG
│   └── news.js             # API lấy tin tức
├── css/                    # Thư mục chứa styles
│   ├── tailwind.min.css    # CSS production đã build
│   └── style.css           # Custom styles cho dự án
├── js/                     # Thư mục chứa logic JavaScript
│   ├── app.js              # Logic chính của ứng dụng
│   ├── gemini.js           # Giao tiếp với AI model
│   ├── nav.js              # Điều hướng và chuyển tab
│   └── tthc_data.js        # Dữ liệu thủ tục hành chính
├── data/                   # Tài liệu nguồn và dữ liệu pháp luật
├── Dashboard Admin/        # Giao diện quản trị hệ thống
├── index.html              # Trang chủ và cấu trúc giao diện chính
├── server.js               # Máy chủ local dùng cho phát triển
├── tailwind.config.js      # Cấu hình Tailwind CSS
├── vercel.json             # Cấu hình triển khai trên Vercel
└── package.json            # Quản lý dependencies
```

## 🛠️ Hướng dẫn cài đặt

### Yêu cầu hệ thống

- **Node.js**: Phiên bản 20.x trở lên.
- **npm**: Trình quản lý gói đi kèm Node.js.

### Các bước thực hiện

1. **Tải mã nguồn:**

   ```bash
   git clone [url-cua-repository]
   cd mohinh-andn
   ```

2. **Cài đặt thư viện:**

   ```bash
   npm install
   ```

3. **Cấu hình biến môi trường:**
   Tạo file `.env.local` tại thư mục gốc và cấu hình các khóa sau:

   ```env
   GEMINI_API_KEY=your_gemini_api_key
   PINECONE_API_KEY=your_pinecone_api_key
   PINECONE_INDEX=your_index_name
   ```

4. **Chạy dự án ở chế độ phát triển (Local):**

   ```bash
   node server.js
   ```

   Sau đó truy cập: `http://localhost:3000`

5. **Build CSS (nếu có thay đổi giao diện):**

   ```bash
   npm run build:css
   ```

6. **Triển khai (Deployment):**
   Dự án được tối ưu để chạy trên **Vercel**. Bạn có thể dùng lệnh `vercel` hoặc kết nối với GitHub để tự động deploy.

---
© 2024 Công an tỉnh Phú Thọ - Phòng An ninh Đối ngoại (PA01).
