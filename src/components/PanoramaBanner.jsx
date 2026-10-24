import React from 'react';

export default function PanoramaBanner() {
  return (
    <section className="section-panorama">
      <img
        src="/images/pastoral_panorama.jpg"
        alt="Expansive panoramic meadow with dairy cows grazing under open skies"
        className="panorama-img"
      />

      <div className="panorama-overlay-top">
        <div className="panorama-caption">
          <div style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>🐮</div>
          <p>
            Rooted in tradition, we craft pure, nourishing milk with care, bringing wholesome goodness from ethical pastures directly to your table.
          </p>
        </div>

        <h2 className="panorama-title">
          CRAFTED BY NATURE, <br />
          CHERISHED BY YOU
        </h2>
      </div>
    </section>
  );
}
