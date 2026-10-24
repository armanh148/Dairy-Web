import React from 'react';

export default function EarthFooter() {
  return (
    <footer className="footer-earth">
      <div className="footer-top-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '1.4rem' }}>🐮</span>
            <span className="footer-brand-title">COWEN</span>
          </div>
          <p className="footer-tagline">
            Pure dairy, thoughtfully crafted from pasture to bottle with ethical care for cows and nature.
          </p>
        </div>

        <div>
          <h4 className="footer-col-title">SHOP</h4>
          <ul className="footer-links-list">
            <li><a href="#products" className="footer-link">All Products</a></li>
            <li><a href="#products" className="footer-link">Cocoa Velvet</a></li>
            <li><a href="#products" className="footer-link">Strawberry Bliss</a></li>
            <li><a href="#products" className="footer-link">Golden Honey</a></li>
            <li><a href="#products" className="footer-link">Raw Camel Milk</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">ABOUT US</h4>
          <ul className="footer-links-list">
            <li><a href="#farm" className="footer-link">Our Story</a></li>
            <li><a href="#farm" className="footer-link">Farm Practices</a></li>
            <li><a href="#farm" className="footer-link">Sustainability</a></li>
            <li><a href="#farm" className="footer-link">Quality Promise</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">SUPPORT</h4>
          <ul className="footer-links-list">
            <li><a href="tel:+923001234567" className="footer-link">Contact Us</a></li>
            <li><a href="https://wa.me/923001234567" className="footer-link">WhatsApp Help</a></li>
            <li><a href="#farm" className="footer-link">Shipping & Delivery</a></li>
            <li><a href="#farm" className="footer-link">Cold-Chain Guarantee</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">EXPLORE</h4>
          <ul className="footer-links-list">
            <li><a href="#farm" className="footer-link">Pasture Blog</a></li>
            <li><a href="#farm" className="footer-link">Recipes</a></li>
            <li><a href="#farm" className="footer-link">Community</a></li>
            <li><a href="#farm" className="footer-link">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div>
          &copy; {new Date().getFullYear()} COWEN &bull; Bondu Milk Shop. All Rights Reserved.
        </div>

        <div className="footer-social-icons">
          <a href="#" aria-label="Facebook">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        <div style={{ display: 'flex', gap: '1.2rem' }}>
          <a href="#" style={{ color: 'inherit' }}>Privacy</a>
          <a href="#" style={{ color: 'inherit' }}>Policy</a>
          <a href="#" style={{ color: 'inherit' }}>Terms</a>
        </div>
      </div>
    </footer>
  );
}
