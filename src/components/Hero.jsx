import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ onOpenBooking, onSelectRoom }) {
  const [checkIn, setCheckIn] = useState('2026-10-22');
  const [checkOut, setCheckOut] = useState('2026-10-28');
  const [guests, setGuests] = useState('02');

  const getDayAndMonth = (dateStr) => {
    if (!dateStr) return { day: '22', month: '/ Tháng 10' };
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return {
        day: parts[2],
        month: `/ Tháng ${parseInt(parts[1], 10)}`,
      };
    }
    return { day: '22', month: '/ Tháng 10' };
  };

  const inDate = getDayAndMonth(checkIn);
  const outDate = getDayAndMonth(checkOut);

  const handleSearch = (e) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking') || document.getElementById('rooms');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        backgroundImage: "url('/images/room1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'clamp(580px, 80vh, 850px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '120px',
        paddingBottom: '0',
        boxSizing: 'border-box',
        overflow: 'visible',
        zIndex: 10,
      }}
    >
      {/* Translucent Dark Luxury Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 25, 18, 0.55) 0%, rgba(5, 18, 12, 0.72) 100%)',
          zIndex: 1,
        }}
      />

      {/* Hero Center Title Content matching ROVERO Sample */}
      <div
        className="container container-wide"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          margin: 'auto 0',
          padding: '20px 20px',
        }}
      >
        <div className="reveal reveal-up">
          {/* Big Center Title in Dancing Script Yellow Matching Sample */}
          <h1
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(3.8rem, 8.8vw, 7.2rem)',
              color: '#fec829',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '1px',
              textShadow: '0 4px 22px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.9)',
              marginBottom: '10px',
            }}
          >
            Măng Đen Romantic
          </h1>

          {/* Subtitle / Slogan */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 400,
              letterSpacing: '0.5px',
              maxWidth: '680px',
              margin: '0 auto 16px auto',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
            }}
          >
            Chạm vào biển mây bồng bềnh ngay trước thềm phòng nghỉ
          </p>


        </div>
      </div>

      {/* Floating Bottom Booking Bar Overlapping between Hero and Next Section */}
      <div
        className="container container-wide"
        style={{
          position: 'relative',
          zIndex: 30,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 20px',
          marginBottom: '-46px',
        }}
      >
        <div className="rovero-search-container reveal reveal-up delay-200">
          <form onSubmit={handleSearch} className="rovero-search-bar">
            {/* Field 1: NHẬN PHÒNG */}
            <div className="rovero-search-item">
              <span className="rovero-search-label">NHẬN PHÒNG</span>
              <div className="rovero-search-value">
                <div>
                  <span className="rovero-number">{inDate.day}</span>
                  <span className="rovero-sub">{inDate.month}</span>
                </div>
                <ChevronDown size={16} color="#8c827a" />
              </div>
              <input
                type="date"
                className="hero-date-input"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                aria-label="Ngày nhận phòng"
              />
            </div>

            {/* Field 2: TRẢ PHÒNG */}
            <div className="rovero-search-item">
              <span className="rovero-search-label">TRẢ PHÒNG</span>
              <div className="rovero-search-value">
                <div>
                  <span className="rovero-number">{outDate.day}</span>
                  <span className="rovero-sub">{outDate.month}</span>
                </div>
                <ChevronDown size={16} color="#8c827a" />
              </div>
              <input
                type="date"
                className="hero-date-input"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                aria-label="Ngày trả phòng"
              />
            </div>

            {/* Field 3: SỐ KHÁCH */}
            <div className="rovero-search-item">
              <span className="rovero-search-label">SỐ KHÁCH</span>
              <div className="rovero-search-value">
                <div>
                  <span className="rovero-number">{guests}</span>
                  <span className="rovero-sub">/ Khách</span>
                </div>
                <ChevronDown size={16} color="#8c827a" />
              </div>
              <select
                className="hero-date-input"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                aria-label="Số lượng khách"
                style={{ opacity: 0 }}
              >
                <option value="01">01 / Khách</option>
                <option value="02">02 / Khách</option>
                <option value="04">04 / Khách (Gia đình)</option>
                <option value="06">06+ / Khách (Đoàn)</option>
              </select>
            </div>

            {/* Field 4: NÚT TÌM PHÒNG TRỐNG (Gold/Bronze Accent) */}
            <button type="submit" className="rovero-btn">
              <span>TÌM PHÒNG</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
