import React from 'react';

export default function GreenTapeMarquee() {
  const items = [
    'PASTURE PURE',
    'FRESHLY GATHERED',
    'GENTLY CRAFTED',
    'MEADOW RICH',
    '100% ORGANIC',
    'SUSTAINABLE DAIRY'
  ];

  return (
    <div className="green-tape-banner" aria-hidden="true">
      <div className="green-tape-track">
        {items.concat(items).concat(items).map((text, i) => (
          <React.Fragment key={i}>
            <span>🐮 {text}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
