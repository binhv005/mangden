import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Location() {
  const mapUrl = "https://www.google.com/maps/search/M%C4%83ng+%C4%91en+Romantic+Homestay+%26+BBQ";

  return (
    <section
      id="location"
      style={{
        position: 'relative',
        backgroundImage: "url('/images/800796886_122264144912138604_4762902230785765224_n.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        paddingTop: '90px',
        paddingBottom: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Dark Mountain Panoramic Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(8, 24, 18, 0.92) 0%, rgba(10, 32, 24, 0.84) 50%, rgba(8, 22, 16, 0.9) 100%)',
          zIndex: 1,
        }}
      />

      <div className="container container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '50px 60px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Story & Information */}
          <div className="reveal reveal-left" style={{ maxWidth: '720px' }}>
            {/* Big Italic Serif Title matching sample */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.4rem, 6.8vw, 5.4rem)',
                fontStyle: 'italic',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.05,
                marginBottom: '32px',
                letterSpacing: '-1px',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
              }}
            >
              Đi Đâu?
            </h2>

            {/* 2 Info Fields: Địa chỉ & Thời gian on 1 line */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '28px 48px',
                marginBottom: '40px',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ minWidth: 'fit-content' }}>
                <div
                  style={{
                    color: '#f59e0b',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  ĐỊA CHỈ
                </div>
                <div
                  style={{
                    fontSize: '0.96rem',
                    color: 'rgba(255, 255, 255, 0.95)',
                    lineHeight: 1.4,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Măng Đen, Huyện Kon Plông, Tỉnh Kon Tum
                </div>
              </div>

              <div style={{ minWidth: 'fit-content' }}>
                <div
                  style={{
                    color: '#f59e0b',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  THỜI GIAN MỞ CỬA
                </div>
                <div
                  style={{
                    fontSize: '0.96rem',
                    color: 'rgba(255, 255, 255, 0.95)',
                    lineHeight: 1.4,
                    whiteSpace: 'nowrap',
                  }}
                >
                  06:00 – 22:30 • Thứ 2 – Chủ nhật • Bao gồm lễ/Tết
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: '#d94e34',
                  color: '#ffffff',
                  padding: '15px 36px',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  borderRadius: '50px',
                  boxShadow: '0 10px 30px rgba(217, 78, 52, 0.45)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#bf3c24';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 14px 35px rgba(217, 78, 52, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d94e34';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(217, 78, 52, 0.45)';
                }}
              >
                <span>XEM BẢN ĐỒ GOOGLE MAPS</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Glowing Territory Map Illustration */}
          <div
            className="reveal reveal-right delay-200"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            {/* Interactive link wrapper */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Nhấn để mở bản đồ vị trí chi tiết"
              style={{
                display: 'block',
                width: '100%',
                position: 'relative',
                textDecoration: 'none',
              }}
            >
              {/* Glowing SVG Map Graphic */}
              <svg
                viewBox="0 0 500 520"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.3))',
                }}
              >
                {/* Distance Route Annotation */}
                <text
                  x="140"
                  y="65"
                  fill="#fbbf24"
                  fontSize="14"
                  fontWeight="700"
                  letterSpacing="0.5"
                >
                  ← Từ TP. Kon Tum (~50km)
                </text>

                {/* Dark Organic Silhouette Shape with Glowing Border */}
                <path
                  d="M 240,80 
                     C 320,60 410,100 440,170 
                     C 465,220 440,280 435,340 
                     C 430,400 395,430 380,455 
                     C 360,490 310,500 280,480 
                     C 260,465 270,410 270,360 
                     C 270,300 265,240 240,210 
                     C 220,180 180,180 160,160 
                     C 130,130 180,95 240,80 Z"
                  fill="#102534"
                  stroke="#ffffff"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                {/* Primary Route Lines (Blue/Cyan Highway lines) */}
                <path
                  d="M 140,165 Q 260,190 420,205"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Secondary Connecting Road */}
                <path
                  d="M 285,200 Q 340,240 435,320"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Dotted Route (Access Path into Homestay) */}
                <path
                  d="M 275,470 L 272,350 Q 280,250 295,150"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />

                {/* Highway Badge 1: QL24 */}
                <g transform="translate(130, 145)">
                  <rect width="46" height="24" rx="5" fill="#facc15" />
                  <text
                    x="23"
                    y="16"
                    fill="#1e293b"
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    QL24
                  </text>
                </g>

                {/* Highway Badge 2: ĐT676 */}
                <g transform="translate(370, 240)">
                  <rect width="50" height="24" rx="5" fill="#facc15" />
                  <text
                    x="25"
                    y="16"
                    fill="#1e293b"
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    ĐT676
                  </text>
                </g>

                {/* Highway Badge 3: QL14 */}
                <g transform="translate(255, 360)">
                  <rect width="44" height="24" rx="5" fill="#facc15" />
                  <text
                    x="22"
                    y="16"
                    fill="#1e293b"
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    QL24
                  </text>
                </g>

                {/* Destination Location Marker Pill */}
                <g transform="translate(270, 140)">
                  {/* Black pill */}
                  <rect
                    x="15"
                    y="-13"
                    width="145"
                    height="28"
                    rx="14"
                    fill="rgba(8, 18, 14, 0.85)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                  />
                  {/* Yellow point dot */}
                  <circle cx="28" cy="1" r="3.5" fill="#facc15" />
                  {/* Text */}
                  <text
                    x="38"
                    y="5"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="700"
                  >
                    Măng Đen Romantic
                  </text>

                  {/* Glowing Red Pin with target circle */}
                  <circle cx="0" cy="-28" r="22" fill="#ef4444" opacity="0.35" />
                  <circle cx="0" cy="-28" r="16" fill="#dc2626" />
                  <circle cx="0" cy="-28" r="7" fill="#ffffff" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
