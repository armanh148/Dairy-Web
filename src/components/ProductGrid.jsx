import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import Showcase from './Showcase';

export default function ProductGrid({ onAddToCart, onOpenCheckout }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = filter === 'all' || p.category === filter;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  const handleAddToCartClick = (product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="products" className="section">
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-label">Our Milk Collection</div>
          <h2 className="section-title">
            Premium <span className="accent">Exotic</span> Milks
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Directly collected from certified ethical farms across Pakistan. 
            Rich in bio-active nutrients, vitamins, and therapeutic enzymes.
          </p>
        </div>

        {/* Featured Showcase component */}
        <Showcase onOpenCheckout={onOpenCheckout} />

        {/* Search & Category Filter Toolbar */}
        <div className="products-toolbar">
          <div className="search-bar-wrap">
            <Search size={18} className="search-bar-icon" />
            <input
              type="text"
              placeholder="Search by health benefit (e.g. diabetes, calcium, skin)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar-input"
            />
          </div>

          <div className="filter-tabs">
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Milks
            </button>
            <button
              className={`filter-tab ${filter === 'camel' ? 'active' : ''}`}
              onClick={() => setFilter('camel')}
            >
              🐪 Camel Milk
            </button>
            <button
              className={`filter-tab ${filter === 'cow' ? 'active' : ''}`}
              onClick={() => setFilter('cow')}
            >
              🐄 Cow Milk
            </button>
            <button
              className={`filter-tab ${filter === 'donkey' ? 'active' : ''}`}
              onClick={() => setFilter('donkey')}
            >
              🫏 Donkey Milk
            </button>
            <button
              className={`filter-tab ${filter === 'dog' ? 'active' : ''}`}
              onClick={() => setFilter('dog')}
            >
              🐕 Dog Milk
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className={`product-card ${p.popular ? 'popular' : ''}`}
            >
              <div className="product-card-img">
                <span>{p.emoji}</span>
                <div className="product-card-badge">{p.badge}</div>
              </div>

              <div className="product-card-body">
                <div className="product-card-name">{p.name}</div>
                <div className="product-card-price">
                  Rs. {p.price} <span className="unit">/ Liter</span>
                </div>
                <p className="product-card-desc">{p.shortDesc}</p>

                <div className="product-card-tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className={`tag-badge ${t.color}`}>
                      {t.text}
                    </span>
                  ))}
                </div>

                <div className="product-card-btns">
                  <button
                    className="btn-card-cart"
                    onClick={() => handleAddToCartClick(p)}
                  >
                    <ShoppingBag size={14} />
                    <span>{addedId === p.id ? 'Added! ✓' : '+ Cart'}</span>
                  </button>

                  <button
                    className="btn-card-order"
                    onClick={() => onOpenCheckout(p.name, p.price)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
