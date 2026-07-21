import { Link } from 'react-router-dom';
import { ShieldAlert, Award, HeartHandshake, Users, ArrowRight, Target, Eye } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOMetadata from '../components/SEOMetadata';
import WhatsAppIcon from '../components/WhatsAppIcon';

const About = () => {
  const breadcrumbs = [{ name: 'About Us', url: '/about' }];

  const values = [
    {
      title: '100% Original Hardware',
      desc: 'We strictly stock products covered under official manufacturer warranty schemes. Fake or refurbished parts are strictly forbidden at our store.',
      icon: ShieldAlert
    },
    {
      title: 'Years of Experience',
      desc: 'The build engineers at ROG Store have years of experience in hardware diagnostics and custom loops.',
      icon: Award
    },
    {
      title: 'Customer Satisfaction First',
      desc: 'Our work doesn’t end when you purchase. We support clients through installation advice, driver setups, and warranty claims.',
      icon: HeartHandshake
    },
    {
      title: 'Supporting local Esports',
      desc: 'We sponsor local gaming tournaments and coordinate with university computer gaming clubs in Rawalpindi and Islamabad.',
      icon: Users
    }
  ];

  return (
    <>
      <SEOMetadata
        title="About Our Store"
        description="Learn more about ROG Store in Midway Center, Rawalpindi. We provide premium PCs, gaming hardware, and warranties."
        keywords="ROG Store history, original computer store Rawalpindi, computer store Midway Center"
      />

      <div className="container" style={{ padding: '32px 24px' }}>
        <Breadcrumbs paths={breadcrumbs} />

        {/* Intro Section */}
        <section className="grid-cols-2" style={{ alignItems: 'center', marginTop: '32px', marginBottom: '80px', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1 style={{ fontSize: '40px', marginBottom: '24px', lineHeight: 1.1 }}>
              Midway Center's Premier <br />
              <span className="text-red-gradient">Gaming & Desktop</span> Hub
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              **ROG Store** is a specialized computer and gaming store located in Midway Center, Rawalpindi. We focus on providing high-performance gaming PCs, custom builds, high-quality hardware components, and gaming accessories.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              Whether you are a casual gamer, competitive player, digital artist, or IT professional, we help you find the right equipment to suit your computational needs. Every customized build is carefully assembled and tested by our local technicians to ensure reliability.
            </p>
            <Link to="/shop" className="btn btn-primary" style={{ fontSize: '14px' }}>
              Explore Our Store <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="glass-card" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
            <img
              src="/images/about_showroom.png"
              alt="Inside ROG Store hardware workshop"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </section>

        {/* Mission and Vision Grid */}
        <section className="grid-cols-2" style={{ marginBottom: '80px' }}>
          <div className="glass-card rgb-glow-hover" style={{ padding: '32px' }}>
            <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--accent-red-alpha)', border: '1px solid rgba(225, 39, 38, 0.2)', color: 'var(--accent-red)', marginBottom: '24px' }}>
              <Target size={20} />
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Our Mission</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              To empower the tech community in Pakistan by offering genuine, world-class computer hardware at competitive prices, backed by technical support and honest warranties.
            </p>
          </div>

          <div className="glass-card rgb-glow-hover" style={{ padding: '32px' }}>
            <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--accent-red-alpha)', border: '1px solid rgba(225, 39, 38, 0.2)', color: 'var(--accent-red)', marginBottom: '24px' }}>
              <Eye size={20} />
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Our Vision</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              To build a sustainable gaming and developer ecosystem in northern Pakistan, serving as the benchmark for premium electronic stores and hardware consultation hubs.
            </p>
          </div>
        </section>

        {/* Store Values Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>
            Our Operating Principles
          </h2>
          <div className="grid-cols-2">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  className="glass-card rgb-glow-hover"
                  style={{ padding: '32px', display: 'flex', gap: '24px' }}
                >
                  <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--accent-red)', flexShrink: 0 }}>
                    <IconComp size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{v.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to action section */}
        <section className="glass-card rgb-glow-hover" style={{ padding: '40px 56px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>
            Visit Our Store Today
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 32px auto' }}>
            We are located in Midway Center, Rawalpindi. Step in to inspect physical products, test out configurations, and seek live hardware advice.
          </p>
          <div className="flex-center" style={{ gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Get Store Address
            </Link>
            <a
              href="https://wa.me/923471100056"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <WhatsAppIcon size={18} /> Consult via WhatsApp
            </a>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
