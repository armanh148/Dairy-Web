import React from 'react';
import { Check, Shield } from 'lucide-react';

export default function About({ onOpenCheckout }) {
  const highlights = [
    '100% Raw & Organic — zero synthetic preservatives, no hormones or water adulteration.',
    'Express 24h Cold-Chain Delivery in insulated packaging directly to your doorstep.',
    'Every single batch is laboratory tested for microbiological safety and natural fat density.',
    'Transparent pricing with ethical pastoralist partnerships supporting rural heritage farmers.'
  ];

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <div className="section-label">Why Bondu Milk Shop?</div>
            <h2 className="section-title">
              Pakistan's Gold Standard in <br />
              <span className="accent">Exotic Health Milks</span>
            </h2>

            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              At Bondu Milk Shop, we honor age-old pastoral traditions while leveraging 
              modern hygienic testing. From Cholistan desert camel herds to certified organic 
              dairy sanctuaries, each bottle delivers raw, untainted goodness.
            </p>

            <ul className="about-features">
              {highlights.map((text, i) => (
                <li key={i} className="about-feature">
                  <div className="about-feature-icon">
                    <Check size={16} />
                  </div>
                  <div className="about-feature-text">{text}</div>
                </li>
              ))}
            </ul>

            <button
              className="btn-primary"
              onClick={() => onOpenCheckout()}
            >
              Order Farm-Fresh Today
            </button>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <span className="about-card-emoji">🐪</span>
              <div className="about-card-name">Camel Milk</div>
              <div className="about-card-sub">Diabetes & Insulin Regimen</div>
            </div>

            <div className="about-card">
              <span className="about-card-emoji">🐄</span>
              <div className="about-card-name">Cow Milk</div>
              <div className="about-card-sub">Dense Calcium & Daily Strength</div>
            </div>

            <div className="about-card">
              <span className="about-card-emoji">🫏</span>
              <div className="about-card-name">Donkey Milk</div>
              <div className="about-card-sub">Cosmetic Glow & Immunity</div>
            </div>

            <div className="about-card">
              <span className="about-card-emoji">🐕</span>
              <div className="about-card-name">Dog Milk</div>
              <div className="about-card-sub">Puppy Lipids & Vital Protein</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
