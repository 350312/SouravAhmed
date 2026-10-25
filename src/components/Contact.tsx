import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">Get in Touch</span>
          <h2>Let's build something exceptional.</h2>
          <p className="section-sub">
            Whether you're looking for an AI engineer, interested in deploying automated workflows, or exploring a software collaboration &mdash; I'm eager to connect.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Communication Channels */}
          <div className="contact-info-panel">
            <div className="contact-direct-card">
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>
                Direct Communication
              </h3>

              <div className="contact-channel-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="var(--cyan)" />
                  <span className="channel-label">Email</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <a href="mailto:souravahmed695@gmail.com" className="channel-val">
                    souravahmed695@gmail.com
                  </a>
                  <button
                    onClick={() => copyToClipboard('souravahmed695@gmail.com', 'email')}
                    className="channel-copy-btn"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
              </div>

              <div className="contact-channel-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color="var(--violet)" />
                  <span className="channel-label">Phone</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <a href="tel:+8801917384051" className="channel-val">
                    +880 1917-384051
                  </a>
                  <button
                    onClick={() => copyToClipboard('+8801917384051', 'phone')}
                    className="channel-copy-btn"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
              </div>

              <div className="contact-channel-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} color="var(--emerald)" />
                  <span className="channel-label">Location</span>
                </div>
                <span className="channel-val">Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="contact-direct-card">
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>
                Professional Networks
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-1)', marginBottom: '16px' }}>
                Follow my open-source code and development updates across platforms.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.linkedin.com/in/sourav-ahmed-a9a300206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={13} />
                </a>
                <a
                  href="https://github.com/350312?tab=stars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>GitHub Repositories</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-1)', marginBottom: '24px' }}>
              Fill in your details and project inquiries below for a rapid response.
            </p>

            {submitted ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '24px',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
              >
                <Check size={28} color="var(--emerald)" style={{ margin: '0 auto 8px' }} />
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--emerald)' }}>
                  Message Received
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-1)', marginTop: '4px' }}>
                  Thank you for reaching out! Sourav will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="c-name">Your Name</label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-email">Email Address</label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-subject">Subject</label>
                  <input
                    id="c-subject"
                    type="text"
                    placeholder="AI Automation Inquiry / Project Collaboration"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    required
                    rows={4}
                    placeholder="Describe your project, timeline, or inquiry..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
