import React from 'react';

export default function HarvestingTradition({ onOpenCheckout }) {
  return (
    <section className="section-harvesting">
      <div className="harvesting-grid">
        {/* Left Column */}
        <div className="harvest-col-left">
          <h2 className="harvest-title-left">
            HARVESTING <br />
            TRADITION,
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontSize: '1.2rem' }}>
            🐮
          </div>

          <p className="harvest-desc-left">
            Rooted in heritage pastoralism, we craft pure, nourishing milk with patience and care, bringing authentic natural goodness to every home.
          </p>
        </div>

        {/* Center: Three Realistic Bottles */}
        <div className="harvest-center-bottles">
          <img
            src="/images/three_bottles.jpg"
            alt="Three milk bottles: Chocolate Cocoa, Strawberry Bliss, Golden Honey"
            className="harvest-bottles-img"
          />
        </div>

        {/* Right Column */}
        <div className="harvest-col-right">
          <div className="avatar-cluster-wrap">
            <div className="avatar-cluster">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Farmer"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Farmer"
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                alt="Farmer"
              />
            </div>
            <span className="avatar-caption">Pure milk crafted with care from 20+ local ethical farms</span>
          </div>

          <h2 className="harvest-title-right">
            CULTIVATING <br />
            QUALITY
          </h2>

          <button
            className="hero-cta-btn harvest-order-btn"
            style={{ background: '#f59e0b', color: '#1e110a' }}
            onClick={() => onOpenCheckout()}
          >
            ORDER BOTTLES NOW
          </button>
        </div>
      </div>
    </section>
  );
}
