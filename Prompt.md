# PROMPT THIẾT KẾ LANDING PAGE – MĂNG ĐEN ROMANTIC HOMESTAY

Hãy xây dựng một **landing page giới thiệu và đặt phòng cho Măng Đen Romantic Homestay** bằng **React.js**.

## 1. YÊU CẦU QUAN TRỌNG

- Sử dụng **React.js**.
- Chỉ tập trung phát triển **frontend**.
- Thiết kế hiện đại, đẹp, chuyên nghiệp, gần gũi với thiên nhiên Măng Đen.
- Phong cách: **Modern – Cozy – Romantic – Nature**.
- Giao diện sáng, thoáng, hình ảnh lớn, ưu tiên trải nghiệm hình ảnh.
- Responsive hoàn toàn cho **Desktop / Tablet / Mobile**.
- Không tự ý thay đổi, thêm, xóa hoặc viết lại thông tin được cung cấp.
- **Giữ nguyên toàn bộ nội dung, tên, số điện thoại, thông tin dịch vụ và thông tin liên hệ.**
- Không để xảy ra lỗi text bị xuống dòng chỉ còn **1 từ hoặc 1 chữ** ở dòng cuối.
- Sử dụng CSS responsive để hạn chế orphan text, điều chỉnh width/max-width, font-size và line-height phù hợp.
- Khi **reload trang phải tự động scroll về đầu trang**.
- Smooth scrolling khi click menu.
- Các section có animation xuất hiện nhẹ nhàng khi scroll.
- Không sử dụng animation quá mạnh gây rối mắt.
- Tối ưu tốc độ tải trang.

---

# 2. THÔNG TIN DOANH NGHIỆP

**Tên:** Măng Đen Romantic Homestay

**Ngành:** Du lịch / Lưu trú

**Địa điểm:** Măng Đen

**Liên hệ:** Ngân - 090 504 44 96

**Zalo:** 0 964102288

**Facebook:** Facebook

**Google Maps:** Măng đen Romantic Homestay & BBQ - Google Maps

**Phong cách:** Hiện đại gần gũi

---

# 3. DỊCH VỤ

Giữ nguyên nội dung:

- Cho thuê phòng homestay
- Phòng nghỉ ngắn ngày
- Phòng nghỉ theo ngày/đêm
- Lưu trú du lịch

---

# 4. KHÁCH HÀNG MỤC TIÊU

Giữ nguyên nội dung:

- Khách du lịch đến Măng Đen
- cặp đôi
- nhóm bạn
- gia đình
- khách cần thuê phòng ngắn ngày

---

# 5. GIỚI THIỆU HOMESTAY

Sử dụng chính xác nội dung sau:

**“Măng Đen Romantic luôn vươn mình phát triển và thay đổi để đáp ứng thị hiếu của khách hàng. Romantic đa dạng các hạng phòng: phòng săn mây tại giường, phòng tiêu chuẩn khách sạn, bungalow săn mây-sân vườn, nhà gỗ nguyên căn”**

Không tự ý sửa câu chữ hoặc thay đổi ý nghĩa.

---

# 6. HÌNH ẢNH

Sử dụng hình ảnh từ thư mục Google Drive được cung cấp:

https://drive.google.com/drive/u/0/folders/10r2RlsWkC9gMC6jMQv_s1DPI4ZFrJSSn

Nếu không thể truy cập trực tiếp Google Drive trong quá trình code, hãy tạo cấu trúc component/image placeholder rõ ràng để sau này dễ thay ảnh thật.

Ưu tiên hình ảnh:

- Homestay
- Phòng nghỉ
- Bungalow
- Nhà gỗ
- Sân vườn
- Mây và núi Măng Đen
- Không gian BBQ
- Không gian nghỉ dưỡng

Không sử dụng hình ảnh có watermark hoặc text không liên quan.

---

# 7. CẤU TRÚC LANDING PAGE

## HEADER / NAVBAR

Thiết kế navbar hiện đại, sticky khi scroll.

Menu:

- Trang chủ
- Giới thiệu homestay
- Danh sách phòng
- Chi tiết phòng
- Hình ảnh
- Bảng giá
- Tiện nghi
- Vị trí/bản đồ
- Liên hệ

CTA nổi bật:

**Đặt lịch / nhận tư vấn**

Mobile sử dụng hamburger menu.

---

# 8. HERO SECTION

Thiết kế Hero full màn hình.

Sử dụng hình ảnh đẹp nhất của Măng Đen Romantic Homestay làm background.

Nội dung chính:

**Măng Đen Romantic Homestay**

Thông điệp hình ảnh tập trung vào:

- Nghỉ dưỡng
- Măng Đen
- Không gian gần gũi thiên nhiên
- Phòng nghỉ đẹp
- Không khí lãng mạn

CTA:

