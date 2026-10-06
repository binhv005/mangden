import React, { useState } from 'react';
import { Phone, Send, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const FacebookIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const mapUrl = "https://www.google.com/maps/search/M%C4%83ng+%C4%91en+Romantic+Homestay+%26+BBQ";

  const handlePhoneClick = (e) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      navigator.clipboard.writeText('0905044496');
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const quickLinks = [
    { label: 'Giới thiệu homestay', href: '#about' },
    { label: 'Danh sách phòng', href: '#rooms' },
    { label: 'Bảng giá & Gói nghỉ', href: '#pricing' },
    { label: 'Tiện nghi & Dịch vụ', href: '#amenities' },
    { label: 'Đặt lịch nhận tư vấn', href: '#booking' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        backgroundImage: "url('/images/bgft.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        zIndex: 20,
        padding: '75px 0 35px 0',
        overflow: 'hidden',
      }}
    >
      {/* Translucent Black Overlay - Lớp phủ đen */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(5, 15, 10, 0.85)',
          zIndex: 1,
        }}
      />

      <div className="container container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px 48px',
            marginBottom: '45px',
          }}
        >
          {/* Column 1: Brand Info & Quote */}
          <div className="reveal reveal-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="/images/logo.jpg"
                alt="Măng Đen Romantic Homestay Logo"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--color-coral)',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 800,
                    fontSize: '1.08rem',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    lineHeight: 1.15,
                  }}
                >
                  Măng Đen Romantic
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    color: '#f6b9a8',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Homestay &amp; BBQ Studio
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--color-text-light-muted)',
                lineHeight: 1.7,
                marginTop: '6px',
                fontStyle: 'italic',
              }}
            >
              “Măng Đen Romantic luôn vươn mình phát triển và thay đổi để đáp ứng thị hiếu của khách hàng. Romantic đa dạng các hạng phòng: phòng săn mây tại giường, phòng tiêu chuẩn khách sạn, bungalow săn mây-sân vườn, nhà gỗ nguyên căn”
            </p>

            {/* Social Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Fanpage"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-coral)';
                  e.currentTarget.style.borderColor = 'var(--color-coral)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <FacebookIcon size={18} />
              </a>

              <a
                href="https://zalo.me/0964102288"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo tư vấn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0068ef';
                  e.currentTarget.style.borderColor = '#0068ef';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <Send size={16} />
              </a>

              <a
                href="tel:0905044496"
                onClick={handlePhoneClick}
                aria-label="Hotline đặt phòng"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-coral)';
                  e.currentTarget.style.borderColor = 'var(--color-coral)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="reveal reveal-up delay-150">
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#ffffff',
                marginBottom: '18px',
                position: 'relative',
                paddingBottom: '6px',
                borderBottom: '2px solid var(--color-coral)',
                display: 'inline-block',
              }}
            >
              Khám Phá
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      color: 'var(--color-text-light-muted)',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f6b9a8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light-muted)')}
                  >
                    <ChevronRight size={14} color="var(--color-coral)" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Google Maps Embed right in Footer */}
          <div className="reveal reveal-up delay-300">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  color: '#ffffff',
                  position: 'relative',
                  paddingBottom: '6px',
                  borderBottom: '2px solid var(--color-coral)',
                  display: 'inline-block',
                }}
              >
                Bản Đồ Vị Trí
              </h4>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#f6b9a8',
                  fontSize: '0.8rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#f6b9a8')}
              >
                <span>Mở Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div
              style={{
                width: '100%',
                height: '210px',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
              }}
            >
              <iframe
                title="Măng đen Romantic Homestay & BBQ - Google Maps"
                src="https://maps.google.com/maps?q=Mang+Den+Romantic+Homestay&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          className="reveal reveal-up delay-400"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.85rem',
            color: 'var(--color-text-light-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>Măng Đen Romantic Homestay</strong>. Tất cả các quyền được bảo lưu.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Modern – Cozy – Romantic – Nature</span>
            <span>•</span>
            <span>Măng Đen, Kon Tum</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
