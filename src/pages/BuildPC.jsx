import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Cpu, Monitor, Zap, Palette, Gamepad2, Video, Code, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import WhatsAppIcon from '../components/WhatsAppIcon';

const BuildPC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState({
    purpose: '',
    budget: '',
    platform: '',
    gpu: '',
    aesthetic: 'RGB Showcase' // default for initial preview
  });

  const totalSteps = 4;

  const updateConfig = (key, value) => {
    setConfig({ ...config, [key]: value });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Preview Image Logic
  const getPreviewImage = () => {
    switch (config.aesthetic) {
      case 'Minimalist':
        return '/images/pc_minimalist.png';
      case 'Dual-Chamber':
        return '/images/pc_dual_chamber.png';
      case 'RGB Showcase':
      default:
        return '/images/pc_rgb.png';
    }
  };

  const generateWhatsAppLink = () => {
    const defaultNum = '923471100056';
    const textMessage = `Hello ROG Store, I would like to request a custom PC quote!

Here are my preferences from the PC Builder:
*Primary Purpose:* ${config.purpose}
*Budget Tier:* ${config.budget}
*CPU Platform:* ${config.platform}
*GPU Preference:* ${config.gpu}
*Case Aesthetic:* ${config.aesthetic}

Could you please provide some recommended builds and a quote based on these preferences?`;

    return `https://wa.me/${defaultNum}?text=${encodeURIComponent(textMessage)}`;
  };

  // Content for steps
  const purposes = [
    { id: 'Gaming', icon: Gamepad2, title: 'Hardcore Gaming', desc: 'Maximum FPS, ray tracing, and lowest latency for competitive and AAA titles.' },
    { id: 'Content Creation', icon: Video, title: 'Content Creation & Rendering', desc: 'Heavy multitasking, 4K/8K video editing, 3D modeling, and streaming.' },
    { id: 'Office & Coding', icon: Code, title: 'Workstation & Coding', desc: 'Fast compilation times, running virtual machines, and ultimate reliability.' }
  ];

  const budgets = [
    { id: 'Entry-Level', title: 'Entry-Level Sweet Spot', desc: 'Great for 1080p gaming and everyday tasks without breaking the bank.' },
    { id: 'Mid-Range', title: 'Mid-Range Performance', desc: 'Perfect for 1440p gaming and smooth content creation.' },
    { id: 'High-End', title: 'High-End Enthusiast', desc: 'Crushes 4K gaming and heavy rendering workloads with ease.' },
    { id: 'Ultimate', title: 'No Compromise Ultimate', desc: 'The absolute best hardware available. For those who want it all.' }
  ];

  const aesthetics = [
    { id: 'Minimalist', title: 'Minimalist & Stealth', desc: 'Sleek, matte black, no RGB lighting. Clean and professional.' },
    { id: 'RGB Showcase', title: 'RGB Showcase', desc: 'Vibrant, dynamic lighting, tempered glass, designed to be seen.' },
    { id: 'Dual-Chamber', title: 'Dual-Chamber Premium', desc: 'Wide panoramic glass, hidden cables, ultimate cooling layout.' }
  ];

  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  const getPerformanceRatings = () => {
    if (config.budget === 'Ultimate' || config.budget === 'High-End') {
      return [
        { label: '4K Ultra Gaming', rating: 'Outstanding', percent: 98 },
        { label: '1440p High Refresh', rating: 'Flawless', percent: 100 },
        { label: '3D Rendering', rating: 'Excellent', percent: 95 }
      ];
    } else if (config.budget === 'Mid-Range') {
      return [
        { label: '1440p Ultra Gaming', rating: 'Excellent', percent: 90 },
        { label: '1080p High Refresh', rating: 'Flawless', percent: 100 },
        { label: 'Video Editing', rating: 'Great', percent: 85 }
      ];
    } else {
      return [
        { label: '1080p Ultra Gaming', rating: 'Great', percent: 85 },
        { label: 'Esports Gaming', rating: 'Excellent', percent: 95 },
        { label: 'General Multitasking', rating: 'Smooth', percent: 90 }
      ];
    }
  };

  return (
    <>
      <SEOMetadata
        title="Build Your Custom PC"
        description="Design your dream Custom PC with ROG Store. Select your purpose, budget, and aesthetics, and get a personalized quote."
      />
      <div className="build-pc-container">
        
        {/* Left Side: Live Preview (Sticky) */}
        <div className="build-pc-preview">
          <div className="build-pc-preview-tag">
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live Preview</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.img
              key={config.aesthetic}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              src={getPreviewImage()}
              alt={`${config.aesthetic} PC Build`}
              style={{ width: '100%', maxWidth: '600px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
            />
          </AnimatePresence>
          <div className="build-pc-preview-footer">
            <span>{config.aesthetic} Aesthetic</span>
            <span>ROG Store Custom Build</span>
          </div>
        </div>

        {/* Right Side: Configurator Steps */}
        <div className="build-pc-steps">
          
          {/* Progress Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '60px' }}>
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold',
                  backgroundColor: step <= currentStep ? 'var(--accent-red)' : 'var(--bg-tertiary)',
                  color: step <= currentStep ? '#fff' : 'var(--text-secondary)',
                  transition: 'all 0.3s ease'
                }}>
                  {step < currentStep ? <CheckCircle2 size={16} /> : step}
                </div>
                {step < 4 && (
                  <div style={{ flex: 1, height: '2px', backgroundColor: step < currentStep ? 'var(--accent-red)' : 'var(--border-color)', transition: 'all 0.3s ease' }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Dynamic Step Content */}
          <div style={{ flex: 1, position: 'relative' }}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div key="step1" variants={variants} initial="hidden" animate="visible" exit="exit" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <h2 style={{ fontSize: '32px', marginBottom: '8px', letterSpacing: '-0.02em' }}>What is your primary use case?</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Select the main purpose for your custom PC.</p>
                  </div>
                  <div style={{ display: 'grid', gap: '16px' }}>
                    {purposes.map((p) => {
                      const Icon = p.icon;
                      const isSelected = config.purpose === p.id;
                      return (
                        <div 
                          key={p.id}
                          onClick={() => updateConfig('purpose', p.id)}
                          style={{ 
                            padding: '24px', borderRadius: 'var(--border-radius-lg)', cursor: 'pointer', border: `2px solid ${isSelected ? 'var(--accent-red)' : 'var(--border-color)'}`,
                            backgroundColor: isSelected ? 'rgba(229, 57, 53, 0.05)' : 'var(--bg-primary)',
                            display: 'flex', gap: '20px', alignItems: 'flex-start', transition: 'all 0.2s'
                          }}
                          className="hover:border-[var(--accent-red)]"
                        >
                          <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: isSelected ? 'var(--accent-red)' : 'var(--bg-tertiary)', color: isSelected ? '#fff' : 'var(--text-primary)', transition: 'all 0.2s' }}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>{p.title}</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{p.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" variants={variants} initial="hidden" animate="visible" exit="exit" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <h2 style={{ fontSize: '32px', marginBottom: '8px', letterSpacing: '-0.02em' }}>What is your performance tier?</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Select the range that fits your performance expectations.</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    {budgets.map((b) => {
                      const isSelected = config.budget === b.id;
                      return (
                        <div 
                          key={b.id}
                          onClick={() => updateConfig('budget', b.id)}
                          style={{ 
                            padding: '24px', borderRadius: 'var(--border-radius-lg)', cursor: 'pointer', border: `2px solid ${isSelected ? 'var(--accent-red)' : 'var(--border-color)'}`,
                            backgroundColor: isSelected ? 'rgba(229, 57, 53, 0.05)' : 'var(--bg-primary)',
                            transition: 'all 0.2s', display: 'flex', flexDirection: 'column', gap: '12px'
                          }}
                          className="hover:border-[var(--accent-red)]"
                        >
                          <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{b.title}</h3>
                          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{b.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" variants={variants} initial="hidden" animate="visible" exit="exit" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <h2 style={{ fontSize: '32px', marginBottom: '8px', letterSpacing: '-0.02em' }}>Hardware Preferences</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Tell us about any specific brand loyalties or aesthetic desires.</p>
                  </div>
                  
                  {/* CPU/GPU Grid */}
                  <div className="grid-cols-2" style={{ gap: '24px' }}>
                    {/* Platform */}
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>CPU Platform</h4>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {['No Preference', 'Intel', 'AMD'].map(opt => (
                          <button 
                            key={opt}
                            onClick={() => updateConfig('platform', opt)}
                            style={{ 
                              flex: 1, padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 600,
                              border: `1px solid ${config.platform === opt ? 'var(--accent-red)' : 'var(--border-color)'}`,
                              backgroundColor: config.platform === opt ? 'rgba(229, 57, 53, 0.1)' : 'var(--bg-primary)',
                              color: config.platform === opt ? 'var(--accent-red)' : 'var(--text-primary)'
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* GPU */}
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>Graphics (GPU)</h4>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {['No Preference', 'NVIDIA', 'Radeon'].map(opt => (
                          <button 
                            key={opt}
                            onClick={() => updateConfig('gpu', opt)}
                            style={{ 
                              flex: 1, padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 600,
                              border: `1px solid ${config.gpu === opt ? 'var(--accent-red)' : 'var(--border-color)'}`,
                              backgroundColor: config.gpu === opt ? 'rgba(229, 57, 53, 0.1)' : 'var(--bg-primary)',
                              color: config.gpu === opt ? 'var(--accent-red)' : 'var(--text-primary)'
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Aesthetics */}
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>Case Aesthetic (Changes Preview)</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      {aesthetics.map(a => (
                        <div
                          key={a.id}
                          onClick={() => updateConfig('aesthetic', a.id)}
                          style={{
                            padding: '16px', borderRadius: '12px', cursor: 'pointer',
                            border: `2px solid ${config.aesthetic === a.id ? 'var(--accent-red)' : 'var(--border-color)'}`,
                            backgroundColor: config.aesthetic === a.id ? 'rgba(229, 57, 53, 0.05)' : 'var(--bg-primary)'
                          }}
                        >
                          <h5 style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: '15px' }}>{a.title}</h5>
                          <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{a.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div key="step4" variants={variants} initial="hidden" animate="visible" exit="exit" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <h2 style={{ fontSize: '32px', marginBottom: '8px', letterSpacing: '-0.02em', background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Your Custom Build Profile
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Review your configuration and request a personalized quote.</p>
                  </div>

                  {/* Summary Box */}
                  <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden' }}>
                    <div className="build-pc-summary-grid">
                      <div>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Purpose</span>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{config.purpose || 'Not Selected'}</div>
                      </div>
                      <div>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Performance Tier</span>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{config.budget || 'Not Selected'}</div>
                      </div>
                      <div>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Platform Preference</span>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{config.platform || 'No Preference'}</div>
                      </div>
                      <div>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>GPU Preference</span>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{config.gpu || 'No Preference'}</div>
                      </div>
                      <div style={{ gridColumn: 'span 2' }}>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Aesthetic Profile</span>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{config.aesthetic}</div>
                      </div>
                    </div>

                    {/* Performance Ratings */}
                    <div style={{ padding: '24px', backgroundColor: 'var(--bg-tertiary)' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>Estimated Performance</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {getPerformanceRatings().map((perf, idx) => (
                          <div key={idx}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                              <span>{perf.label}</span>
                              <span style={{ fontWeight: 'bold', color: 'var(--accent-red)' }}>{perf.rating}</span>
                            </div>
                            <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}>
                              <motion.div 
                                initial={{ width: 0 }} 
                                animate={{ width: `${perf.percent}%` }} 
                                transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                style={{ height: '100%', background: 'var(--gradient-accent)' }} 
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div style={{ marginTop: '16px' }}>
                    <a 
                      href={generateWhatsAppLink()} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn"
                      style={{ 
                        width: '100%', padding: '20px', background: 'var(--gradient-accent)', color: '#fff', fontSize: '18px', fontWeight: 'bold',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', boxShadow: '0 8px 24px rgba(229, 57, 53, 0.4)', textDecoration: 'none'
                      }}
                    >
                      <WhatsAppIcon size={24} /> Request Quote on WhatsApp
                    </a>
                    <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '16px' }}>
                      A store expert will review your profile and send a detailed quotation.
                    </p>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
            {currentStep > 1 ? (
              <button onClick={prevStep} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ChevronLeft size={16} /> Back
              </button>
            ) : <div></div>}
            
            {currentStep < 4 && (
              <button 
                onClick={nextStep} 
                className="btn btn-primary" 
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                disabled={(currentStep === 1 && !config.purpose) || (currentStep === 2 && !config.budget)}
              >
                Continue <ArrowRight size={16} />
              </button>
            )}
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .build-pc-container {
          display: flex;
          min-height: 100vh;
          background-color: var(--bg-secondary);
          overflow: hidden;
        }
        .build-pc-preview {
          width: 45%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--bg-charcoal) 0%, #111 100%);
          padding: 40px;
        }
        .build-pc-steps {
          flex: 1;
          padding: 40px 5%;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .build-pc-preview-tag {
          position: absolute;
          top: 40px;
          left: 40px;
          z-index: 10;
        }
        .build-pc-preview-footer {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          display: flex;
          justify-content: space-between;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
        }
        .build-pc-summary-grid {
          padding: 24px;
          border-bottom: 1px solid var(--border-color);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        @media (max-width: 991px) {
          .build-pc-container {
            flex-direction: column;
            min-height: auto;
            overflow: visible;
          }
          .build-pc-preview {
            width: 100%;
            height: 320px;
            padding: 30px;
          }
          .build-pc-preview img {
            max-height: 240px;
          }
          .build-pc-steps {
            padding: 32px 20px;
            overflow-y: visible;
          }
          .build-pc-preview-tag {
            top: 20px;
            left: 20px;
          }
          .build-pc-preview-footer {
            bottom: 20px;
            left: 20px;
            right: 20px;
            font-size: 12px;
          }
        }
        
        @media (max-width: 576px) {
          .build-pc-summary-grid {
            grid-template-columns: 1fr;
          }
          .build-pc-preview {
            height: 260px;
            padding: 20px;
          }
          .build-pc-preview img {
            max-height: 185px;
          }
        }
      `}} />
    </>
  );
};

export default BuildPC;
