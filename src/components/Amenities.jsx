import React from 'react';

export default function Amenities() {
  const experiences = [
    {
      title: 'Phòng săn mây tại giường',
      image: '/images/room1.jpg',
      delayClass: 'delay-100',
    },
    {
      title: 'Phòng tiêu chuẩn khách sạn',
      image: '/images/room2.jpg',
      delayClass: 'delay-200',
    },
    {
      title: 'Bungalow săn mây - sân vườn',
      image: '/images/room3.jpg',
      delayClass: 'delay-300',
    },
    {
      title: 'Nhà gỗ nguyên căn',
      image: '/images/room4.jpg',
      delayClass: 'delay-400',
    },
  ];

  return (
    <section
      id="amenities"
      className="section-resort"
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        paddingTop: '35px',
        paddingBottom: '85px',
      }}
    >
      <div className="container container-wide">
        {/* Section Header */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="tag-subtitle">TIỆN NGHI & DỊCH VỤ</span>
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
            Trải Nghiệm Đầy Đủ Tiện Nghi
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', maxWidth: '650px', margin: '8px auto 0 auto' }}>
            Măng Đen Romantic luôn vươn mình phát triển và thay đổi để đáp ứng thị hiếu của khách hàng với đa dạng các hạng phòng lưu trú.
          </p>
        </div>

        {/* 2-Column Layout matching the mockup */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px 40px',
            alignItems: 'stretch',
          }}
        >
          {/* Left: 2x2 Grid of 4 Experience cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px 20px',
            }}
          >
            {experiences.map((item, idx) => (
              <div
                key={idx}
                className={`reveal reveal-up ${item.delayClass}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
              >
                {/* Rounded Photo */}
                <div
                  style={{
                    width: '100%',
                    height: '185px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    marginBottom: '12px',
                    backgroundColor: '#f3f4f6',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    color: 'var(--color-forest)',
                    textAlign: 'center',
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right: Featured Tall Card with Official Homestay Quote */}
          <div
            className="reveal reveal-right delay-200"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Top Tall Image */}
            <div
              style={{
                width: '100%',
                height: 'clamp(260px, 32vw, 360px)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
                marginBottom: '24px',
                backgroundColor: '#f3f4f6',
              }}
            >
              <img
                src="/images/800881803_122264144774138604_1436053715312253906_n.jpg"
                alt="Măng Đen Romantic Homestay"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            {/* Inspiring Quote matching the sample mockup */}
            <blockquote
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.45rem, 2.4vw, 1.95rem)',
                fontWeight: 800,
                color: 'var(--color-forest)',
                lineHeight: 1.35,
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              "Một hành trình đẹp bắt đầu từ một nơi ở tốt."
            </blockquote>

            <div
              style={{
                fontStyle: 'italic',
                color: 'var(--color-text-muted)',
                fontSize: '1.05rem',
                marginTop: '10px',
                fontWeight: 500,
              }}
            >
              Măng Đen Romantic Homestay
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
