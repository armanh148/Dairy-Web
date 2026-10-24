import React, { useState } from 'react';
import { CowenEmblem } from './Navbar';
import { ArrowRight, Check, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

export default function EarthFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer id="contact" className="footer-earth">
      {/* Top Value Proposition Strip */}
      <div className="footer-value-strip">
        <div className="footer-val-item">
          <ShieldCheck size={18} className="footer-val-icon" />
          <span>Cold-Chain Delivered Under 4&deg;C</span>
        </div>
        <div className="footer-val-item">
          <HeartHandshake size={18} className="footer-val-icon" />
          <span>100% Certified Ethical Husbandry</span>
        </div>
        <div className="footer-val-item">
          <PhoneCall size={18} className="footer-val-icon" />
          <span>Same-Day WhatsApp Support: +92 300 1234567</span>
        </div>
      </div>

      <div className="footer-top-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <CowenEmblem size={36} />
            <div className="nav-brand-text-col">
              <span className="footer-brand-title">COWEN</span>
              <span className="footer-brand-sub">EST. 1984 &bull; HERITAGE DAIRY</span>
            </div>
          </div>
          <p className="footer-tagline">
            Pure single-source dairy, cold-crafted from pasture to bottle with reverence for soil, cattle, and family wellness.
          </p>

          {/* Newsletter Input */}
          <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
            <span className="newsletter-label">Join Our Morning Milk Bulletin</span>
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                {subscribed ? <Check size={14} /> : <ArrowRight size={14} />}
              </button>
            </div>
            {subscribed && (
              <span className="newsletter-success">Thank you! You are subscribed to morning milk drops.</span>
            )}
          </form>
        </div>

        <div>
          <h4 className="footer-col-title">COLLECTION</h4>
          <ul className="footer-links-list">
            <li><a href="#products" className="footer-link">Golden Honey Cow Milk</a></li>
            <li><a href="#products" className="footer-link">Cocoa Velvet Dark Milk</a></li>
            <li><a href="#products" className="footer-link">Strawberry Bliss Meadow Milk</a></li>
            <li><a href="#products" className="footer-link">Raw Desert Camel Milk</a></li>
            <li><a href="#products" className="footer-link">Royal Donkey Cell Vitality</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">THE FARM</h4>
          <ul className="footer-links-list">
            <li><a href="#farm" className="footer-link">Pasture Standards</a></li>
            <li><a href="#farm" className="footer-link">Regenerative Grazing</a></li>
            <li><a href="#tradition" className="footer-link">Our Heritage Tradition</a></li>
            <li><a href="#farm" className="footer-link">A2 Beta-Casein Science</a></li>
            <li><a href="#reviews" className="footer-link">Customer Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">CLIENT SERVICE</h4>
          <ul className="footer-links-list">
            <li><a href="tel:+923001234567" className="footer-link">Direct Line: +92 300 1234567</a></li>
            <li><a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp Concierge</a></li>
            <li><a href="#contact" className="footer-link">Cold-Chain Guarantee</a></li>
            <li><a href="#contact" className="footer-link">Subscription Management</a></li>
            <li><a href="#contact" className="footer-link">Delivery Areas & Times</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div>
          &copy; {new Date().getFullYear()} COWEN &bull; Bondu Milk Shop. Handcrafted with reverence for nature.
        </div>

        <div className="footer-social-icons">
          <a href="#" aria-label="Facebook">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
