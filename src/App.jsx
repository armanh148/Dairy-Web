import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSplit from './components/HeroSplit';
import SavorSection from './components/SavorSection';
import GreenTapeMarquee from './components/GreenTapeMarquee';
import RanchRevolution from './components/RanchRevolution';
import HarvestingTradition from './components/HarvestingTradition';
import CustomerReviews from './components/CustomerReviews';
import PanoramaBanner from './components/PanoramaBanner';
import EarthFooter from './components/EarthFooter';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import AiAssistantModal from './components/AiAssistantModal';
import SuccessModal from './components/SuccessModal';

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cowen_bondu_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutPrefill, setCheckoutPrefill] = useState({ name: 'Golden Honey', price: 180 });
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('cowen_bondu_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          emoji: product.emoji,
          image: product.image,
          qty: 1
        }
      ];
    });
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOpenCheckout = (milkName, price) => {
    setCheckoutPrefill({
      name: milkName || (cart.length > 0 ? cart[0].name : 'Golden Honey'),
      price: price || (cart.length > 0 ? cart[0].price : 180)
    });
    setIsCheckoutOpen(true);
  };

  const handleConfirmOrder = (orderData) => {
    setLastOrder(orderData);
    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
    setCart([]);
  };

  return (
    <div className="site-wrapper">
      {/* Standalone Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCheckout={handleOpenCheckout}
        onOpenAi={() => setIsAiOpen(true)}
      />

      {/* 1. Full-width Hero Container */}
      <div className="content-container">
        <HeroSplit
          onOpenCheckout={handleOpenCheckout}
          onOpenAi={() => setIsAiOpen(true)}
        />
      </div>

      {/* 2. Savor The Natural Goodness */}
      <div className="content-container">
        <SavorSection
          onAddToCart={handleAddToCart}
          onOpenCheckout={handleOpenCheckout}
        />
      </div>

      {/* 3. Edge-to-Edge Green Marquee Tape */}
      <GreenTapeMarquee />

      {/* 4. Experience The Ranch Life Revolution */}
      <div className="content-container">
        <RanchRevolution
          onOpenCheckout={handleOpenCheckout}
        />
      </div>

      {/* 5. Harvesting Tradition Banner */}
      <div className="content-container">
        <HarvestingTradition
          onOpenCheckout={handleOpenCheckout}
        />
      </div>

      {/* 6. Our Customers Love Us */}
      <div className="content-container">
        <CustomerReviews />
      </div>

      {/* 7. Edge-to-Edge Crafted By Nature Panorama */}
      <PanoramaBanner />

      {/* 8. Full-Width Earth Footer */}
      <EarthFooter />

      {/* Floating Modals and Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => handleOpenCheckout()}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        initialMilkName={checkoutPrefill.name}
        initialPrice={checkoutPrefill.price}
        onConfirmOrder={handleConfirmOrder}
      />

      <AiAssistantModal
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        onSelectProductToOrder={handleOpenCheckout}
      />

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        orderDetails={lastOrder}
      />
    </div>
  );
}
