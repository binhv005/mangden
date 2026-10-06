import React from 'react';
import { Heart, Users, UserCheck, Compass, Clock, Check, ArrowRight } from 'lucide-react';

export default function TargetAudience({ onOpenBooking }) {
  const audiences = [
    {
      title: 'Khách Du Lịch Măng Đen',
      desc: 'Khám phá thiên đường sương mù & đồi thông hoang sơ.',
      icon: Compass,
    },
    {
      title: 'Cặp Đôi Lãng Mạn',
      desc: 'Khoảnh khắc ngọt ngào bên ly trà ấm và mây ngàn bồng bềnh.',
      icon: Heart,
    },
    {
      title: 'Nhóm Bạn Thân',
      desc: 'Gắn kết cùng tiệc nướng BBQ ấm cúng trong tiết trời se lạnh.',
      icon: Users,
    },
    {
      title: 'Gia Đình Nghỉ Dưỡng',
      desc: 'Không gian nhà gỗ, sân vườn rộng rãi và an yên.',
      icon: UserCheck,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Khám Phá',
      desc: 'Tìm hiểu các hạng phòng săn mây, bungalow & nhà gỗ.',
    },
    {
      step: '2',
      title: 'Chọn Phòng',
      desc: 'Lựa chọn không gian phù hợp với nhu cầu của bạn.',
    },
    {
      step: '3',
      title: 'Xác Nhận',
      desc: 'Nhận tư vấn báo giá và xác nhận giữ phòng nhanh chóng.',
    },
    {
      step: '4',
      title: 'Tận Hưởng',
      desc: 'Trải nghiệm kỳ nghỉ săn mây và BBQ tuyệt vời tại Măng Đen.',
    },
  ];

  return (
    <section
      id="process"
      className="section-resort"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="container container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '50px 60px',
          }}
        >
          {/* Left Column: Why Choose Us / Target Audience */}
          <div>
            <span className="tag-subtitle">KHÁCH HÀNG MỤC TIÊU</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                color: 'var(--color-forest)',
                marginBottom: '28px',
                fontWeight: 700,
              }}
            >
              Không Gian Dành Cho Mọi Chuyến Đi
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
            >
              {audiences.map((aud, idx) => {
                const Icon = aud.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '20px 18px',
                      backgroundColor: 'var(--color-sand)',
                      borderRadius: '12px',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-coral)',
                        boxShadow: 'var(--shadow-soft)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: 'var(--color-forest)',
                          marginBottom: '4px',
                        }}
                      >
                        {aud.title}
                      </h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                        {aud.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 4-Step Booking Journey */}
          <div>
            <span className="tag-subtitle">QUY TRÌNH ĐẶT PHÒNG</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                color: 'var(--color-forest)',
                marginBottom: '28px',
                fontWeight: 700,
              }}
            >
              Đặt Phòng Nhanh & Dễ Dàng
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '16px',
              }}
            >
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '22px 16px',
                    backgroundColor: 'var(--color-sand)',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-coral)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      marginBottom: '12px',
                    }}
                  >
                    {step.step}
                  </div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '6px' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <button onClick={onOpenBooking} className="btn-resort-primary" style={{ width: '100%' }}>
                <span>Bắt đầu đặt phòng ngay</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
