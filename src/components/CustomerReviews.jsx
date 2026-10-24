import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Star } from 'lucide-react';
import { REVIEWS } from '../data/products';

export default function CustomerReviews() {
  return (
    <section className="section-reviews">
      <div className="reviews-header">
        <h2 className="reviews-title">OUR CUSTOMERS LOVE US</h2>

        <div className="ranch-arrow-btns">
          <button className="btn-arrow-circle-nav" aria-label="Previous review">
            <ChevronLeft size={16} />
          </button>
          <button className="btn-arrow-circle-nav" aria-label="Next review">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="reviews-grid">
        {/* Card 1: Coral Orange Review */}
        <div className="review-card-base review-card-coral">
          <div className="review-author-wrap">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80"
              alt="Cathy Carter"
              className="review-avatar"
            />
            <div>
              <div className="review-author-name">CATHY CARTER</div>
              <div className="review-author-role">Verified Buyer ✓</div>
            </div>
          </div>

          <div className="review-stars">
            {'★'.repeat(5)}
          </div>

          <p className="review-body-text">
            “Unmatched freshness and smooth texture. You can genuinely taste the pasture quality and care in every single bottle!”
          </p>
        </div>

        {/* Card 2: Photo */}
        <div className="review-card-photo">
          <img
            src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80"
            alt="Farm fresh dairy cuts"
          />
        </div>

        {/* Card 3: Forest Green Review */}
        <div className="review-card-base review-card-green">
          <div className="review-author-wrap">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
              alt="Daniel Rodriguez"
              className="review-avatar"
            />
            <div>
              <div className="review-author-name">DANIEL RODRIGUEZ</div>
              <div className="review-author-role">Pasture Dairy Club ✓</div>
            </div>
          </div>

          <div className="review-stars">
            {'★'.repeat(5)}
          </div>

          <p className="review-body-text">
            “Wonderfully fresh and smooth, with a clean taste that feels genuinely premium. Best whole milk we have ever had.”
          </p>
        </div>

        {/* Card 4: Photo */}
        <div className="review-card-photo">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
            alt="Customer enjoying outdoor sunshine"
          />
        </div>
      </div>
    </section>
  );
}
