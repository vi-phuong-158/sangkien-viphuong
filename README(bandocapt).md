# 🗺️ Bản đồ Công an số - Tỉnh Phú Thọ

Hệ thống Bản đồ Công an số và các điểm cấp Căn cước công dân (CCCD) tại tỉnh Phú Thọ. Ứng dụng cung cấp giao diện trực quan, giúp người dân dễ dàng tìm kiếm, định vị và tra cứu thông tin các đơn vị công an trên địa bàn tỉnh.

![Bản đồ Công an số](logo.png)

## ✨ Tính năng nổi bật

- **📍 Bản đồ tương tác:** Sử dụng thư viện Leaflet.js kết hợp OpenStreetMap hiển thị trực quan vị trí các trụ sở.
- **🔍 Tìm kiếm thông minh:** Tìm kiếm nhanh các đơn vị theo tên, địa chỉ hoặc khu vực phường/xã/huyện.
- **🏷️ Bộ lọc phân loại:** Dễ dàng lọc giữa "Trụ sở Công an" và "Điểm cấp CCCD".
- **🛰️ Định vị "Gần tôi":** Tự động xác định vị trí người dùng và tìm kiếm các đơn vị gần nhất trong bán kính khu vực.
- **ℹ️ Thông tin chi tiết:** Cung cấp đầy đủ địa chỉ, số điện thoại trực ban, giờ làm việc và lưu ý thủ tục hành chính.
- **📞 Tương tác nhanh:** Hỗ trợ nút gọi điện trực tiếp và chỉ đường qua Google Maps chỉ với một chạm.
- **📱 Giao diện hiện đại (Soft UI):** Thiết kế tối ưu cho cả máy tính và thiết bị di động (Responsive Design).
- **📊 Dữ liệu động:** Đồng bộ hóa dữ liệu thời gian thực từ Google Sheets, giúp việc cập nhật thông tin đơn giản và nhanh chóng.

## 🛠️ Công nghệ sử dụng

- **Frontend:** HTML5, JavaScript (ES6+), [Tailwind CSS](https://tailwindcss.com/) (v3)
- **Bản đồ:** [Leaflet.js](https://leafletjs.com/), OpenStreetMap Tiles
- **Dữ liệu:** Google Sheets API (thông qua gviz JSON)
- **Icons & Fonts:** Material Symbols, Google Fonts (Inter, Space Grotesk)
- **Deployment:** Hỗ trợ tốt trên [Vercel](https://vercel.com/)

## 📂 Cấu trúc thư mục

```text
bandocapt/
├── api/                # Các hàm xử lý backend (nếu có)
├── node_modules/       # Các thư viện phụ thuộc
├── app.js              # Logic xử lý chính của ứng dụng
├── data.js             # Dữ liệu cấu hình hoặc dự phòng
├── index.html          # File giao diện chính
├── input.css           # File CSS nguồn cho Tailwind
├── logo.png            # Logo ứng dụng
├── output.css          # File CSS đã build từ Tailwind
├── styles.css          # Các tùy chỉnh CSS bổ sung
├── tailwind.config.js  # Cấu hình Tailwind CSS
├── package.json        # Thông tin dự án và scripts
└── vercel.json         # Cấu hình triển khai lên Vercel
```

## 🚀 Hướng dẫn cài đặt và chạy dự án

### Yêu cầu hệ thống
- Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 14 trở lên).

### Các bước thực hiện

1.  **Clone dự án:**
    ```bash
    git clone https://github.com/vi-phuong-158/bandocapt.git
    cd bandocapt
    ```

2.  **Cài đặt dependencies:**
    ```bash
    npm install
    ```

3.  **Chạy môi trường phát triển (Development):**
    Sử dụng lệnh sau để Tailwind CSS tự động build lại mỗi khi có thay đổi:
    ```bash
    npm run dev
    ```

4.  **Xem kết quả:**
    Mở file `index.html` trực tiếp trên trình duyệt hoặc sử dụng extension "Live Server" trên VS Code.

### Cấu hình Dữ liệu (Google Sheets)
Ứng dụng lấy dữ liệu từ Google Sheets. Để thay đổi nguồn dữ liệu:
1. Mở file `app.js`.
2. Tìm biến `SHEET_ID` và thay thế bằng ID trang tính của bạn.
3. Đảm bảo trang tính của bạn đã được thiết lập quyền "Bất kỳ ai có liên kết đều có thể xem".

---

© 2024 Bản đồ Công an số Tỉnh Phú Thọ.
