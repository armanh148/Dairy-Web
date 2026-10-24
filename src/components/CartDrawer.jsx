import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

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
          <h3>Your Milk Cart</h3>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={42} strokeWidth={1.5} color="var(--text-dim)" />
              <p>Your milk cart is currently empty.</p>
              <button
                className="btn-ghost"
                onClick={onClose}
                style={{ fontSize: '0.8rem', padding: '0.6rem 1.4rem' }}
              >
                Browse Our Milks
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <span className="cart-item-emoji">{item.emoji}</span>

                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">Rs. {item.price} / Liter</div>

                  <div className="cart-item-qty">
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      title="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span>{item.qty} L</span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      title="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{ marginLeft: 'auto', border: 'none', color: 'rgba(239, 68, 68, 0.7)' }}
                      title="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
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
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
