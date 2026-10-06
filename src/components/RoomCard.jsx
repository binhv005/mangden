import React from 'react';
import { Eye, Calendar, ArrowRight } from 'lucide-react';

export default function RoomCard({ room, onSelectRoom, onViewDetail }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'var(--transition-smooth)',
      }}
      className="resort-card"
    >
      {/* Photo Container */}
      <div
        style={{
          position: 'relative',
          height: '220px',
          overflow: 'hidden',
          backgroundColor: 'var(--color-sand-dark)',
          borderRadius: '10px',
        }}
      >
        <img
          src={room.image}
          alt={room.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'rgba(16, 59, 43, 0.85)',
            backdropFilter: 'blur(6px)',
            color: '#ffffff',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '1px',
            padding: '5px 12px',
            borderRadius: '20px',
            textTransform: 'uppercase',
          }}
        >
          {room.badge}
        </div>
      </div>

      {/* Body */}
      <div style={{ paddingTop: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            color: 'var(--color-forest)',
            marginBottom: '8px',
            fontWeight: 700,
          }}
        >
          {room.name}
        </h3>

        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}
        >
          {room.description}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginTop: 'auto',
          }}
        >
          <button
            onClick={() => onViewDetail(room)}
            style={{
              padding: '9px 14px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 600,
              backgroundColor: 'var(--color-sand)',
              color: 'var(--color-forest)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <Eye size={15} />
            <span>Chi tiết</span>
          </button>

          <button
            onClick={() => onSelectRoom(room.name)}
            className="btn-resort-primary"
            style={{
              padding: '9px 14px',
              fontSize: '0.82rem',
              borderRadius: '20px',
              justifyContent: 'center',
            }}
          >
            <Calendar size={15} />
            <span>Đặt phòng</span>
          </button>
        </div>
      </div>
    </div>
  );
}
