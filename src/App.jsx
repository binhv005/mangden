import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RoomList from './components/RoomList';
import Pricing from './components/Pricing';
import Amenities from './components/Amenities';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import BackToTop from './components/BackToTop';
import { X, Sparkles } from 'lucide-react';

export default function App() {
  // Enforce automatic scroll to top on page reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Smooth Scroll Reveal Observer
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Trigger only once, prevent repeated refiring on scroll
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [selectedRoomName, setSelectedRoomName] = useState('');
  const [lightboxData, setLightboxData] = useState(null); // { src, caption }
  const [detailModalRoom, setDetailModalRoom] = useState(null);

  // 4 Room types strictly matching requirements
  const rooms = [
    {
      id: 1,
      name: 'Phòng săn mây tại giường',
      badge: 'Săn mây cực chill',
      image: '/images/room1.jpg',
      gallery: ['/images/room1.jpg', '/images/room2.jpg', '/images/hero-bg.jpg'],
      description: 'Thiết kế cửa kính panorama view thẳng thung lũng mây, thức giấc là chạm vào biển mây bồng bềnh.',
      fullDescription: 'Tận hưởng trọn vẹn đặc sản Măng Đen với trải nghiệm săn mây ngay tại giường ngủ. Phòng được bài trí tinh tế, ấm áp, có tầm nhìn panorama đón bình minh và những áng mây lượn lờ ngay trước mắt.',
      highlights: [
        'Cửa kính lớn bắt trọn khoảnh khắc biển mây mỗi sớm mai',
        'Nệm êm ái, chăn ấm chuẩn xứ lạnh Măng Đen',
        'Không gian lãng mạn cho các cặp đôi & người yêu thiên nhiên',
      ],
    },
    {
      id: 2,
      name: 'Phòng tiêu chuẩn khách sạn',
      badge: 'Tiêu chuẩn tiện nghi',
      image: '/images/room2.jpg',
      gallery: ['/images/room2.jpg', '/images/room1.jpg', '/images/room3.jpg'],
      description: 'Phòng nghỉ hiện đại, thanh lịch, trang bị đầy đủ tiện nghi cho chuyến nghỉ dưỡng trọn vẹn.',
      fullDescription: 'Được thiết kế theo phong cách hiện đại và trang nhã, phòng tiêu chuẩn khách sạn mang lại sự thoải mái, yên tĩnh tuyệt đối cho du khách sau ngày dài khám phá thác hồ Măng Đen.',
      highlights: [
        'Thiết kế hiện đại, nội thất cao cấp và sạch sẽ',
        'Không gian thoáng đãng, ánh sáng tự nhiên ngập tràn',
        'Phù hợp cho khách công tác hoặc lưu trú nghỉ dưỡng ngắn ngày',
      ],
    },
    {
      id: 3,
      name: 'Bungalow săn mây-sân vườn',
      badge: 'Bungalow sân vườn',
      image: '/images/room3.jpg',
      gallery: ['/images/room3.jpg', '/images/room1.jpg', '/images/room4.jpg'],
      description: 'Bungalow biệt lập xanh mát, view săn mây tuyệt đỉnh và sân vườn hoa lá ngập tràn.',
      fullDescription: 'Bungalow biệt lập sở hữu khuôn viên sân vườn riêng tư rực rỡ sắc hoa. Nơi bạn có thể vừa nhâm nhi tách trà nóng thơm nồng, vừa ngắm nhìn mây bay qua rặng thông xanh ngắt.',
      highlights: [
        'Khuôn viên sân vườn riêng biệt, ngập tràn cây xanh và hoa cỏ',
        'Tầm nhìn mở thoáng săn mây và ngắm hoàng hôn',
        'Rất thích hợp cho các cặp đôi hoặc gia đình nhỏ thư giãn',
      ],
    },
    {
      id: 4,
      name: 'Nhà gỗ nguyên căn',
      badge: 'Gia đình & Nhóm bạn',
      image: '/images/room4.jpg',
      gallery: ['/images/room4.jpg', '/images/room3.jpg', '/images/hero-bg.jpg'],
      description: 'Không gian nhà gỗ ấm áp, trọn vẹn sự riêng tư cho nhóm bạn và gia đình sum vầy tiệc BBQ.',
      fullDescription: 'Mang đậm phong vị núi rừng Tây Nguyên với vật liệu gỗ mộc mạc, nhà gỗ nguyên căn là chốn lưu trú lý tưởng cho nhóm đông người quây quần, cùng nướng BBQ và chia sẻ những khoảnh khắc ấm áp bên nhau.',
      highlights: [
        'Không gian nguyên căn riêng tư rộng rãi, ấm cúng',
        'Sân nướng tiệc BBQ ngoài trời thoáng mát',
        'Lý tưởng cho nhóm bạn thân và đại gia đình sum họp',
      ],
    },
  ];

  const handleSelectRoom = (roomName) => {
    setSelectedRoomName(roomName);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (src, caption) => {
    setLightboxData({ src, caption });
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenBooking={handleOpenBooking} onSelectRoom={handleSelectRoom} />
        <About onOpenBooking={handleOpenBooking} />
        <RoomList
          rooms={rooms}
          onSelectRoom={handleSelectRoom}
          onViewDetail={(room) => setDetailModalRoom(room)}
        />
        <Pricing onOpenBooking={handleOpenBooking} />
        <Amenities onOpenBooking={handleOpenBooking} />
        <BookingForm
          selectedRoomName={selectedRoomName}
          onResetRoom={() => setSelectedRoomName('')}
        />
      </main>

      {/* Footer & Contact Section */}
      <Contact />

      {/* Fixed Widgets */}
      <FloatingContact />
      <BackToTop />

      {/* Lightbox Modal */}
      {lightboxData && (
        <div className="lightbox-backdrop" onClick={handleCloseLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={handleCloseLightbox} aria-label="Close Lightbox">
              <X size={32} />
            </button>
            <img src={lightboxData.src} alt={lightboxData.caption || 'Homestay Photo'} className="lightbox-img" />
            {lightboxData.caption && (
              <div className="lightbox-caption">{lightboxData.caption}</div>
            )}
          </div>
        </div>
      )}

      {/* Quick Room Detail Modal */}
      {detailModalRoom && (
        <div
          className="lightbox-backdrop"
          onClick={() => setDetailModalRoom(null)}
          style={{ padding: '20px' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#362820',
              color: '#ffffff',
              maxWidth: '650px',
              width: '100%',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={() => setDetailModalRoom(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                color: '#ffffff',
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
              }}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div style={{ height: '260px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px' }}>
              <img
                src={detailModalRoom.image}
                alt={detailModalRoom.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="tag-subtitle" style={{ color: '#e0ad74' }}>
              {detailModalRoom.badge}
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#ffffff', margin: '4px 0 14px 0', fontWeight: 700 }}>
              {detailModalRoom.name}
            </h3>
            <p style={{ color: '#d9cfc4', lineHeight: 1.7, marginBottom: '24px' }}>
              {detailModalRoom.fullDescription}
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  const name = detailModalRoom.name;
                  setDetailModalRoom(null);
                  handleSelectRoom(name);
                }}
                className="btn-resort-primary"
                style={{ flexGrow: 1 }}
              >
                Đặt hạng phòng này
              </button>
              <button
                onClick={() => setDetailModalRoom(null)}
                style={{
                  padding: '10px 24px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
