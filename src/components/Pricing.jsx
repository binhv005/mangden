import React from 'react';

export default function Pricing({ onOpenBooking }) {
  const packages = [
    {
      id: 1,
      name: 'Phòng Săn Mây',
      image: '/images/room1.jpg',
      price: 'Liên hệ',
      unitMain: '/ ĐÊM',
      features: [
        'Săn mây tại giường',
        'Cửa kính panorama',
        'Không gian lãng mạn',
      ],
      delayClass: 'delay-100',
      isFeatured: false,
    },
    {
      id: 2,
      name: 'Bungalow Sân Vườn',
      image: '/images/room3.jpg',
      price: 'Liên hệ',
      unitMain: '/ ĐÊM',
      features: [
        'Sân vườn hoa biệt lập',
        'Săn mây & hoàng hôn',
        'Tư vấn chu đáo 24/7',
      ],
      delayClass: 'delay-200',
      isFeatured: true,
    },
    {
      id: 3,
      name: 'Nhà Gỗ Nguyên Căn',
      image: '/images/room4.jpg',
      price: 'Liên hệ',
      unitMain: '/ ĐÊM',
      features: [
        'Nhà gỗ ấm áp riêng tư',
        'Sân nướng tiệc BBQ',
        'Dành cho nhóm & gia đình',
      ],
      delayClass: 'delay-300',
      isFeatured: false,
    },
  ];

  return (
    <section id="pricing" className="pricing-wave-section">
      <div className="container container-wide" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '55px' }}>
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
            BẢNG GIÁ &amp; TƯ VẤN PHÒNG
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
            Bảng Giá &amp; Tư Vấn Phòng
          </h2>
          <p
            style={{
              maxWidth: '660px',
              margin: '0 auto',
              color: 'var(--color-text-muted)',
              fontSize: '0.98rem',
            }}
          >
            Trải nghiệm kỳ nghỉ Măng Đen trọn vẹn. Liên hệ trực tiếp để nhận báo giá ưu đãi và hỗ trợ tốt nhất.
          </p>
        </div>

        {/* 3 Wave Pricing Cards Grid */}
        <div className="pricing-wave-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`pricing-wave-card ${pkg.isFeatured ? 'pricing-wave-featured' : ''} reveal reveal-up ${pkg.delayClass}`}
            >
              {/* TOP HALF: Pure Photo (NO text, NO overlay) + SVG Wave */}
              <div className="pricing-wave-header">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="pricing-wave-photo"
                />

                {/* Organic Smooth SVG Wave Transition */}
                <div className="pricing-wave-svg-box">
                  <svg
                    viewBox="0 0 500 120"
                    preserveAspectRatio="none"
                    className="pricing-wave-svg"
                  >
                    <path
                      d="M0,50 C180,120 320,-10 500,60 L500,120 L0,120 Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>

              {/* BOTTOM HALF: Clean, Minimalist Information Body */}
              <div className="pricing-wave-body">
                {/* Room Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: 'var(--color-forest)',
                    textAlign: 'center',
                    marginBottom: '14px',
                  }}
                >
                  {pkg.name}
                </h3>

                {/* Price Display without bottom horizontal line */}
                <div className="pricing-wave-price-row">
                  <span className="pricing-wave-num" style={{ fontSize: '1.75rem', color: '#a47148', fontWeight: 800 }}>
                    {pkg.price}
                  </span>

                  <div className="pricing-wave-divider-pipe" />

                  <span
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#718096',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {pkg.unitMain}
                  </span>
                </div>

                {/* Short & Punchy Feature List */}
                <ul className="pricing-wave-features">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="pricing-wave-feat-item">
                      <span
                        className="pricing-wave-dot"
                        style={{ backgroundColor: '#2a9d8f' }}
                      />
                      <span className="pricing-wave-feat-text" style={{ fontSize: '0.92rem', textTransform: 'none', fontWeight: 500, color: '#374151' }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Clean CTA Button */}
                <div className="pricing-wave-btn-wrap">
                  <button
                    onClick={onOpenBooking}
                    className="pricing-wave-buy-btn"
                  >
                    ĐẶT PHÒNG
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
