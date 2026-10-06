import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Hạng phòng', href: '#rooms' },
    { label: 'Bảng giá', href: '#pricing' },
    { label: 'Tiện nghi', href: '#amenities' },
    { label: 'Đặt phòng', href: '#booking' },
    { label: 'Vị trí & Liên hệ', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.35s ease',
          backgroundColor: isScrolled ? 'rgba(251, 249, 245, 0.96)' : 'rgba(251, 249, 245, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid #e8e2d8' : '1px solid rgba(232, 226, 216, 0.6)',
          boxShadow: isScrolled ? '0 6px 20px rgba(16, 59, 43, 0.05)' : 'none',
          padding: isScrolled ? '6px 0' : '8px 0',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(12px, 2.5vw, 32px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(10px, 1.8vw, 24px)',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              src="/images/logo.jpg"
              alt="Măng Đen Romantic Homestay Logo"
              style={{
                width: isScrolled ? '60px' : '78px',
                height: isScrolled ? '60px' : '78px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2.5px solid var(--color-coral)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(10px, 1.4vw, 22px)',
              flexShrink: 1,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: 'var(--color-forest)',
                  fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  padding: '6px 4px',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--color-coral)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--color-forest)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <button
              onClick={onOpenBooking}
              className="btn-resort-primary"
              style={{
                padding: '10px clamp(16px, 1.5vw, 24px)',
                fontSize: 'clamp(0.82rem, 0.9vw, 0.92rem)',
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Đặt phòng ngay</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                color: 'var(--color-forest)',
                padding: '7px',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                background: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(16, 59, 43, 0.06)',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--color-sand)',
            zIndex: 890,
            padding: '90px 24px 36px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.3s ease',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: 'var(--color-forest)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={15} color="var(--color-coral)" />
              </a>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-resort-primary"
              style={{ width: '100%', padding: '13px', fontSize: '0.9rem' }}
            >
              <span>Đặt phòng / Nhận tư vấn</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1200px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 1199px) {
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
