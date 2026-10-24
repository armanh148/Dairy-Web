import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, ArrowRight } from 'lucide-react';

export default function AiAssistantModal({ isOpen, onClose, onSelectProductToOrder }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Assalam-o-Alaikum! I am your Bondu Milk AI Wellness Advisor. How can I help you choose the best exotic milk for your health needs today?',
      recommendation: null
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  const SUGGESTIONS = [
    { label: '🥛 Best for bone health', prompt: 'Which milk is best for strong bones and calcium?' },
    { label: '💪 High protein & energy', prompt: 'What is the highest protein milk for workout and recovery?' },
    { label: '✨ Skin & beauty glow', prompt: 'Which milk helps with skin glowing and anti-aging?' },
    { label: '🏥 Diabetes friendly', prompt: 'Is there a milk suitable for diabetes and insulin control?' }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const generateAnswer = (query) => {
    const q = query.toLowerCase();

    if (q.includes('bone') || q.includes('calcium') || q.includes('haddi') || q.includes('kids') || q.includes('family')) {
      return {
        text: 'For bone strength and calcium density, our **Cow Milk** (Rs. 180/L) is the premier classic! It is 100% grass-fed, rich in calcium (125mg/100ml), bio-available phosphorus, and vitamin D.',
        recommendation: { name: 'Cow Milk', price: 180 }
      };
    }

    if (q.includes('diabet') || q.includes('sugar') || q.includes('insulin') || q.includes('camel') || q.includes('oont')) {
      return {
        text: 'For diabetes support, **Camel Milk** (Rs. 400/L) is scientifically unmatched! It naturally contains around 52 units/liter of insulin-like micro-proteins that survive stomach acids, helping regulate blood glucose.',
        recommendation: { name: 'Camel Milk', price: 400 }
      };
    }

    if (q.includes('skin') || q.includes('glow') || q.includes('beauty') || q.includes('donkey') || q.includes('face') || q.includes('anti-aging')) {
      return {
        text: 'For glowing skin and cellular anti-aging, **Donkey Milk** (Rs. 500/L) is legendary! Famous since Cleopatra, it is naturally loaded with vitamins A, B, C, and lysozyme enzymes for dermal collagen repair.',
        recommendation: { name: 'Donkey Milk', price: 500 }
      };
    }

    if (q.includes('protein') || q.includes('puppy') || q.includes('dog') || q.includes('fat') || q.includes('gym') || q.includes('muscle')) {
      return {
        text: 'For maximum protein and nutrient density, **Dog Milk** (Rs. 800/L) contains 9.5% healthy fats and 7.5% bio-proteins — highest calorie-to-volume ratio, perfect for nursing puppies or intense recovery.',
        recommendation: { name: 'Dog Milk', price: 800 }
      };
    }

    if (q.includes('deliver') || q.includes('kahan') || q.includes('city') || q.includes('karachi') || q.includes('lahore')) {
      return {
        text: 'We deliver in temperature-controlled, chilled thermal packaging within 24 hours across all major cities with Cash on Delivery available.',
        recommendation: null
      };
    }

    return {
      text: 'Great question! All our exotic milks (Camel, Cow, Donkey, Dog) are 100% raw, unadulterated, and lab-certified. Depending on whether you prioritize diabetes support, skin health, or bone calcium, we have the perfect natural match.',
      recommendation: { name: 'Camel Milk', price: 400 }
    };
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      recommendation: null
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    setTimeout(() => {
      const response = generateAnswer(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        recommendation: response.recommendation
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  return (
    <div className="modal-overlay open" style={{ alignItems: 'center' }}>
      <div className="modal-backdrop" onClick={onClose} />

      <div className="ai-modal-card">
        <div className="ai-modal-header">
          <div className="ai-header-left">
            <div className="ai-header-icon">
              <Bot size={22} />
            </div>
            <div>
              <h3>AI Health Advisor</h3>
              <span>Powered by Bondu Exotic Wellness Engine</span>
            </div>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="ai-chat-body">
          {messages.map((m) => (
            <div key={m.id} className={`ai-msg ${m.sender}`}>
              <div className="ai-msg-bubble">
                <p style={{ whiteSpace: 'pre-line' }}>{m.text}</p>

                {m.recommendation && (
                  <button
                    className="btn-primary"
                    style={{
                      marginTop: '0.75rem',
                      padding: '0.45rem 1rem',
                      fontSize: '0.75rem'
                    }}
                    onClick={() => {
                      onClose();
                      onSelectProductToOrder(m.recommendation.name, m.recommendation.price);
                    }}
                  >
                    <span>Order {m.recommendation.name} (Rs. {m.recommendation.price}/L)</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="ai-prompt-chips">
          {SUGGESTIONS.map((s, idx) => (
            <button
              key={idx}
              className="ai-chip"
              onClick={() => handleSend(s.prompt)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <form
          className="ai-input-bar"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            type="text"
            className="ai-input"
            placeholder="Ask about health benefits, sugar control, skin..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="ai-send-btn" aria-label="Send message">
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
