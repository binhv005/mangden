import React from 'react';
import { Eye, Quote, ArrowRight } from 'lucide-react';

export default function Gallery({ onOpenLightbox }) {
  const circles = [
    { src: '/images/hero-bg.jpg', title: 'Cảnh quan Măng Đen', desc: 'Rừng thông & mây ngàn' },
    { src: '/images/room1.jpg', title: 'Phòng săn mây', desc: 'Săn mây tại giường' },
    { src: '/images/room2.jpg', title: 'Phòng khách sạn', desc: 'Tiêu chuẩn tiện nghi' },
    { src: '/images/room3.jpg', title: 'Bungalow sân vườn', desc: 'Không gian xanh mát' },
  ];

  return (
    <section
      id="gallery"
      className="section-resort"
      style={{
        backgroundColor: 'var(--color-sage-light)',
        paddingTop: '80px',
        paddingBottom: '90px',
        position: 'relative',
      }}
    >
      <div className="container container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px 48px',
            alignItems: 'center',
          }}
        >
          {/* Left: Testimonial & Atmosphere Quote */}
          <div style={{ maxWidth: '440px' }}>
            <div style={{ color: 'var(--color-coral)', marginBottom: '14px' }}>
              <Quote size={36} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                color: 'var(--color-forest)',
                lineHeight: 1.4,
                marginBottom: '18px',
                fontStyle: 'italic',
              }}
            >
              “Kỳ nghỉ tại Măng Đen Romantic Homestay tựa như một giấc mơ bình yên giữa mây trời và rừng thông.”
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              Không gian sân vườn thoáng đãng, phòng nghỉ ngập tràn ánh nắng và tiệc nướng BBQ ấm cúng mỗi tối.
            </p>

            <span className="tag-subtitle">— CẢM NHẬN DU KHÁCH</span>
          </div>

          {/* Right: 4 Circular Photo Portals */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
            }}
            className="circle-gallery-grid"
          >
            {circles.map((item, idx) => (
              <div
                key={idx}
                className="circle-portal"
                onClick={() => onOpenLightbox(item.src, `${item.title} - ${item.desc}`)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-sand-dark)',
                  border: '3px solid #ffffff',
                  position: 'relative',
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .circle-gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
