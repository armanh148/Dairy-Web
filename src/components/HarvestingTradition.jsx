import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HarvestingTradition({ onOpenCheckout }) {
  return (
    <section id="tradition" className="section-harvesting">
      <div className="harvesting-grid">
        {/* Left Column */}
        <div className="harvest-col-left">
          <div className="section-sub-badge">
            <Sparkles size={12} color="#C48831" />
            <span>HERITAGE CRAFTSMANSHIP</span>
          </div>

          <h2 className="harvest-title-left">
            Harvesting <br />
            <span className="harvest-title-serif">Tradition.</span>
          </h2>

          <p className="harvest-desc-left">
            Rooted in multi-generational pastoral knowledge, we craft pure, nourishing dairy with time-honored patience. Every bottle preserves the natural cream line and rich fat profile that modern industrial processing removes.
          </p>

          <div className="harvest-purity-points">
            <div className="purity-point">
              <CheckCircle2 size={16} color="var(--forest-green)" />
              <span>Low-temperature vat pasteurized to protect natural enzymes</span>
            </div>
            <div className="purity-point">
              <CheckCircle2 size={16} color="var(--forest-green)" />
              <span>Reusable amber-tinted glass bottles to prevent UV oxidation</span>
            </div>
          </div>
        </div>

        {/* Center: Three Realistic Bottles */}
        <div className="harvest-center-bottles">
          <div className="bottles-glow-backdrop" />
          <img
            src="/images/three_bottles.jpg"
            alt="Three artisanal milk bottles: Chocolate Cocoa, Strawberry Bliss, Golden Honey"
            className="harvest-bottles-img"
          />
          <div className="bottles-pedestal-badge">
            <span>TRIPLE COLD-PRESSED HARVEST</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="harvest-col-right">
          <div className="avatar-cluster-wrap">
            <div className="avatar-cluster">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Master herdsman"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Pasture dairy farmer"
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                alt="Quality inspector"
              />
            </div>
            <span className="avatar-caption">Crafted alongside 20+ ethical family-owned farms</span>
          </div>

          <h2 className="harvest-title-right">
            Cultivating <br />
            <span className="harvest-title-serif">Quality.</span>
          </h2>

          <p className="harvest-desc-right">
            We pay our farm partners 35% above fair-market value to guarantee the highest animal welfare, regenerative land standards, and uncompromised milk purity.
          </p>

          <button
            className="hero-cta-btn harvest-order-btn"
            onClick={() => onOpenCheckout()}
          >
            <span>RESERVE YOUR BOTTLES</span>
            <div className="btn-arrow-circle">
              <ArrowRight size={13} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
