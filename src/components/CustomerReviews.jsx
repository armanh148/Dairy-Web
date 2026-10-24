import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/products';

export default function CustomerReviews() {
  const reviewItems = REVIEWS.filter((r) => r.type === 'review');
  const imageItems = REVIEWS.filter((r) => r.type === 'image');

  return (
    <section id="reviews" className="section-reviews">
      <div className="reviews-header">
        <div>
          <div className="section-sub-badge">
            <Star size={12} fill="#C48831" color="#C48831" />
            <span>VERIFIED REVIEWS</span>
          </div>
          <h2 className="reviews-title">
            Loved By <span className="reviews-title-serif">Discerning Families</span>
          </h2>
        </div>

        <div className="ranch-arrow-btns">
          <button className="btn-arrow-circle-nav" aria-label="Previous review">
            <ChevronLeft size={15} />
          </button>
          <button className="btn-arrow-circle-nav" aria-label="Next review">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <div className="reviews-grid">
        {/* Card 1: Review 1 */}
        <div className="review-card-luxury">
          <div className="review-card-top-row">
            <div className="review-author-wrap">
              <img
                src={reviewItems[0]?.avatar}
                alt={reviewItems[0]?.name}
                className="review-avatar-luxury"
              />
              <div>
                <div className="review-author-name">{reviewItems[0]?.name}</div>
                <div className="review-author-role">
                  <CheckCircle2 size={12} color="#166534" />
                  <span>{reviewItems[0]?.badge || 'Verified Buyer'}</span>
                </div>
              </div>
            </div>
            <Quote size={20} className="review-quote-icon" />
          </div>

          <div className="review-stars-row">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="#C88D34" color="#C88D34" />
            ))}
          </div>

          <p className="review-body-text">
            &ldquo;{reviewItems[0]?.text}&rdquo;
          </p>
        </div>

        {/* Card 2: Editorial Photo */}
        <div className="review-card-photo-luxury">
          <img
            src={imageItems[0]?.image}
            alt={imageItems[0]?.title}
            className="review-photo-img"
          />
          <div className="review-photo-caption">
            <span>{imageItems[0]?.title}</span>
          </div>
        </div>

        {/* Card 3: Review 2 */}
        <div className="review-card-luxury">
          <div className="review-card-top-row">
            <div className="review-author-wrap">
              <img
                src={reviewItems[1]?.avatar}
                alt={reviewItems[1]?.name}
                className="review-avatar-luxury"
              />
              <div>
                <div className="review-author-name">{reviewItems[1]?.name}</div>
                <div className="review-author-role">
                  <CheckCircle2 size={12} color="#166534" />
                  <span>{reviewItems[1]?.badge || 'Executive Chef'}</span>
                </div>
              </div>
            </div>
            <Quote size={20} className="review-quote-icon" />
          </div>

          <div className="review-stars-row">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="#C88D34" color="#C88D34" />
            ))}
          </div>

          <p className="review-body-text">
            &ldquo;{reviewItems[1]?.text}&rdquo;
          </p>
        </div>

        {/* Card 4: Editorial Photo */}
        <div className="review-card-photo-luxury">
          <img
            src={imageItems[1]?.image}
            alt={imageItems[1]?.title}
            className="review-photo-img"
          />
          <div className="review-photo-caption">
            <span>{imageItems[1]?.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
