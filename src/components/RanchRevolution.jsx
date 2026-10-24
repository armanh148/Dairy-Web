import React from 'react';
import { ChevronLeft, ChevronRight, Leaf, Shield, Sun, ArrowRight } from 'lucide-react';

export default function RanchRevolution({ onOpenCheckout }) {
  return (
    <section id="farm" className="section-ranch">
      <div className="ranch-grid">
        {/* Left Photo of Highland Cow with Premium Vignette */}
        <div className="ranch-portrait-card">
          <img
            src="/images/ranch_cow.jpg"
            alt="Majestic highland cow grazing under warm sunrise in pasture"
            className="ranch-portrait-img"
          />
          <div className="ranch-card-overlay-badge">
            <span className="badge-pulse-dot" />
            <span>CERTIFIED 100% ETHICAL CARE</span>
          </div>
        </div>

        {/* Right Content & Editorial Highlights */}
        <div className="ranch-content-wrap">
          <div className="section-sub-badge">
            <Sun size={12} color="#C48831" />
            <span>REGENERATIVE AGRICULTURE</span>
          </div>

          <h2 className="ranch-title">
            Experience The <br />
            <span className="ranch-title-serif">Ranch Life</span> Revolution
          </h2>

          <p className="ranch-desc">
            We practice rotational meadow grazing that restores soil biome health and preserves natural clover ecosystems. Our herds roam freely across 300+ sunny acres, drinking natural spring water and breathing clean country air.
          </p>

          {/* Pillars List */}
          <div className="ranch-pillars-grid">
            <div className="ranch-pillar-item">
              <div className="pillar-icon-box">
                <Leaf size={16} color="var(--forest-green)" />
              </div>
              <div>
                <div className="pillar-title">100% Grass-Fed</div>
                <div className="pillar-sub">Never fed GMOs, corn, or commercial soy feed.</div>
              </div>
            </div>

            <div className="ranch-pillar-item">
              <div className="pillar-icon-box">
                <Shield size={16} color="var(--forest-green)" />
              </div>
              <div>
                <div className="pillar-title">Antibiotic & Hormone Free</div>
                <div className="pillar-sub">Nurtured with gentle holistic veterinary care.</div>
              </div>
            </div>
          </div>

          {/* Pasture Highlights Gallery Header */}
          <div className="ranch-slider-header">
            <span className="ranch-pastures-tag">
              PASTURE GLIMPSES &bull; LIVE HERD
            </span>

            <div className="ranch-arrow-btns">
              <button className="btn-arrow-circle-nav" aria-label="Previous pasture view">
                <ChevronLeft size={15} />
              </button>
              <button className="btn-arrow-circle-nav" aria-label="Next pasture view">
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          <div className="ranch-thumbs-row">
            <div className="ranch-thumb-card">
              <img
                src="/images/calf_pasture.jpg"
                alt="Baby calf resting safely in clover pasture"
                className="ranch-thumb-img"
              />
              <div className="ranch-thumb-info">
                <span className="ranch-thumb-label">Nurtured Young Calves</span>
                <span className="thumb-arrow-icon"><ArrowRight size={12} /></span>
              </div>
            </div>

            <div className="ranch-thumb-card">
              <img
                src="/images/hero_cow.jpg"
                alt="Herd grazing quietly in afternoon meadow"
                className="ranch-thumb-img"
              />
              <div className="ranch-thumb-info">
                <span className="ranch-thumb-label">Open Meadow Grazing</span>
                <span className="thumb-arrow-icon"><ArrowRight size={12} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
