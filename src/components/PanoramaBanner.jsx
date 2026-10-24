import React from 'react';
import { Leaf } from 'lucide-react';

export default function PanoramaBanner() {
  return (
    <section className="section-panorama">
      <img
        src="/images/pastoral_panorama.jpg"
        alt="Expansive panoramic meadow with dairy cows grazing peacefully under sunny open skies"
        className="panorama-img"
      />

      <div className="panorama-overlay-top">
        <div className="panorama-caption">
          <div className="panorama-mini-badge">
            <Leaf size={13} color="#C48831" />
            <span>OUR PASTURE PLEDGE</span>
          </div>
          <p>
            Rooted in heritage, we craft pure, nourishing dairy with unwavering patience &mdash; delivering living nutrition from regenerative meadows directly to your home.
          </p>
        </div>

        <h2 className="panorama-title">
          Crafted By Nature, <br />
          <span className="panorama-title-serif">Cherished By You.</span>
        </h2>
      </div>
    </section>
  );
}
