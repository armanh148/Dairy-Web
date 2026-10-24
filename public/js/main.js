(function(){
  'use strict';

  // ============ PAGE LOADER ============
  const loader = document.getElementById('pageLoader');
  const loaderFill = document.getElementById('loaderFill');
  gsap.to(loaderFill, {width:'100%', duration:1.6, ease:'power2.inOut', onComplete(){
    gsap.to(loader, {yPercent:-100, duration:.8, ease:'power4.inOut', delay:.2, onComplete(){
      loader.style.display='none';
      runHeroAnim();
      initScrollAnim();
    }});
  }});

  // ============ CUSTOM CURSOR ============
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx=0, my=0, rx=0, ry=0;

  document.addEventListener('mousemove', e=>{
    mx=e.clientX; my=e.clientY;
    gsap.set(dot, {x:mx-3, y:my-3});
  });

  (function tick(){
    rx+=(mx-rx)*.12;
    ry+=(my-ry)*.12;
    gsap.set(ring, {x:rx-18, y:ry-18});
    requestAnimationFrame(tick);
  })();

  document.addEventListener('mouseover', e=>{
    const t=e.target.closest('a,button,[data-magnetic]');
    if(t) ring.classList.add('expand');
  });
  document.addEventListener('mouseout', e=>{
    const t=e.target.closest('a,button,[data-magnetic]');
    if(t) ring.classList.remove('expand');
  });

  // ============ MAGNETIC BUTTONS ============
  document.querySelectorAll('[data-magnetic]').forEach(el=>{
    el.addEventListener('mousemove', e=>{
      const r=el.getBoundingClientRect();
      gsap.to(el, {x:(e.clientX-r.left-r.width/2)*.25, y:(e.clientY-r.top-r.height/2)*.25, duration:.4, ease:'power2.out'});
    });
    el.addEventListener('mouseleave', ()=>{
      gsap.to(el, {x:0, y:0, duration:.7, ease:'elastic.out(1,.4)'});
    });
  });

  // ============ SCROLL PROGRESS ============
  const scrollBar = document.getElementById('scrollBar');
  window.addEventListener('scroll', ()=>{
    const p = window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);
    gsap.set(scrollBar, {scaleX:p, transformOrigin:'left'});
  });

  // ============ HEADER SCROLL ============
  const header = document.querySelector('.header');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      header.style.background = 'rgba(255,251,235,0.92)';
    } else {
      header.style.boxShadow = 'none';
      header.style.background = 'rgba(255,251,235,0.85)';
    }
  });

  // ============ SMOOTH SCROLL ============
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const t=document.querySelector(this.getAttribute('href'));
      if(t) gsap.to(window, {duration:1, scrollTo:{y:t, offsetY:72}, ease:'power3.inOut'});
    });
  });

  // ============ HERO ANIMATION ============
  function runHeroAnim(){
    const tl = gsap.timeline({delay:.2});
    tl.from('[data-anim="hero"] .hero-badge', {y:40, opacity:0, duration:.9, ease:'power4.out'})
      .from('[data-anim="hero"] .line span', {y:'110%', opacity:0, duration:1, ease:'power4.out', stagger:.12}, '-=.5')
      .from('[data-anim="hero"] .hero-subtitle', {y:30, opacity:0, duration:.7, ease:'power3.out'}, '-=.4')
      .from('[data-anim="hero"] .hero-buttons', {y:20, opacity:0, duration:.6, ease:'power3.out'}, '-=.3')
      .from('[data-anim="hero"] .hero-stats', {y:20, opacity:0, duration:.6, ease:'power3.out'}, '-=.2')
      .from('.floating-tag', {scale:.85, opacity:0, duration:.7, ease:'back.out(1.4)', stagger:.1}, '-=.5')
      .from('.hero-ring', {scale:.7, opacity:0, duration:1, ease:'power2.out', stagger:.15}, '-=.8');

    // Floating tags continuous animation
    gsap.utils.toArray('.floating-tag').forEach((tag, i)=>{
      gsap.to(tag, {
        y: -10,
        duration: 2 + (i * 0.3),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.2
      });
    });

    // Bottle float
    gsap.to('.bottle', {
      y: -20,
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });

    // Bottle glow pulse
    gsap.to('.bottle-glow', {
      scale: 1.1,
      opacity: 0.8,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }

  // ============ SCROLL ANIMATIONS ============
  function initScrollAnim(){
    gsap.registerPlugin(ScrollTrigger);

    // Generic reveals
    document.querySelectorAll('[data-reveal]').forEach(el=>{
      gsap.from(el, {
        y: 50, opacity: 0, scale: .98, duration: .9, ease: 'power3.out',
        scrollTrigger: {trigger: el, start: 'top 88%', toggleActions: 'play none none none'}
      });
    });

    // Stat counters
    document.querySelectorAll('.stat-number[data-count]').forEach(el=>{
      const target = parseInt(el.dataset.count);
      const suffix = target >= 100 ? '%' : '+';
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter(){
          gsap.to(el, {
            innerHTML: target,
            duration: 2.2,
            snap: 'innerHTML',
            ease: 'power2.out',
            onUpdate(){ el.textContent = Math.round(parseFloat(el.textContent)) + suffix; }
          });
        }
      });
    });

    // Product cards stagger
    gsap.from('.product-card', {
      y: 60, opacity: 0, scale: .96, duration: .7, stagger: .12, ease: 'power3.out',
      scrollTrigger: {trigger: '#productsGrid', start: 'top 85%'},
      onComplete: function(){
        document.querySelectorAll('.product-card').forEach(c=>{
          c.classList.add('revealed');
          c.style.opacity = '';
          c.style.transform = '';
        });
      }
    });

    // Benefit cards stagger
    gsap.from('.benefit-card', {
      y: 30, opacity: 0, scale: .96, duration: .6, stagger: .08, ease: 'power3.out',
      scrollTrigger: {trigger: '#benefitsGrid', start: 'top 82%'},
      onComplete: function(){
        document.querySelectorAll('.benefit-card').forEach(c=>{
          c.classList.add('revealed');
          c.style.opacity = '';
          c.style.transform = '';
        });
      }
    });

    // Marquee parallax on scroll
    gsap.to('.marquee-track', {
      x: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.marquee',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  // ============ CART ============
  let cart = [];
  const cartBtn = document.querySelector('.cart-btn');
  const cartBadge = document.querySelector('.cart-badge');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartClose = document.getElementById('cart-close');
  const cartItems = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');

  function updateCartDisplay(){
    const totalItems = cart.reduce((s,i)=>s+i.qty, 0);
    const totalPrice = cart.reduce((s,i)=>s+i.price*i.qty, 0);
    cartBadge.textContent = totalItems;
    cartTotalEl.textContent = 'Rs. ' + totalPrice;

    if(!cart.length){
      cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
      return;
    }

    cartItems.innerHTML = cart.map((it,i)=>`
      <div class="cart-item">
        <div class="cart-item-image">${it.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${it.name}</div>
          <div class="cart-item-price">Rs. ${it.price}/L</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="cartChangeQty(${i},-1)">-</button>
            <span>${it.qty}L</span>
            <button class="qty-btn" onclick="cartChangeQty(${i},1)">+</button>
          </div>
        </div>
      </div>`).join('');
  }

  window.cartChangeQty = function(i, d){
    cart[i].qty += d;
    if(cart[i].qty <= 0) cart.splice(i, 1);
    updateCartDisplay();
  };

  function addToCart(id, name, price, emoji){
    const existing = cart.find(item=>item.id===id);
    if(existing) existing.qty++;
    else cart.push({id, name, price, emoji, qty:1});
    updateCartDisplay();

    // Button animation feedback
    const btn = document.querySelector(`[data-id="${id}"]`);
    if(btn){
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Added!';
      btn.style.background = '#10b981';
      setTimeout(()=>{
        btn.innerHTML = orig;
        btn.style.background = '';
      }, 1500);
    }

    // Animate cart badge
    gsap.fromTo(cartBadge, {scale:1.5}, {scale:1, duration:.4, ease:'back.out(2)'});

    // Open cart with animation
    cartSidebar.classList.add('active');
  }

  cartBtn.addEventListener('click', ()=>{
    cartSidebar.classList.add('active');
  });

  cartClose.addEventListener('click', ()=>{
    cartSidebar.classList.remove('active');
  });

  document.querySelectorAll('.btn-add-cart').forEach(btn=>{
    btn.addEventListener('click', function(){
      const id = parseInt(this.dataset.id);
      const name = this.dataset.name;
      const price = parseInt(this.dataset.price);
      const emoji = this.closest('.product-card').querySelector('.product-emoji').textContent;
      addToCart(id, name, price, emoji);
    });
  });

  // ============ WISHLIST ============
  document.querySelectorAll('.btn-wishlist').forEach(btn=>{
    btn.addEventListener('click', function(){
      const icon = this.querySelector('i');
      if(icon.classList.contains('far')){
        icon.classList.remove('far');
        icon.classList.add('fas');
        this.style.borderColor = '#ec4899';
        this.style.color = '#ec4899';
        this.style.background = '#fdf2f8';
        gsap.fromTo(this, {scale:1.3}, {scale:1, duration:.4, ease:'back.out(3)'});
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        this.style.borderColor = '';
        this.style.color = '';
        this.style.background = '';
      }
    });
  });

  // ============ AI ASSISTANT MODAL ============
  const aiModal = document.getElementById('ai-modal');
  const aiAssistantBtn = document.getElementById('ai-assistant-btn');
  const aiClose = document.getElementById('ai-close');
  const aiInputEl = document.getElementById('ai-input');
  const aiSendBtn = document.getElementById('ai-send');

  aiAssistantBtn.addEventListener('click', ()=>{
    aiModal.classList.add('active');
    gsap.from('.ai-modal-content', {scale:.9, y:20, duration:.4, ease:'back.out(1.5)'});
  });

  aiClose.addEventListener('click', ()=>{
    aiModal.classList.remove('active');
  });

  aiModal.addEventListener('click', (e)=>{
    if(e.target === aiModal) aiModal.classList.remove('active');
  });

  const aiSuggestions = document.querySelectorAll('.ai-suggestion');
  const aiResponses = {
    '🥛 Best for bone health': 'For strong bones, I recommend our <strong>Cow Milk</strong> (Rs. 180/L)! Rich in calcium and vitamin D. Perfect for kids and elderly!',
    '💪 High protein options': 'Looking for protein? Try our <strong>Dog Milk</strong> (Rs. 800/L) — highest protein! Or <strong>Cow Milk</strong> (Rs. 180/L) for budget-friendly.',
    '✨ Skin & beauty benefits': 'For glowing skin, <strong>Donkey Milk</strong> (Rs. 500/L) is your best choice! Famous since Cleopatra\'s time for anti-aging.',
    '🏥 Diabetes friendly': 'For diabetes management, <strong>Camel Milk</strong> (Rs. 400/L) contains insulin-like proteins that help control blood sugar!'
  };

  aiSuggestions.forEach(suggestion=>{
    suggestion.addEventListener('click', function(){
      const chat = document.querySelector('.ai-chat');
      const question = this.textContent;

      chat.innerHTML += `
        <div class="ai-message user" style="justify-content: flex-end;">
          <div class="message-content" style="background: var(--primary); color: white;">
            <p>${question}</p>
          </div>
        </div>`;

      gsap.from('.ai-message.user:last-child', {opacity:0, y:10, duration:.3});

      setTimeout(()=>{
        chat.innerHTML += `
          <div class="ai-message bot">
            <div class="message-avatar"><i class="fas fa-robot"></i></div>
            <div class="message-content">
              <p>${aiResponses[question]}</p>
            </div>
          </div>`;
        gsap.from('.ai-message.bot:last-child', {opacity:0, y:10, duration:.3});
        chat.scrollTop = chat.scrollHeight;
      }, 500);
    });
  });

  aiSendBtn.addEventListener('click', sendAiMessage);
  aiInputEl.addEventListener('keypress', (e)=>{ if(e.key==='Enter') sendAiMessage(); });

  function sendAiMessage(){
    const message = aiInputEl.value.trim();
    if(!message) return;

    const chat = document.querySelector('.ai-chat');
    chat.innerHTML += `
      <div class="ai-message user" style="justify-content: flex-end;">
        <div class="message-content" style="background: var(--primary); color: white;">
          <p>${message}</p>
        </div>
      </div>`;
    gsap.from('.ai-message.user:last-child', {opacity:0, y:10, duration:.3});

    aiInputEl.value = '';

    setTimeout(()=>{
      const responses = [
        'Great question! Our camel milk is excellent for immunity. Would you like to know more?',
        'I recommend trying our donkey milk for skin benefits. It\'s a premium choice!',
        'For daily nutrition, cow milk is perfect. Rich in calcium and affordable!',
        'All our milks are 100% organic and fresh. Which one interests you most?'
      ];
      const randomResponse = responses[Math.floor(Math.random()*responses.length)];

      chat.innerHTML += `
        <div class="ai-message bot">
          <div class="message-avatar"><i class="fas fa-robot"></i></div>
          <div class="message-content">
            <p>${randomResponse}</p>
          </div>
        </div>`;
      gsap.from('.ai-message.bot:last-child', {opacity:0, y:10, duration:.3});
      chat.scrollTop = chat.scrollHeight;
    }, 800);
  }

  // ============ SEARCH ============
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function(){
    const term = this.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card=>{
      const name = card.querySelector('.product-name').textContent.toLowerCase();
      const desc = card.querySelector('.product-desc').textContent.toLowerCase();
      if(name.includes(term) || desc.includes(term)){
        gsap.to(card, {opacity:1, scale:1, y:0, duration:.4, ease:'power3.out', display:'block'});
      } else {
        gsap.to(card, {opacity:0, scale:.96, y:10, duration:.3, ease:'power2.in', onComplete:()=>{card.style.display='none'}});
      }
    });
  });

  // ============ FILTER ============
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click', function(){
      filterBtns.forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;

      document.querySelectorAll('.product-card').forEach(card=>{
        if(filter==='all' || card.dataset.category===filter){
          gsap.to(card, {opacity:1, scale:1, y:0, duration:.5, ease:'power3.out', display:'block'});
        } else {
          gsap.to(card, {opacity:0, scale:.96, y:15, duration:.3, ease:'power2.in', onComplete:()=>{card.style.display='none'}});
        }
      });
    });
  });

  // ============ NAV LINK ACTIVE STATE ============
  window.addEventListener('scroll', ()=>{
    const sections = ['home','products','benefits','contact'];
    let current = 'home';
    sections.forEach(id=>{
      const el = document.getElementById(id);
      if(el && window.scrollY >= el.offsetTop - 200) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(link=>{
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

})();
