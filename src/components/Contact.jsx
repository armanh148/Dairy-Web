import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border)', textAlign: 'center' }}>
      <div className="section-inner">
        <div className="section-label">Direct Concierge</div>
        <h2 className="section-title">
          Have Questions? <span className="accent">Let's Connect</span>
        </h2>
        <p className="section-desc" style={{ margin: '0 auto 2rem' }}>
          Reach out for bulk subscriptions, dietary consultation, or same-day cold delivery queries.
        </p>

        <div className="contact-actions">
          <a href="tel:+923001234567" className="contact-btn phone">
            <Phone size={18} />
            <span>Call +92 300 1234567</span>
          </a>

          <a
            href="https://wa.me/923001234567?text=Assalam-o-Alaikum!%20I%20would%20like%20to%20inquire%20about%20Bondu%20Exotic%20Milks."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
