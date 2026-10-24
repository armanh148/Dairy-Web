import React from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function RanchRevolution({ onOpenCheckout }) {
  return (
    <section id="farm" className="section-ranch">
      <div className="ranch-grid">
        {/* Left Photo of Fluffy Highland Cow with Sun Halo */}
        <div className="ranch-portrait-card">
          <img
            src="/images/ranch_cow.jpg"
            alt="Majestic highland cow with golden sun halo"
            className="ranch-portrait-img"
          />
          <div className="ranch-doodle-horns">
            ✨
          </div>
        </div>

        {/* Right Content & Thumbnails */}
        <div className="ranch-content-wrap">
          <h2 className="ranch-title">
            EXPERIENCE THE <br />
            RANCH <span className="badge-inline-pill">🌸 LIFE</span> <br />
            REVOLUTION
          </h2>

          <p className="ranch-desc">
            Experience the ranch life revolution with pure, sustainable, nutrient-dense milk cold-crafted for active healthy living. 
            Free-grazing ethical herds living naturally under open skies.
          </p>

          <div className="ranch-slider-header">
            <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
              MEET OUR PASTURES
            </span>

            <div className="ranch-arrow-btns">
              <button className="btn-arrow-circle-nav" aria-label="Previous">
                <ChevronLeft size={16} />
              </button>
              <button className="btn-arrow-circle-nav" aria-label="Next">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="ranch-thumbs-row">
            <div className="ranch-thumb-card">
              <img
                src="/images/calf_pasture.jpg"
                alt="Baby calf resting in green grass"
                className="ranch-thumb-img"
              />
              <div className="ranch-thumb-info">
                <span className="ranch-thumb-label">PURE NURTURED PASTURE</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--coral-orange)', fontWeight: '800' }}>→</span>
              </div>
            </div>

            <div className="ranch-thumb-card">
              <img
                src="/images/hero_cow.jpg"
                alt="Herd grazing in afternoon meadow"
                className="ranch-thumb-img"
              />
              <div className="ranch-thumb-info">
                <span className="ranch-thumb-label">PURE PASSION FOR DAIRY</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--coral-orange)', fontWeight: '800' }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
