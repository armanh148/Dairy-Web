import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SuccessModal({ isOpen, onClose, orderDetails }) {
  useEffect(() => {
    if (isOpen) {
      // Fire confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c9a96e', '#dfc08a', '#ffffff', '#22c55e']
      });
    }
  }, [isOpen]);

  if (!isOpen || !orderDetails) return null;

  return (
    <div className="success-overlay open">
      <div className="modal-backdrop" onClick={onClose} />

      <div className="success-card">
        <div className="success-icon-wrap">
          <Check size={36} strokeWidth={2.5} />
        </div>

        <h3>Order Confirmed!</h3>

        <p>
          Thank you, <strong>{orderDetails.customerName}</strong>! Your order for{' '}
          <strong>
            {orderDetails.quantity}L of {orderDetails.milkName}
          </strong>{' '}
          (Total: <strong>Rs. {orderDetails.totalBill}</strong>) has been registered.
        </p>

        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1.5rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            textAlign: 'left'
          }}
        >
          <div style={{ marginBottom: '0.4rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Delivering to: </span>
            {orderDetails.address}
          </div>
          <div style={{ marginBottom: '0.4rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Contact: </span>
            {orderDetails.phone}
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>Payment: </span>
            Cash on Delivery (Estimated 24h chilled dispatch)
          </div>
        </div>

        <button className="btn-primary" style={{ width: '100%' }} onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}
