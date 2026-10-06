import React from 'react';
import { Star, ArrowRight, Eye, Calendar } from 'lucide-react';

export default function RoomList({ rooms, onSelectRoom, onViewDetail, onOpenBooking }) {
  // Enhanced specifications matching each room type
  const roomSpecs = {
    1: {
      stars: 5,
      reviews: '12 Đánh giá',
      price: 'Liên hệ',
      status: 'Có sẵn',
      capacity: '2 khách (Cặp đôi)',
      view: 'Săn mây thung lũng panorama',
      bed: '1 Giường King size lớn',
    },
    2: {
      stars: 5,
      reviews: '18 Đánh giá',
      price: 'Liên hệ',
      status: 'Có sẵn',
      capacity: '2 khách',
      view: 'Thoáng đãng view núi rừng',
      bed: '1 Giường đôi cao cấp',
    },
    3: {
      stars: 5,
      reviews: '25 Đánh giá',
      price: 'Liên hệ',
      status: 'Có sẵn',
      capacity: '2 - 4 khách',
      view: 'Săn mây & Sân vườn hoa',
      bed: '2 Giường đôi êm ái',
    },
    4: {
      stars: 5,
      reviews: '30 Đánh giá',
      price: 'Liên hệ',
      status: 'Có sẵn',
      capacity: '6 - 12 khách (Đoàn)',
      view: 'Bao trọn rừng thông đại ngàn',
      bed: 'Nguyên căn nhiều giường ngủ',
    },
  };

  return (
    <section
      id="rooms"
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        padding: '30px 0 0 0',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Section Header Container */}
      <div className="container container-wide" style={{ marginBottom: '45px' }}>
        <div className="reveal reveal-up" style={{ textAlign: 'center' }}>
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
            DANH SÁCH PHÒNG
          </span>
          <h2
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              color: '#c83824',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '8px',
              textShadow: '0 2px 8px rgba(200, 56, 36, 0.12)',
            }}
          >
            Hạng Phòng Nghỉ Dưỡng
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '1.45rem',
              color: 'var(--color-forest)',
              letterSpacing: '0.5px',
            }}
          >
            Inspired by Nature, Designed for Living.
          </p>
        </div>
      </div>

      {/* Alternating Checkerboard Room Rows (Edge-to-Edge 100% Full Width) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%', marginBottom: 0 }}>
        {rooms.map((room, index) => {
          const isImageLeft = index % 2 === 0;
          const specs = roomSpecs[room.id] || {
            stars: 5,
            reviews: '15 Đánh giá',
            price: 'Liên hệ',
            status: 'Có sẵn',
            capacity: '2 - 4 khách',
            view: 'View săn mây Măng Đen',
            bed: 'Giường êm ái cao cấp',
          };

          return (
            <div
              key={room.id}
              className="reveal reveal-up"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                backgroundColor: '#362820',
                boxShadow: 'none',
                border: 'none',
                borderRadius: 0,
                overflow: 'hidden',
                width: '100%',
              }}
            >
                {/* Photo Block */}
                <div
                  className={`reveal ${isImageLeft ? 'reveal-left' : 'reveal-right delay-150'}`}
                  style={{
                    order: isImageLeft ? 1 : 2,
                    position: 'relative',
                    minHeight: '380px',
                    height: '100%',
                    backgroundColor: '#271c16',
                  }}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(16, 59, 43, 0.92)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      padding: '6px 14px',
                      borderRadius: 0,
                      textTransform: 'uppercase',
                    }}
                  >
                    {room.badge}
                  </div>
                </div>

                {/* Content Info Block */}
                <div
                  className={`reveal ${isImageLeft ? 'reveal-right delay-150' : 'reveal-left'}`}
                  style={{
                    order: isImageLeft ? 2 : 1,
                    padding: 'clamp(28px, 4vw, 48px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#362820',
                  }}
                >
                  {/* Star Ratings */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '10px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#eab308" color="#eab308" />
                    ))}
                    <span style={{ fontSize: '0.82rem', color: '#c4b5a5', marginLeft: '6px' }}>
                      ({specs.reviews})
                    </span>
                  </div>

                  {/* Room Name Heading */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                      color: '#ffffff',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      marginBottom: '10px',
                    }}
                  >
                    {room.name}
                  </h3>

                  {/* Description text */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#d9cfc4',
                      lineHeight: 1.65,
                      marginBottom: '18px',
                    }}
                  >
                    {room.description}
                  </p>

                  {/* Pricing line */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '18px' }}>
                    <span style={{ fontSize: '0.86rem', color: '#b8aba0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Giá phòng:
                    </span>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 800, color: '#e0ad74' }}>
                      {specs.price}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#b8aba0', textTransform: 'uppercase' }}>
                      / ĐÊM
                    </span>
                  </div>

                  {/* Specs Table List */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '8px',
                      padding: '16px 0',
                      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                      marginBottom: '24px',
                      fontSize: '0.85rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, color: '#f5ede4', textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                        TÌNH TRẠNG:
                      </span>
                      <span style={{ color: '#86efac', fontWeight: 600 }}>{specs.status}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, color: '#f5ede4', textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                        SỨC CHỨA:
                      </span>
                      <span style={{ color: '#d9cfc4' }}>{specs.capacity}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, color: '#f5ede4', textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                        TẦM NHÌN:
                      </span>
                      <span style={{ color: '#d9cfc4' }}>{specs.view}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, color: '#f5ede4', textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                        LOẠI GIƯỜNG:
                      </span>
                      <span style={{ color: '#d9cfc4' }}>{specs.bed}</span>
                    </div>
                  </div>

                  {/* Action Button: BOOK NOW */}
                  <div>
                    <button
                      onClick={() => onSelectRoom(room.name)}
                      style={{
                        padding: '12px 30px',
                        backgroundColor: '#a47148',
                        color: '#ffffff',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        border: 'none',
                        borderRadius: 0,
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8c5e37')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#a47148')}
                    >
                      ĐẶT PHÒNG
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
}
