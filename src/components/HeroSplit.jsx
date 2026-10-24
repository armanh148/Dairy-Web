import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSplit({ onOpenCheckout, onOpenAi }) {
  return (
    <section className="hero-split-grid">
      {/* Left Forest Green Card */}
      <div className="hero-card-left">
        <div className="hero-left-content">
          <div className="hero-badge-tag">
            <span>PASTURE RAISED • 100% ORGANIC</span>
          </div>

          <h1 className="hero-left-title">
            COWS THAT CARE <br />
            FOR THE FUTURE
          </h1>

          <div className="hero-cta-group">
            <button
              className="hero-cta-btn"
              onClick={() => onOpenCheckout()}
            >
              <span>EXPLORE MILK</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={14} />
              </div>
            </button>

            <button
              className="hero-cta-btn hero-cta-btn-secondary"
              onClick={onOpenAi}
            >
              <Sparkles size={16} />
              <span>AI ADVISOR</span>
            </button>
          </div>
        </div>

        <div className="hero-left-footer">
          <p>
            Cows that care for the future represent a shift towards more sustainable, ethical, and organic pasture-raised farming practices.
          </p>
        </div>

        <div className="grass-deco-wave" aria-hidden="true" />
      </div>

      {/* Right Photo Card */}
      <div className="hero-card-right">
        <img
          src="/images/hero_cow.jpg"
          alt="Cow grazing in sunny green pasture"
          className="hero-cow-img"
        />

        <div className="cow-doodle-eyes">
          ✨🐮
        </div>
      </div>
    </section>
  );
}
