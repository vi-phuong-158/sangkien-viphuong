# 🛂 Hệ thống Quản lý Người nước ngoài (QLNNN-API)

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Python](https://img.shields.io/badge/python-3.10%2B-green.svg)
![License](https://img.shields.io/badge/license-Internal-red.svg)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey.svg)

## 📝 Giới thiệu
**QLNNN-API** là giải pháp phần mềm chuyên dụng được thiết kế nhằm hiện đại hóa và chuyển đổi số công tác quản lý, theo dõi cư trú và hoạt động của người nước ngoài trên địa bàn (phiên bản dành cho PA01). 

Với triết lý thiết kế **"Offline First - Security Always"**, hệ thống vận hành hoàn toàn độc lập không cần kết nối Internet, đảm bảo an toàn tuyệt đối cho dữ liệu ngành công an trong khi vẫn mang lại trải nghiệm người dùng hiện đại và hiệu năng xử lý dữ liệu mạnh mẽ.

---

## ✨ Tính năng nổi bật
Dựa trên phân tích mã nguồn, hệ thống cung cấp các phân hệ chức năng cốt lõi sau:

*   **📊 Bảng điều khiển (Dashboard) Thông minh**: Tổng hợp số liệu thời gian thực, biểu đồ trực quan về quốc tịch, địa bàn và các diện quản lý.
*   **👤 Quản lý Hồ sơ 360**: Tra cứu tập trung thông tin cá nhân, ảnh chân dung, lịch sử tạm trú và các diện chuyên đề (Lao động, Kết hôn, Học tập, Lâm thời).
*   **📥 Nhập liệu Thông minh (Smart Import)**: Hỗ trợ kéo thả các tệp Excel từ hệ thống Cục Quản lý Xuất nhập cảnh. Tự động chuẩn hóa dữ liệu, nhận diện quốc tịch và lọc trùng lặp.
*   **🔍 Công cụ Rà soát & Phân tích**:
    *   **Trốn địa bàn**: Phát hiện đối tượng có diện quản lý (lao động/kết hôn) nhưng chưa khai báo tạm trú.
    *   **Đồng lưu trú**: Nhận diện nhóm đối tượng có biểu hiện cùng đến, cùng đi và cùng ở tại một địa điểm.
    *   **Chưa xác minh**: Liệt kê người nước ngoài lưu trú thường xuyên nhưng chưa được phân loại.
*   **🛡️ Bảo mật Đa lớp**:
    *   Mã hóa toàn bộ cơ sở dữ liệu bằng **AES-256 (SQLCipher)**.
    *   Cơ chế **Audit Logs** với chuỗi **Hash Chain** chống xóa sửa nhật ký.
    *   Phân quyền người dùng chặt chẽ (RBAC) và tự động thu hồi Token khi đăng xuất.
*   **📄 Xuất báo cáo**: Kết xuất dữ liệu ra tệp Excel (.xlsx) theo các tiêu chí lọc tùy biến.

---

## 💻 Công nghệ sử dụng
Dự án được xây dựng trên một Tech Stack hiện đại, tối ưu cho việc chạy Offline:

*   **Frontend**: 
    *   **Core**: HTML5, Vanilla JavaScript.
    *   **Styling**: Vanilla CSS với phong cách thiết kế **Glassmorphism** (kính mờ) sang trọng.
    *   **Libraries**: Chart.js (biểu đồ), Lucide Icons, Dropzone.
*   **Backend**: 
    *   **Framework**: **FastAPI** (Python 3.10+) cho hiệu suất xử lý bất đồng bộ cao.
    *   **Data Processing**: **Pandas** & **OpenPyXL** xử lý tệp Excel lớn.
    *   **Security**: PyJWT (Xác thực), Bcrypt (Mã hóa mật khẩu).
*   **Database**: 
    *   **SQLCipher**: SQLite mở rộng hỗ trợ mã hóa 256-bit cực kỳ an toàn.
*   **Tooling**: 
    *   **PyInstaller**: Đóng gói ứng dụng thành file .exe chạy độc lập.

---

## 📂 Cấu trúc thư mục
Cấu trúc dự án được tổ chức theo tiêu chuẩn Separation of Concerns:

```text
QLNNN-API/
├── backend/            # Mã nguồn Backend (FastAPI)
│   ├── data/           # Nơi lưu trữ file CSDL đã mã hóa (qlnnn.db)
│   ├── services/       # Logic nghiệp vụ (Auth, Profile, Import, Ra soat)
│   ├── main.py         # File khởi tạo API và định tuyến (Routes)
│   └── database.py     # Cấu hình kết nối và mã hóa CSDL
├── frontend/           # Mã nguồn Giao diện
│   ├── index.html      # Trang giao diện chính (SPA)
│   └── static/         # Tài nguyên tĩnh (CSS, JS, Libs, Images)
├── scripts/            # Các công cụ bảo trì (Backup, Rotate Key, Restore)
├── packaging/          # Cấu hình đóng gói ứng dụng (PyInstaller)
├── KHOI_DONG.bat       # Script khởi chạy nhanh 1-click cho Windows
├── run_server.py       # Server Runner (xử lý prompt mật khẩu CSDL)
└── requirements.txt    # Danh sách thư viện Python cần thiết
```

---

## 🚀 Hướng dẫn cài đặt & Chạy dự án (Getting Started)

### 1. Yêu cầu hệ thống
*   Hệ điều hành: Windows 10/11 (64-bit).
*   Python: Phiên bản **3.10** hoặc cao hơn.

### 2. Các bước cài đặt
1.  **Tải mã nguồn**:
    ```bash
    git clone <repository_url>
    cd QLNNN-API
    ```
2.  **Cài đặt thư viện**:
    ```bash
    pip install -r requirements.txt
    ```
3.  **Cấu hình**:
    *   Sao chép tệp `.env.example` thành `.env` (nếu cần cấu hình thủ công cổng port/host).
    *   Mặc định hệ thống chạy tại: `http://127.0.0.1:9000`.

### 3. Khởi chạy
*   **Cách 1 (Nhanh nhất)**: Chạy file `KHOI_DONG.bat`. 
*   **Cách 2 (Thủ công)**:
    ```bash
    python run_server.py
    ```
    *Hệ thống sẽ yêu cầu bạn nhập Passphrase để mở khóa Cơ sở dữ liệu khi khởi động.*

---

## 🗺️ Kế hoạch phát triển (Roadmap)
Dựa trên hiện trạng mã nguồn, hai tính năng sau được đề xuất để nâng cấp hệ thống:

1.  **🤖 Trợ lý Khớp hồ sơ thông minh (AI Matching)**: Tích hợp thuật toán Fuzzy Logic hoặc mô hình học máy nhẹ (chạy Offline) để tự động ghép nối các hồ sơ từ nhiều nguồn Excel khác nhau khi có sai sót về định dạng tên hoặc số hộ chiếu.
2.  **🌐 Bản đồ Mối quan hệ (Visual Link Analysis)**: Chuyển đổi danh sách "Đồng lưu trú" dạng bảng thành biểu đồ mạng (Graph) để cán bộ quản lý dễ dàng hình dung mối quan hệ giữa người nước ngoài, cơ sở lưu trú và người bảo lãnh.

---
*Phát triển bởi Đội ngũ kỹ thuật PA01 - 2026*
