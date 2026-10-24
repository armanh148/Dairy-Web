import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SavorSection({ onAddToCart, onOpenCheckout }) {
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="products" className="section-savor">
      <h2 className="savor-title">SAVOR THE NATURAL GOODNESS</h2>

      {/* 5 Products in One Row */}
      <div className="savor-grid-5">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="bottle-card"
            style={{ backgroundColor: p.cardBg }}
          >
            <div className="bottle-card-top">
              <div className="bottle-card-name">{p.name.toUpperCase()}</div>
              <div className="bottle-card-badge">{p.badge}</div>
            </div>

            <div className="bottle-img-wrap">
              <img
                src={p.image}
                alt={p.name}
                className="bottle-img"
              />
            </div>

            <div className="bottle-card-bottom">
              <button
                className="btn-add-cart-card"
                onClick={() => handleAdd(p)}
                title="Add 1 Liter to cart"
              >
                <ShoppingBag size={14} />
                <span>{addedId === p.id ? 'ADDED!' : 'ADD TO CART'}</span>
              </button>

              <button
                className="btn-quick-order-card"
                onClick={() => onOpenCheckout(p.name, p.price)}
                title="Instant order"
              >
                ORDER
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