**Đặt lịch / nhận tư vấn**

Thêm các nút liên hệ nhanh:

- Gọi ngay
- Zalo
- Messenger

Hero có hiệu ứng nhẹ:

- Fade in
- Text slide up
- Image zoom rất nhẹ
- Button hover

Không làm animation quá mạnh.

---

# 9. GIỚI THIỆU HOMESTAY

Tạo section giới thiệu với layout:

**Text + hình ảnh**

Hiển thị nội dung:

“Măng Đen Romantic luôn vươn mình phát triển và thay đổi để đáp ứng thị hiếu của khách hàng. Romantic đa dạng các hạng phòng: phòng săn mây tại giường, phòng tiêu chuẩn khách sạn, bungalow săn mây-sân vườn, nhà gỗ nguyên căn”

Thiết kế gần gũi, hiện đại, có các hình ảnh homestay xen kẽ.

---

# 10. DANH SÁCH PHÒNG

Tạo section card phòng.

Các hạng phòng:

1. Phòng săn mây tại giường
2. Phòng tiêu chuẩn khách sạn
3. Bungalow săn mây-sân vườn
4. Nhà gỗ nguyên căn

Mỗi card gồm:

- Hình ảnh
- Tên phòng
- Mô tả ngắn nếu có dữ liệu
- Nút xem chi tiết
- Nút đặt phòng

**Không tự tạo thông tin giá, diện tích, số người hoặc tiện nghi nếu dữ liệu chưa được cung cấp.**

---

# 11. CHI TIẾT PHÒNG

Tạo khu vực giới thiệu chi tiết các loại phòng.

Sử dụng gallery hình ảnh lớn.

Thiết kế:

- Ảnh chính
- Ảnh phụ
- Tên phòng
- Nội dung mô tả được cung cấp
- CTA đặt phòng

Có hiệu ứng hover nhẹ trên ảnh.

---

# 12. HÌNH ẢNH

Tạo gallery ảnh dạng grid/masonry.

Hiển thị hình ảnh:

- Phòng
- Homestay
- Bungalow
- Nhà gỗ
- Sân vườn
- Không gian chung
- Cảnh Măng Đen

Click ảnh mở Lightbox.

Trên mobile gallery chuyển thành grid 1–2 cột phù hợp.

---

# 13. BẢNG GIÁ

Tạo section **Bảng giá** với thiết kế rõ ràng, cao cấp.

Nếu chưa có dữ liệu giá cụ thể:

- Không tự bịa giá.
- Hiển thị CTA **Đặt lịch / nhận tư vấn**.
- Khuyến khích khách liên hệ để nhận thông tin.

---

# 14. TIỆN NGHI

Tạo section tiện nghi dạng icon/card.

Thiết kế trực quan, hiện đại.

Chỉ sử dụng những tiện nghi thực tế khi có dữ liệu.

Không tự ý thêm các tiện nghi chưa được cung cấp.

---

# 15. KHÁCH HÀNG MỤC TIÊU

Tạo section thể hiện nhóm khách hàng phù hợp:

- Khách du lịch đến Măng Đen
- cặp đôi
- nhóm bạn
- gia đình
- khách cần thuê phòng ngắn ngày

Thiết kế bằng card/image kết hợp icon.

---

# 16. VỊ TRÍ / GOOGLE MAPS

Tạo section:

**Vị trí/bản đồ**

Hiển thị:

**Măng đen Romantic Homestay & BBQ - Google Maps**

Tạo khu vực Google Maps iframe nếu có URL embed.

Nếu chưa có URL embed chính xác, tạo placeholder để dễ thay thế sau.

Có CTA:

**Xem vị trí trên Google Maps**

---

# 17. FORM ĐẶT PHÒNG / NHẬN TƯ VẤN

Tạo section CTA nổi bật:

**Đặt lịch / nhận tư vấn**

Form gồm các trường phù hợp:

- Họ và tên
- Số điện thoại
- Ngày nhận phòng
- Ngày trả phòng
- Số lượng khách
- Nội dung yêu cầu

Nút:

**Gửi yêu cầu đặt phòng**

Lưu ý: Đây chỉ là frontend, chưa cần backend xử lý dữ liệu.

---

# 18. LIÊN HỆ

Hiển thị rõ:

**Ngân - 090 504 44 96**

**Zalo: 0 964102288**

**Facebook**

**Măng đen Romantic Homestay & BBQ - Google Maps**

Các nút:

- Gọi
- Zalo
- Messenger
- Google Maps

Trên mobile, nút gọi phải có thể click để gọi điện.

Trên desktop, click số điện thoại có thể copy số điện thoại vào clipboard.

---

# 19. FLOATING CONTACT BUTTON

Tạo nhóm nút cố định ở góc màn hình:

- Call
- Zalo
- Messenger

