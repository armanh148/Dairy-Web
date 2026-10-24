import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onProceedToCheckout
}) {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`cart-panel ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div>
            <h3>Your Selected Milk</h3>
            <span className="cart-header-sub">Cold-Chain Delivery &bull; Eco Glass Bottles</span>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon-wrap">
                <ShoppingBag size={32} strokeWidth={1.5} color="var(--forest-green)" />
              </div>
              <h4>Your Cart Is Empty</h4>
              <p>Explore our cold-crafted artisanal milk bottles and add your daily essentials.</p>
              <button
                className="btn-ghost"
                onClick={onClose}
              >
                Explore Collection
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-media">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="cart-item-img-thumb" />
                  ) : (
                    <div className="cart-item-placeholder-badge">{item.name.charAt(0)}</div>
                  )}
                </div>

                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">Rs. {item.price} <span className="cart-vol">/ 1000ml</span></div>

                  <div className="cart-item-qty">
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      title="Decrease quantity"
                      className="qty-btn"
                    >
                      <Minus size={11} />
                    </button>
                    <span className="qty-val">{item.qty} L</span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      title="Increase quantity"
                      className="qty-btn"
                    >
                      <Plus size={11} />
                    </button>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="cart-remove-btn"
                      title="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-guarantee-note">
              <span>❄ Chilled delivery within 4 hours &bull; 100% Satisfaction Guarantee</span>
            </div>
            <div className="cart-total-row">
              <span className="cart-total-label">Subtotal</span>
              <span className="cart-total-value">Rs. {totalPrice}</span>
            </div>

            <button
              className="cart-checkout-btn"
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
