import React, { useState, useEffect } from 'react';
import { MapPin, ShoppingBag, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenCheckout, onOpenAi }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
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
          <div className="nav-cow-badge">🐮</div>
          <span className="nav-brand-title">COWEN</span>
        </a>

        {/* Center: Nav Links (Desktop) */}
        <nav className="nav-links-desktop">
          <a href="#farm" className="nav-menu-link">FARM</a>
          <a href="#about" className="nav-menu-link">ABOUT</a>
          <a href="#products" className="nav-menu-link">PRODUCTS</a>
          <a href="#contact" className="nav-menu-link">CONTACT</a>
        </nav>

        {/* Right: Actions */}
        <div className="nav-actions-desktop">
          <button
            className="nav-btn-find"
            onClick={() => handleNavClick('contact')}
          >
            <MapPin size={14} color="var(--forest-green)" />
            <span>FIND US</span>
          </button>

          <button
            className="nav-btn-ai"
            onClick={onOpenAi}
            title="Ask AI Wellness Advisor"
          >
            <Sparkles size={14} />
            <span>AI ADVISOR</span>
          </button>

          <button
            className="nav-btn-order"
            onClick={onOpenCart}
            aria-label={`Cart with ${cartCount} items`}
          >
            <ShoppingBag size={15} className="nav-order-icon" />
            <span className="nav-order-text-full">ORDER TODAY</span>
            <span className="nav-order-text-short">CART</span>
            <div className="nav-order-badge">{cartCount}</div>
          </button>

          <button
            className="nav-mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
              <a href="#farm" onClick={() => handleNavClick('farm')}>FARM</a>
              <a href="#about" onClick={() => handleNavClick('about')}>ABOUT US</a>
              <a href="#products" onClick={() => handleNavClick('products')}>PRODUCTS</a>
              <a href="#contact" onClick={() => handleNavClick('contact')}>CONTACT</a>
            </div>

            <div className="nav-mobile-actions">
              <button
                className="nav-btn-ai mobile-full"
                onClick={() => { setMobileMenuOpen(false); onOpenAi(); }}
              >
                <Sparkles size={16} />
                <span>AI WELLNESS ADVISOR</span>
              </button>

              <button
                className="nav-btn-order mobile-full"
                onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
              >
                <ShoppingBag size={16} />
                <span>VIEW CART ({cartCount})</span>
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

