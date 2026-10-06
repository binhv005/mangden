import React, { useState } from 'react';
import { Calendar, Send, CheckCircle2, User, Phone, Users } from 'lucide-react';

export default function BookingForm({ selectedRoomName, onResetRoom }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: selectedRoomName || 'Phòng săn mây tại giường',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedRoomName) {
      setFormData((prev) => ({ ...prev, roomType: selectedRoomName }));
    }
  }, [selectedRoomName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Vui lòng điền họ tên và số điện thoại!');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      roomType: 'Phòng săn mây tại giường',
      notes: '',
    });
    if (onResetRoom) onResetRoom();
  };

  return (
    <section
      id="booking"
      className="section-resort"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '60px',
        paddingBottom: '80px',
      }}
    >
      <div className="container container-wide">
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="tag-subtitle">ĐẶT PHÒNG NHANH CHÓNG</span>
          <h2
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              color: '#c83824',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '10px',
              textShadow: '0 2px 8px rgba(200, 56, 36, 0.12)',
            }}
          >
            Đặt Lịch &amp; Nhận Tư Vấn
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '580px', margin: '8px auto 0 auto' }}>
            Điền thông tin bên dưới, nhân viên tư vấn Măng Đen Romantic Homestay sẽ liên hệ với bạn trong thời gian sớm nhất!
          </p>
        </div>

        {/* 50/50 Split Box: Left Image, Right Form - No Border Radius, No Overlay */}
        <div
          className="booking-split-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            border: '1px solid rgba(16, 59, 43, 0.2)',
            borderRadius: 0,
            overflow: 'hidden',
            backgroundColor: '#103b2b',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Left Column: 50% Image - No overlay, No border-radius */}
          <div
            className="reveal reveal-left"
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '480px',
              height: '100%',
              borderRadius: 0,
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/room3.jpg"
              alt="Măng Đen Romantic Homestay Room"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: 0,
              }}
            />
          </div>

          {/* Right Column: 50% Form - Dark Green Background */}
          <div
            className="reveal reveal-right delay-200"
            style={{
              padding: 'clamp(28px, 4vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: 0,
              backgroundColor: '#103b2b',
              color: '#ffffff',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px auto',
                  }}
                >
                  <CheckCircle2 size={36} color="var(--color-coral)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '10px' }}>
                  Gửi Yêu Cầu Thành Công!
                </h3>
                <p style={{ color: '#d9cfc4', fontSize: '0.98rem', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                  Cảm ơn <strong>{formData.fullName}</strong>. Măng Đen Romantic Homestay sẽ gọi lại cho bạn qua số <strong>{formData.phone}</strong> trong ít phút.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-resort-primary"
                  style={{ borderRadius: 0 }}
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  {/* Họ tên */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#f5ede4', marginBottom: '6px' }}>
                      Họ và tên <span style={{ color: 'var(--color-coral)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--color-border)',
                        borderRadius: 0,
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* SĐT */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#f5ede4', marginBottom: '6px' }}>
                      Số điện thoại / Zalo <span style={{ color: 'var(--color-coral)' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Ví dụ: 0905 044 496"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 0,
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px' }}>
                  {/* Check in */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#f5ede4', marginBottom: '6px' }}>
                      Ngày nhận phòng
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '11px 12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 0,
                        fontSize: '0.88rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Check out */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#f5ede4', marginBottom: '6px' }}>
                      Ngày trả phòng
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '11px 12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 0,
                        fontSize: '0.88rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Khách */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#f5ede4', marginBottom: '6px' }}>
                      Số lượng khách
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '11px 12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 0,
                        fontSize: '0.88rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="1">1 khách</option>
                      <option value="2">2 khách (Cặp đôi)</option>
                      <option value="3-4">3 - 4 khách (Gia đình)</option>
                      <option value="5-8">5 - 8 khách (Nhóm bạn)</option>
                      <option value="9+">Trên 8 khách (Đoàn)</option>
                    </select>
                  </div>
                </div>

                {/* Hạng phòng */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#f5ede4', marginBottom: '6px' }}>
                    Hạng phòng quan tâm
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 0,
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <option value="Phòng săn mây tại giường">Phòng săn mây tại giường</option>
                    <option value="Phòng tiêu chuẩn khách sạn">Phòng tiêu chuẩn khách sạn</option>
                    <option value="Bungalow săn mây-sân vườn">Bungalow săn mây-sân vườn</option>
                    <option value="Nhà gỗ nguyên căn">Nhà gỗ nguyên căn</option>
                    <option value="Tư vấn chọn phòng phù hợp">Tư vấn chọn phòng phù hợp</option>
                  </select>
                </div>

                {/* Ghi chú */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#f5ede4', marginBottom: '6px' }}>
                    Nội dung yêu cầu / Ghi chú
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="Ghi chú thêm về giờ check-in, chuẩn bị tiệc BBQ, trang trí phòng..."
                    value={formData.notes}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 0,
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-resort-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '0.98rem',
                    borderRadius: 0,
                    marginTop: '8px',
                  }}
                >
                  <Send size={17} />
                  <span>GỬI YÊU CẦU ĐẶT PHÒNG</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
