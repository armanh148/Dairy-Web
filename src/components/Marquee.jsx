import React from 'react';

export default function Marquee() {
  const items = [
    'CAMEL MILK',
    'COW MILK',
    'DONKEY MILK',
    'DOG MILK',
    'FARM FRESH',
    'COLD-CHAIN 24H'
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).map((item, index) => (
          <React.Fragment key={index}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-sep">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
