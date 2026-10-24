import React, { useState, useEffect } from 'react';
import { MapPin, ShoppingBag, Sparkles, Menu, X } from 'lucide-react';

export function CowenEmblem({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-emblem-svg">
      <rect width="36" height="36" rx="10" fill="url(#emblemForestGrad)" />
      <path
        d="M18 8C18 8 11.5 16.5 11.5 21C11.5 24.6 14.4 27.5 18 27.5C21.6 27.5 24.5 24.6 24.5 21C24.5 16.5 18 8 18 8Z"
        fill="url(#emblemGoldGrad)"
      />
      <path
        d="M18 13C18 13 21 17 21 20C21 21.65 19.65 23 18 23C16.35 23 15 21.65 15 20C15 17 18 13 18 13Z"
        fill="#FAF7F2"
        opacity="0.32"
      />
      <circle cx="18" cy="20.5" r="1.8" fill="#FAF7F2" />
      <defs>
        <linearGradient id="emblemForestGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#144A30" />
          <stop offset="1" stopColor="#0B2B1B" />
        </linearGradient>
        <linearGradient id="emblemGoldGrad" x1="11.5" y1="8" x2="24.5" y2="27.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6D378" />
          <stop offset="1" stopColor="#C48831" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar({ cartCount, onOpenCart, onOpenCheckout, onOpenAi }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header-bar">
      <div className="navbar-pill-container">
        {/* Left: Brand Logo */}
        <a href="#" className="nav-brand-group" onClick={() => setMobileMenuOpen(false)}>
          <CowenEmblem size={34} />
          <div className="nav-brand-text-col">
            <span className="nav-brand-title">COWEN</span>
            <span className="nav-brand-sub">EST. 1984 • HERITAGE DAIRY</span>
          </div>
        </a>

        {/* Center: Nav Links (Desktop) */}
        <nav className="nav-links-desktop">
          <a href="#farm" className="nav-menu-link">THE FARM</a>
          <a href="#products" className="nav-menu-link">ARTISANAL MILK</a>
          <a href="#tradition" className="nav-menu-link">OUR TRADITION</a>
          <a href="#reviews" className="nav-menu-link">REVIEWS</a>
          <a href="#contact" className="nav-menu-link">CONTACT</a>
        </nav>

        {/* Right: Actions */}
        <div className="nav-actions-desktop">
          <button
            className="nav-btn-find"
            onClick={() => handleNavClick('contact')}
          >
            <MapPin size={13} color="var(--forest-green)" />
            <span>FIND US</span>
          </button>

          <button
            className="nav-btn-ai"
            onClick={onOpenAi}
            title="Ask AI Wellness Advisor"
          >
            <Sparkles size={13} />
            <span>AI ADVISOR</span>
          </button>

          <button
            className="nav-btn-order"
            onClick={onOpenCart}
            aria-label={`Cart with ${cartCount} items`}
          >
            <ShoppingBag size={14} className="nav-order-icon" />
            <span className="nav-order-text-full">BAG</span>
            <div className="nav-order-badge">{cartCount}</div>
          </button>

          <button
            className="nav-mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="nav-mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="nav-mobile-dropdown">
            <div className="nav-mobile-links">
              <a href="#farm" onClick={() => handleNavClick('farm')}>THE FARM</a>
              <a href="#products" onClick={() => handleNavClick('products')}>ARTISANAL MILK</a>
              <a href="#tradition" onClick={() => handleNavClick('tradition')}>OUR TRADITION</a>
              <a href="#reviews" onClick={() => handleNavClick('reviews')}>REVIEWS</a>
              <a href="#contact" onClick={() => handleNavClick('contact')}>CONTACT</a>
            </div>

            <div className="nav-mobile-actions">
              <button
                className="nav-btn-ai mobile-full"
                onClick={() => { setMobileMenuOpen(false); onOpenAi(); }}
              >
                <Sparkles size={15} />
                <span>AI WELLNESS ADVISOR</span>
              </button>

              <button
                className="nav-btn-order mobile-full"
                onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
              >
                <ShoppingBag size={15} />
                <span>VIEW CART ({cartCount})</span>
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
