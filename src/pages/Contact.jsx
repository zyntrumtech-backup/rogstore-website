import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, User, Send, CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOMetadata from '../components/SEOMetadata';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const breadcrumbs = [{ name: 'Contact', url: '/contact' }];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <SEOMetadata
        title="Contact Store & Location"
        description="Get in touch with ROG Store in Midway Center, Rawalpindi. Call 0347-1100056 or visit our store."
        keywords="ROG Store phone number, Midway Center direction"
      />

      <div className="container" style={{ padding: '32px 24px' }}>
        <Breadcrumbs paths={breadcrumbs} />

        <div style={{ maxWidth: '700px', marginBottom: '48px', marginTop: '16px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '12px' }}>
            Contact & Directions
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Have questions about inventory, build custom quotes, or warranties? Visit us, call us, or send a message below.
          </p>
        </div>

        <div className="grid-cols-2" style={{ alignItems: 'flex-start' }}>
          
          {/* Left Column - Contact Coordinates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '12px' }}>
                ROG Store Info
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--accent-red)', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>Store Address</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Midway Center, Rawalpindi, Pakistan</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--accent-red)', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>Call / Phone</span>
                    <a href="tel:03471100056" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      0347-1100056
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--accent-red)', flexShrink: 0 }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>WhatsApp Business</span>
                    <a href="https://wa.me/923471100056" target="_blank" rel="noreferrer" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      0347-1100056
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--accent-red)', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>Business Hours</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Full Week, 9AM-11AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embed Map area */}
            <div className="glass-card" style={{ overflow: 'hidden', height: '240px', position: 'relative' }}>
              <iframe
                title="ROG Store Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.5186981881774!2d73.07559232923583!3d33.641738499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95e0c66f1fa7%3A0x492b7e859c2c67e3!2sROG%20Store!5e0!3m2!1sen!2spk!4v1720800000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)'
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Validated Contact Form */}
          <div style={{ width: '100%', position: 'relative' }}>
            <div className="glass-card" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
              <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '24px' }}>
                Send an Inquiry Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid-cols-2">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your Name"
                    />
                    {errors.name && <span style={{ fontSize: '12px', color: 'var(--accent-red)' }}>{errors.name}</span>}
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="name@example.com"
                    />
                    {errors.email && <span style={{ fontSize: '12px', color: 'var(--accent-red)' }}>{errors.email}</span>}
                  </div>
                </div>

                <div className="grid-cols-2">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Phone Number (Optional)</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. 0300-1234567"
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. Custom PC quote"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Describe what product or specs you are interested in..."
                  ></textarea>
                  {errors.message && <span style={{ fontSize: '12px', color: 'var(--accent-red)' }}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ marginTop: '8px', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>

              {/* Form Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px', zIndex: 10, backdropFilter: 'blur(4px)' }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.8, y: 10 }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      <CheckCircle size={64} style={{ color: '#10b981', marginBottom: '16px' }} />
                      <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                        Message Sent Successfully!
                      </h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', maxWidth: '350px', marginBottom: '24px' }}>
                        Thank you for contacting ROG Store. Our sales representatives will review your inquiry and get back to you shortly.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="btn btn-secondary"
                        style={{ fontSize: '12px', padding: '8px 16px' }}
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
