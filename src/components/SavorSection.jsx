import React, { useState } from 'react';
import { ShoppingBag, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SavorSection({ onAddToCart, onOpenCheckout }) {
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <section id="products" className="section-savor">
      {/* Editorial Section Header */}
      <div className="savor-header-center">
        <div className="section-sub-badge">
          <Sparkles size={12} color="#C48831" />
          <span>COLD-CRAFTED ARTISANAL BOTTLES</span>
        </div>
        <h2 className="savor-title">
          Savor The <span className="savor-title-serif">Natural Goodness</span>
        </h2>
        <p className="savor-sub-desc">
          Single-source ethical dairy bottled within 4 hours of milking. Free from antibiotics, synthetic hormones, and industrial heat treatment.
        </p>
      </div>

      {/* 5 Products in Row / Responsive Shelf Grid */}
      <div className="savor-grid-5">
        {PRODUCTS.map((p) => {
          const isAdded = addedId === p.id;
          return (
            <div
              key={p.id}
              className="bottle-card-luxury"
              style={{ '--product-accent': p.accentColor }}
            >
              {/* Card Top Pill Tag */}
              <div className="bottle-card-header">
                <span className="bottle-category-tag">{p.tag}</span>
                <span className="bottle-price-pill">{p.badge}</span>
              </div>

              {/* Bottle Showcase Image */}
              <div className="bottle-img-stage">
                <img
                  src={p.image}
                  alt={p.name}
                  className="bottle-img-luxury"
                  loading="lazy"
                />
                <div className="bottle-reflection-base" />
              </div>

              {/* Product Info */}
              <div className="bottle-card-body">
                <h3 className="bottle-luxury-name">{p.name}</h3>
                <p className="bottle-luxury-sub">{p.subtitle}</p>
                <div className="bottle-nutrition-badge">{p.nutrition}</div>
              </div>

              {/* Action Buttons */}
              <div className="bottle-luxury-actions">
                <button
                  className={`btn-luxury-cart ${isAdded ? 'btn-luxury-added' : ''}`}
                  onClick={() => handleAdd(p)}
                  aria-label={`Add ${p.name} to cart`}
                >
                  {isAdded ? (
                    <>
                      <Check size={14} />
                      <span>ADDED</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={14} />
                      <span>ADD TO BAG</span>
                    </>
                  )}
                </button>

                <button
                  className="btn-luxury-order"
                  onClick={() => onOpenCheckout(p.name, p.price)}
                  title={`Order ${p.name} instantly`}
                >
                  <span>ORDER</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
