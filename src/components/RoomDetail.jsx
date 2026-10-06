import React, { useState } from 'react';
import { Calendar, CheckCircle2, ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function RoomDetail({ rooms, selectedRoomId, onSelectRoom, onOpenLightbox }) {
  const [activeId, setActiveId] = useState(selectedRoomId || rooms[0]?.id || 1);
  const currentRoom = rooms.find((r) => r.id === activeId) || rooms[0];

  return (
    <section
      id="room-detail"
      className="section-resort"
      style={{
        backgroundColor: 'var(--color-sand)',
        paddingTop: '110px',
        paddingBottom: '90px',
      }}
    >
      <div className="container container-wide">
        {/* "Our Story" 3-Column Arched Signature Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px 36px',
            alignItems: 'center',
            marginBottom: '70px',
          }}
        >
          {/* Left Arched Photo Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="arch-frame"
              style={{
                width: '100%',
                maxWidth: '320px',
                height: '420px',
                backgroundColor: 'var(--color-sand-dark)',
              }}
            >
              <img
                src="/images/room1.jpg"
                alt="Phòng săn mây Măng Đen Romantic"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Center Story & Exact Quote */}
          <div style={{ textAlign: 'center', padding: '0 12px' }}>
            <span className="tag-subtitle">GIỚI THIỆU HOMESTAY</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                color: 'var(--color-forest)',
                lineHeight: 1.25,
                marginBottom: '20px',
                fontWeight: 700,
              }}
            >
              Thoughtful Design. <br />
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-cormorant)', fontWeight: 400, color: 'var(--color-coral)' }}>
                Romantic Spaces.
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.08rem',
                lineHeight: 1.85,
                color: 'var(--color-forest)',
                fontStyle: 'italic',
                marginBottom: '24px',
              }}
            >
              “Măng Đen Romantic luôn vươn mình phát triển và thay đổi để đáp ứng thị hiếu của khách hàng. Romantic đa dạng các hạng phòng: phòng săn mây tại giường, phòng tiêu chuẩn khách sạn, bungalow săn mây-sân vườn, nhà gỗ nguyên căn”
            </p>

            <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              — <strong>Măng Đen Romantic Homestay & BBQ</strong>
            </div>

            <button
              onClick={() => onSelectRoom(currentRoom.name)}
              className="btn-resort-primary"
            >
              <span>Đặt phòng trải nghiệm</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Arched Photo Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="arch-frame"
              style={{
                width: '100%',
                maxWidth: '320px',
                height: '420px',
                backgroundColor: 'var(--color-sand-dark)',
              }}
            >
              <img
                src="/images/room4.jpg"
                alt="Nhà gỗ Măng Đen Romantic"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Room Interactive Tab Selector */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '36px',
            }}
          >
            {rooms.map((room) => {
              const isActive = room.id === activeId;
              return (
                <button
                  key={room.id}
                  onClick={() => setActiveId(room.id)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '30px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    backgroundColor: isActive ? 'var(--color-forest)' : 'var(--color-sand)',
                    color: isActive ? '#ffffff' : 'var(--color-forest)',
                    border: isActive ? '1px solid var(--color-forest)' : '1px solid var(--color-border)',
                  }}
                >
                  {room.name}
                </button>
              );
            })}
          </div>

          {/* Selected Room Details Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* Left Photo */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                height: '340px',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => onOpenLightbox(currentRoom.image, currentRoom.name)}
            >
              <img
                src={currentRoom.image}
                alt={currentRoom.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(16, 59, 43, 0.85)',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <ImageIcon size={14} />
                <span>Xem ảnh lớn</span>
              </div>
            </div>

            {/* Right Info */}
            <div>
              <span className="tag-subtitle">{currentRoom.badge}</span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  color: 'var(--color-forest)',
                  marginBottom: '14px',
                }}
              >
                {currentRoom.name}
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                {currentRoom.fullDescription || currentRoom.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                {currentRoom.highlights?.map((hl, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--color-forest)' }}>
                    <CheckCircle2 size={16} color="var(--color-coral)" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onSelectRoom(currentRoom.name)}
                className="btn-resort-primary"
              >
                <Calendar size={16} />
                <span>Đặt ngay {currentRoom.name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
