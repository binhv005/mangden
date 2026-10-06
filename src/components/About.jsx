import React from 'react';

export default function About({ onOpenBooking }) {
  // 3 Vertical Portrait Photos matching the 3-column reference sample
  const photos = [
    {
      id: 1,
      image: '/images/room1.jpg',
      alt: 'Phòng nghỉ săn mây Măng Đen Romantic Homestay',
      delayClass: 'delay-100',
    },
    {
      id: 2,
      image: '/images/800881803_122264144774138604_1436053715312253906_n.jpg',
      alt: 'Ban công ngắm biển mây Măng Đen Romantic Homestay',
      delayClass: 'delay-200',
    },
    {
      id: 3,
      image: '/images/room3.jpg',
      alt: 'Khuôn viên sân vườn Măng Đen Romantic Homestay',
      delayClass: 'delay-300',
    },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        backgroundColor: '#fbf7f2',
        paddingTop: '75px',
        paddingBottom: '30px',
        overflow: 'hidden',
      }}
    >
      <div className="container container-wide">
        {/* Section Header */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
            TRẢI NGHIỆM LƯU TRÚ &amp; NGHỈ DƯỠNG
          </span>
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
            Trải Nghiệm Lưu Trú &amp; Nghỉ Dưỡng
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Chốn dừng chân ấm cúng, tinh tế và an yên giữa đại ngàn Măng Đen. Mở tung khung cửa là chạm ngay biển mây trắng muốt và rặng thông xanh ngắt.
          </p>
        </div>

        {/* 3-Column Equal Height Portrait Gallery (Pure Photos, No Text) */}
        <div
          className="reveal reveal-up delay-150"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(12px, 2vw, 24px)',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={onOpenBooking}
              className={photo.delayClass}
              style={{
                width: '100%',
                aspectRatio: '3 / 4',
                maxHeight: '520px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                backgroundColor: '#f3ede4',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(16, 59, 43, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <img
                src={photo.image}
                alt={photo.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #about .reveal.reveal-up.delay-150 {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
