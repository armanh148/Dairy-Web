import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function CheckoutModal({
  isOpen,
  onClose,
  initialMilkName,
  initialPrice,
  onConfirmOrder
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedMilk, setSelectedMilk] = useState(PRODUCTS[1].name); // default Camel Milk
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (initialMilkName) {
      setSelectedMilk(initialMilkName);
    }
  }, [initialMilkName, isOpen]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.name === selectedMilk) || PRODUCTS[0];
  const rate = currentProduct.price;
  const totalBill = rate * quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) return;

    onConfirmOrder({
      customerName: name,
      phone,
      address,
      milkName: currentProduct.name,
      emoji: currentProduct.emoji,
      rate,
      quantity,
      totalBill
    });

    // Reset form
    setName('');
    setPhone('');
    setAddress('');
    setQuantity(1);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-backdrop" onClick={onClose} />

      <div className="checkout-sheet">
        <div className="checkout-head">
          <div>
            <h3>Place Your Order</h3>
            <p>Fresh organic milk delivered directly to your doorstep in chilled containers.</p>
          </div>
          <button className="checkout-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              required
              placeholder="e.g. Ahmed Khan"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">WhatsApp / Phone Number</label>
            <input
              type="tel"
              className="form-input"
              required
              placeholder="e.g. 0300 1234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Delivery Address</label>
            <textarea
              className="form-input"
              required
              rows={2}
              style={{ resize: 'none' }}
              placeholder="House #, Street, Area, City"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Milk Variety</label>
              <select
                className="form-select"
                value={selectedMilk}
                onChange={(e) => setSelectedMilk(e.target.value)}
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} (Rs. {p.price}/L)
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Quantity (Liters)</label>
              <input
                type="number"
                min="1"
                max="100"
                className="form-input"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>
          </div>

          <div className="bill-box">
            <div className="bill-row">
              <span>Price per Liter</span>
              <span>Rs. {rate}</span>
            </div>
            <div className="bill-row">
              <span>Quantity</span>
              <span>{quantity} Liter{quantity > 1 ? 's' : ''}</span>
            </div>
            <div className="bill-divider" />
            <div className="bill-total">
              <span>Total Payable</span>
              <span>Rs. {totalBill}</span>
            </div>
          </div>

          <button type="submit" className="form-submit-btn">
            Confirm Order Now (Cash on Delivery)
          </button>
        </form>
      </div>
    </div>
  );
}
