import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenCheckout, onOpenAi }) {
  return (
    <section id="home" className="hero">
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/07/30/45603-445839547_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" />
        <div className="hero-overlay-side" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Pakistan's Finest Exotic Milks
          </div>

          <h1 className="hero-title">
            Smart Exotic <br />
            <span className="accent">Milk Choices</span> <br />
            For Daily Health
          </h1>

          <p className="hero-desc">
            Discover nature's most powerful remedies — from Camel to Donkey. 
            Personalized organic nutrition curated for your unique wellness goals. 
            Pure, unpasteurized cold-chain delivery straight to your doorstep.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => onOpenCheckout()}
            >
              <span>Start Your Order</span>
              <ArrowRight size={17} />
            </button>

            <button
              className="btn-ghost"
              onClick={onOpenAi}
            >
              <Sparkles size={16} color="var(--gold)" />
              <span>Ask AI Advisor</span>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-rings">
            <div className="hero-ring" />
            <div className="hero-ring" />
          </div>

          <div className="float-card">
            <span className="float-card-icon">🦴</span>
            <div className="float-card-text">
              <span className="float-card-title">Calcium Rich</span>
              <span className="float-card-sub">Strengthens bones</span>
            </div>
          </div>

          <div className="float-card">
            <span className="float-card-icon">💪</span>
            <div className="float-card-text">
              <span className="float-card-title">High Protein</span>
              <span className="float-card-sub">Muscle recovery</span>
            </div>
          </div>

          <div className="float-card">
            <span className="float-card-icon">🌿</span>
            <div className="float-card-text">
              <span className="float-card-title">Organic Care</span>
              <span className="float-card-sub">100% natural & fresh</span>
            </div>
          </div>

          <div className="float-card">
            <span className="float-card-icon">✨</span>
            <div className="float-card-text">
              <span className="float-card-title">Vitamin Boost</span>
              <span className="float-card-sub">Natural daily immunity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
