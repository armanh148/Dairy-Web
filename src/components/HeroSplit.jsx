import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, Droplets } from 'lucide-react';

export default function HeroSplit({ onOpenCheckout, onOpenAi }) {
  return (
    <section className="hero-split-grid">
      {/* Left Luxury Card */}
      <div className="hero-card-left">
        <div className="hero-left-content">
          <div className="hero-badge-tag">
            <span className="badge-pulse-dot" />
            <span>PASTURE RAISED &bull; 100% ORGANIC CERTIFIED</span>
          </div>

          <h1 className="hero-left-title">
            Cows That Care <br />
            <span className="hero-title-italic">For The Future.</span>
          </h1>

          <p className="hero-lead-desc">
            Single-source, cold-crafted organic milk from ethical grazing herds. 
            Bottled fresh within 4 hours to preserve bio-active enzymes, clean vitamins, and velvety natural cream.
          </p>

          <div className="hero-cta-group">
            <button
              className="hero-cta-btn hero-cta-btn-primary"
              onClick={() => onOpenCheckout()}
            >
              <span>EXPLORE COLLECTION</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={14} />
              </div>
            </button>

            <button
              className="hero-cta-btn hero-cta-btn-secondary"
              onClick={onOpenAi}
            >
              <Sparkles size={15} />
              <span>AI NUTRITION ADVISOR</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-row">
            <div className="hero-trust-item">
              <ShieldCheck size={16} className="trust-icon" />
              <span>A2 Beta-Casein</span>
            </div>
            <div className="hero-trust-separator" />
            <div className="hero-trust-item">
              <Droplets size={16} className="trust-icon" />
              <span>Zero Hormones</span>
            </div>
            <div className="hero-trust-separator" />
            <div className="hero-trust-item">
              <Award size={16} className="trust-icon" />
              <span>Certified Cold-Chain</span>
            </div>
          </div>
        </div>

        <div className="hero-left-footer">
          <p>
            Rooted in regenerative pastoralism &mdash; nurturing healthy soils, happier free-roaming cattle, and nutrient-dense dairy for your home.
          </p>
        </div>
      </div>

      {/* Right Photo Card with Floating Glassmorphic Badges */}
      <div className="hero-card-right">
        <img
          src="/images/hero_cow.jpg"
          alt="Dairy cow grazing peacefully in open sunny green pasture"
          className="hero-cow-img"
        />

        {/* Floating Glassmorphic Card Top Right */}
        <div className="hero-float-badge hero-float-top">
          <div className="float-badge-icon">
            <Award size={16} color="#C48831" />
          </div>
          <div>
            <div className="float-badge-title">4.9 / 5.0 Rating</div>
            <div className="float-badge-sub">12,000+ Happy Families</div>
          </div>
        </div>

        {/* Floating Glassmorphic Card Bottom Left */}
        <div className="hero-float-badge hero-float-bottom">
          <div className="float-badge-pulse" />
          <div>
            <div className="float-badge-title">Fresh Morning Milking</div>
            <div className="float-badge-sub">Delivered Under 4°C Today</div>
          </div>
        </div>
      </div>
    </section>
  );
}
