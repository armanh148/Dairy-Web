import React from 'react';

export default function Stats() {
  const stats = [
    { value: '4', suffix: ' Breeds', label: 'Exotic Milk Varieties' },
    { value: '100%', suffix: '', label: 'Pure Organic & Tested' },
    { value: '15,000+', suffix: '', label: 'Liters Delivered' },
    { value: '24h', suffix: '', label: 'Chilled Express Delivery' }
  ];

  return (
    <section className="stats">
      <div className="stats-inner">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">
                {stat.value}
                {stat.suffix && <span style={{ fontSize: '1rem', color: 'var(--text-dim)', marginLeft: '4px' }}>{stat.suffix}</span>}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
