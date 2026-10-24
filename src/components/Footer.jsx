import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-mark">Bondu</span>
          <span className="footer-brand-sub">Milk Shop</span>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Bondu Milk Shop. Premium Exotic Milks Delivered Across Pakistan.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <a href="#home" style={{ color: 'inherit' }}>Home</a>
          <a href="#products" style={{ color: 'inherit' }}>Milks</a>
          <a href="#about" style={{ color: 'inherit' }}>Purity</a>
          <a href="#contact" style={{ color: 'inherit' }}>Support</a>
        </div>
      </div>
    </footer>
  );
}