Thiết kế nhỏ gọn, nổi bật nhưng không che nội dung.

Có tooltip khi hover trên desktop.

---

# 20. BACK TO TOP

Khi người dùng scroll xuống:

- Hiển thị nút Back to Top.
- Đặt ở góc phải màn hình.
- Nút nằm bên dưới nhóm Call / Zalo / Messenger.
- Click sẽ smooth scroll về đầu trang.
- Khi đang ở đầu trang thì ẩn nút.

---

# 21. ANIMATION

Tạo animation mượt khi scroll:

- Fade Up
- Fade In
- Slide Left
- Slide Right
- Scale In
- Image Zoom nhẹ
- Card hover
- Button hover
- Parallax nhẹ cho một số background

Animation phải:

- Mượt
- Hiện đại
- Không gây lag
- Không làm layout bị giật
- Không ảnh hưởng tốc độ tải trang

Có thể sử dụng **Framer Motion** nếu cần.

---

# 22. RESPONSIVE

Desktop:

- Layout rộng
- Hình ảnh lớn
- Navbar đầy đủ

Tablet:

- Điều chỉnh grid
- Font và khoảng cách phù hợp

Mobile:

- Hamburger menu
- Card chuyển thành 1 cột
- Gallery responsive
- Form 1 cột
- CTA dễ bấm
- Floating buttons không che nội dung

Đặc biệt:

**Không để một dòng text chỉ còn 1 chữ hoặc 1 từ.**

Sử dụng:

- max-width hợp lý
- responsive font-size
- line-height
- text wrapping
- container width
- `text-wrap: balance` khi phù hợp

Đảm bảo nội dung nhìn đẹp trên cả desktop và mobile.

---

# 23. RELOAD PAGE

Bắt buộc:

Khi người dùng reload trang bằng F5 hoặc Ctrl + R:

**Trang phải tự động quay về đầu trang.**

Không giữ lại vị trí scroll trước đó.

Có thể sử dụng:

```js
window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
```

Triển khai phù hợp với React lifecycle.

---

# 24. SECTION HEIGHT

Mỗi section cần được thiết kế cân đối với viewport.

Không để section bị tràn nội dung bất hợp lý.

Không ép tất cả section bằng `height: 100vh` nếu nội dung cần chiều cao lớn hơn.

Ưu tiên:

- `min-height: 100vh` cho Hero
- Các section nội dung có chiều cao tự nhiên
- Padding responsive
- Không gây horizontal overflow

---

# 25. UI / UX

Thiết kế tổng thể:

**Hiện đại + gần gũi + lãng mạn + thiên nhiên Măng Đen.**

Màu sắc đề xuất:

- Trắng / kem
- Xanh lá tự nhiên
- Xanh rừng
- Nâu gỗ
- Màu be
- Điểm nhấn ấm áp

Không sử dụng quá nhiều màu.

Typography:

- Font hiện đại
- Dễ đọc
- Tiêu đề nổi bật
- Body text thoáng
- Responsive typography

Bo góc nhẹ, shadow mềm, button rõ ràng.

---

# 26. COMPONENT STRUCTURE

Tổ chức React component rõ ràng:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── RoomList.jsx
│   ├── RoomCard.jsx
│   ├── RoomDetail.jsx
│   ├── Gallery.jsx
│   ├── Pricing.jsx
│   ├── Amenities.jsx
│   ├── Location.jsx
│   ├── BookingForm.jsx
│   ├── Contact.jsx
│   ├── FloatingContact.jsx
│   └── BackToTop.jsx
│
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

Code phải sạch, dễ bảo trì và dễ thay đổi hình ảnh/nội dung sau này.

---

# 27. SEO FRONTEND

Thiết lập cơ bản:

- Title
- Meta description
- Semantic HTML
- Heading hierarchy
- Alt cho hình ảnh
- Open Graph cơ bản
- Responsive
- Performance tốt

Tên website:

**Măng Đen Romantic Homestay**

---

# 28. YÊU CẦU CUỐI CÙNG

Hãy tạo một landing page hoàn chỉnh, có cảm giác như website homestay chuyên nghiệp thực tế.

Ưu tiên:

1. Hình ảnh đẹp
2. CTA đặt phòng rõ ràng
3. UX mượt
4. Responsive
5. Animation nhẹ nhàng
6. Thông tin dễ đọc
7. Navigation dễ sử dụng
8. Không làm mất hoặc thay đổi nội dung được cung cấp
9. Không tự bịa thông tin chưa có
10. Reload luôn về đầu trang
11. Không để text xuống dòng chỉ còn 1 chữ / 1 từ
12. Không xuất hiện horizontal scrollbar trên mobile

Hãy viết **toàn bộ code React frontend hoàn chỉnh**, có thể chạy được ngay sau khi cài dependencies.