import React from 'react';

export default function GreenTapeMarquee() {
  const items = [
    'PASTURE PURE',
    'COLD-CHURNED',
    'ZERO SYNTHETIC HORMONES',
    'A2 BETA-CASEIN',
    '100% GRASS-FED HERDS',
    'SOLAR POWERED COLD-CHAIN',
    'FARM BOTTLED WITHIN 4 HOURS'
  ];

  return (
    <div className="green-tape-banner" aria-hidden="true">
      <div className="green-tape-track">
        {items.concat(items).concat(items).map((text, i) => (
          <div key={i} className="marquee-tape-item">
            <span className="marquee-diamond">✦</span>
            <span className="marquee-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
