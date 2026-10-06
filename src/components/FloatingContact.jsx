import React from 'react';
import { Phone, Send, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <aside
      aria-label="Liên hệ nhanh"
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '96px',
        zIndex: 800,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
      }}
    >
      {/* Call Button */}
      <div className="floating-item-wrapper" style={{ position: 'relative' }}>
        <a
          href="tel:0905044496"
          className="floating-btn call-btn"
          aria-label="Gọi điện cho Ngân"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(220, 38, 38, 0.5)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            animation: 'pulseGlow 2.5s infinite',
          }}
        >
          <Phone size={22} />
        </a>
        <span className="floating-tooltip">Gọi: 090 504 44 96</span>
      </div>

      {/* Zalo Button */}
      <div className="floating-item-wrapper" style={{ position: 'relative' }}>
        <a
          href="https://zalo.me/0964102288"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn zalo-btn"
          aria-label="Nhắn tin Zalo"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#0068ef',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0, 104, 239, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }}
        >
          <Send size={20} />
        </a>
        <span className="floating-tooltip">Chat Zalo: 0964 102 288</span>
      </div>

      {/* Messenger Button */}
      <div className="floating-item-wrapper" style={{ position: 'relative' }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn messenger-btn"
          aria-label="Chat Facebook Messenger"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#1877f2',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(24, 119, 242, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }}
        >
          <MessageCircle size={22} />
        </a>
        <span className="floating-tooltip">Messenger</span>
      </div>

      <style>{`
        .floating-btn:hover {
          transform: scale(1.12) translateY(-2px);
        }
        .floating-item-wrapper:hover .floating-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
        .floating-tooltip {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          background-color: rgba(15, 24, 32, 0.95);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.8rem;
          white-space: nowrap;
          border: 1px solid rgba(198, 156, 109, 0.3);
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        @media (max-width: 768px) {
          .floating-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
