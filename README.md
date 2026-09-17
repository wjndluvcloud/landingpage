# nducvu.men landing page

Landing page tĩnh cho `nducvu.men`, dùng HTML, CSS và JavaScript thuần. Giao diện tham khảo tinh thần tối giản của `nkh.do`: cột nội dung gọn, font monospace, đường phân cách, light/dark mode và danh sách dự án. Nội dung, màu sắc và component được thiết kế riêng.

## Chỉnh nội dung

- Thông tin, lời giới thiệu và liên kết: `site/index.html`.
- Màu sắc, khoảng cách và responsive: `site/styles.css`.
- Khởi tạo theme trước khi trang hiển thị: `site/theme-init.js`.
- Nút đổi theme, năm hiện tại và đồng hồ Sài Gòn: `site/app.js`.
- Email `hello@nducvu.men` cần được cấu hình bằng Cloudflare Email Routing hoặc đổi thành địa chỉ đang dùng.

## Xem thử trên máy tính

Có thể mở trực tiếp `site/index.html` bằng trình duyệt. Khi chạy qua web server, đứng trong thư mục `site` và dùng một static server bất kỳ.

## Triển khai lên VPS

Tại PowerShell trên Windows:

```powershell
cd D:\Project\landingpage
tar -czf landingpage.tar.gz -C .\site .
scp .\landingpage.tar.gz truyen-vps:/root/
scp .\deploy\nginx.conf truyen-vps:/root/landingpage-nginx.conf
```

Trên VPS:

```bash
mkdir -p /var/www/landingpage
tar -xzf /root/landingpage.tar.gz -C /var/www/landingpage
chown -R www-data:www-data /var/www/landingpage
find /var/www/landingpage -type d -exec chmod 755 {} \;
find /var/www/landingpage -type f -exec chmod 644 {} \;

cp /root/landingpage-nginx.conf /etc/nginx/sites-available/landingpage
ln -sfn /etc/nginx/sites-available/landingpage /etc/nginx/sites-enabled/landingpage
nginx -t
systemctl reload nginx
curl -I http://127.0.0.1:8081/
```

Trong Cloudflare Tunnel đang chạy, thêm **Published application**:

| Trường | Giá trị |
|---|---|
| Subdomain | Để trống |
| Domain | `nducvu.men` |
| Path | Để trống |
| Service URL | `http://localhost:8081` |

Nếu root domain đã có bản ghi DNS `A`, `AAAA` hoặc `CNAME`, xóa bản ghi xung đột trước khi thêm route. Có thể tạo thêm route `www.nducvu.men` tới cùng service hoặc tạo Redirect Rule từ `www` về domain gốc.
