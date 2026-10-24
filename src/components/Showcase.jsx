import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { SHOWCASE_DATA } from '../data/products';

export default function Showcase({ onOpenCheckout }) {
  const [activeKey, setActiveKey] = useState('camel');
  const current = SHOWCASE_DATA[activeKey];

  return (
    <div className="showcase">
      <div className="showcase-media">
        <div className="showcase-badge">
          <Star size={12} fill="currentColor" />
          <span>{current.badge}</span>
        </div>

        <div className="showcase-emoji" key={current.emoji}>
          {current.emoji}
        </div>

        <div className="showcase-tabs">
          {Object.values(SHOWCASE_DATA).map((item) => (
            <button
              key={item.key}
              className={`showcase-tab ${activeKey === item.key ? 'active' : ''}`}
              onClick={() => setActiveKey(item.key)}
            >
              {item.emoji} {item.name.replace(' Milk', '')}
            </button>
          ))}
        </div>
      </div>

      <div className="showcase-info">
        <div className="showcase-info-label">Priority Health Spotlight</div>
        <h3 className="showcase-info-name">{current.name}</h3>

        <div className="showcase-info-price">
          Rs. {current.price}
          <span className="unit">/ Liter</span>
        </div>

        <p className="showcase-info-desc">{current.desc}</p>

        <div className="showcase-tags">
          {current.tags.map((tag, idx) => (
            <span key={idx} className={`tag-badge ${tag.color}`}>
              {tag.text}
            </span>
          ))}
        </div>

        <div>
          <button
            className="btn-primary"
            onClick={() => onOpenCheckout(current.name, current.price)}
          >
            <span>Order {current.name}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
