const products = [
  {
    id: 1,
    title: { fr: 'MacBook Air M3', en: 'MacBook Air M3', ar: 'ماك بوك إير M3' },
    price: 18999,
    category: { fr: 'Portable', en: 'Laptop', ar: 'لابتوب' },
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: {
      fr: 'Ultra-portable, autonomie exceptionnelle et écran Retina.',
      en: 'Ultra-portable, exceptional autonomy and Retina display.',
      ar: 'خفيف للغاية، عمر بطارية ممتاز وشاشة Retina.',
    },
  },
  {
    id: 2,
    title: { fr: 'Clavier mécanique RGB', en: 'RGB mechanical keyboard', ar: 'لوحة مفاتيح ميكانيكية RGB' },
    price: 1299,
    category: { fr: 'Accessoire', en: 'Accessory', ar: 'إكسسوار' },
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
    description: {
      fr: 'Switchs silencieux et éclairage RGB personnalisable.',
      en: 'Silent switches and customizable RGB lighting.',
      ar: 'مفاتيح هادئة وإضاءة RGB قابلة للتخصيص.',
    },
  },
  {
    id: 3,
    title: { fr: 'Casque HyperX', en: 'HyperX headset', ar: 'سماعة HyperX' },
    price: 1499,
    category: { fr: 'Audio', en: 'Audio', ar: 'صوت' },
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: {
      fr: 'Audio immersif avec micro antibruit.',
      en: 'Immersive audio with noise-canceling mic.',
      ar: 'صوت غامر مع ميكروفون يقضي على الضجيج.',
    },
  },
  {
    id: 4,
    title: { fr: 'Écran 4K 27"', en: '27" 4K monitor', ar: 'شاشة 27 بوصة بدقة 4K' },
    price: 6499,
    category: { fr: 'Écran', en: 'Display', ar: 'شاشة' },
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    description: {
      fr: 'Image nette et couleurs précises pour le travail et le jeu.',
      en: 'Sharp picture and accurate colors for work and gaming.',
      ar: 'صورة واضحة وألوان دقيقة للعمل وللألعاب.',
    },
  },
  {
    id: 5,
    title: { fr: 'Souris sans fil', en: 'Wireless mouse', ar: 'فأرة لاسلكية' },
    price: 799,
    category: { fr: 'Accessoire', en: 'Accessory', ar: 'إكسسوار' },
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
    description: {
      fr: 'Précision et confort pour une utilisation prolongée.',
      en: 'Precision and comfort for long sessions.',
      ar: 'دقة وراحة للاستخدام الطويل.',
    },
  },
  {
    id: 6,
    title: { fr: 'SSD NVMe 1 To', en: '1 TB NVMe SSD', ar: 'محرك SSD NVMe سعة 1 تيرابايت' },
    price: 1199,
    category: { fr: 'Stockage', en: 'Storage', ar: 'تخزين' },
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    description: {
      fr: 'Accélérez votre système avec une lecture ultra rapide.',
      en: 'Speed up your system with ultra-fast read speeds.',
      ar: 'سرّع نظامك بقراءة فائقة السرعة.',
    },
  },
];

const translations = {
  fr: {
    brand: 'Souk Digital',
    nav: { home: 'Accueil', dashboard: 'Dashboard', about: 'À propos' },
    buttons: { login: 'Connexion', register: 'Créer un compte', theme: 'Changer de thème', cart: 'Voir le panier' },
    hero: {
      eyebrow: 'Nouveautés 2026',
      title: 'Équipez votre setup avec style et performance.',
      text: 'Découvrez des produits premium pour gamers, créateurs et pros du numérique. Livraison rapide, garanties officielles et promos exclusives.',
      primaryBtn: 'Acheter maintenant',
      secondaryBtn: 'Voir le dashboard',
      metrics: ['Expédition', 'Clients satisfaits', 'Produits premium'],
    },
    categories: [
      { title: 'Ordinateurs portables', text: 'Puissance et mobilité pour chaque besoin.' },
      { title: 'Écrans', text: 'Visuels immersifs et précision professionnelle.' },
      { title: 'Accessoires', text: 'Claviers, souris, casques et hubs USB-C.' },
      { title: 'Stockage', text: 'SSD rapides et solutions de sauvegarde.' },
    ],
    products: { eyebrow: 'Sélection du moment', title: 'Produits phares', viewAll: 'Voir tout' },
    dashboardSection: { eyebrow: 'Tableau de bord', title: 'Vos préférences', open: 'Ouvrir', favorites: 'Favoris', cartItems: 'Articles au panier', availability: 'Disponibilité' },
    aboutSection: { eyebrow: 'Pourquoi Souk Digital ?', title: 'Une expérience shopping moderne, rapide et élégante.', more: 'En savoir plus', items: ['Design responsive adapté mobile et desktop', 'Mode clair / sombre avec préférences enregistrées', 'Panier et favoris interactifs sans backend', 'Authentification statique pour démonstration'] },
    cart: { title: 'Votre panier', total: 'Total', checkout: 'Passer la commande', empty: 'Votre panier est vide.' },
    auth: { loginTitle: 'Connexion', loginTab: 'Connexion', registerTab: 'Inscription', email: 'Adresse e-mail', password: 'Mot de passe', confirmPassword: 'Confirmer le mot de passe', submitLogin: 'Se connecter', submitRegister: 'Créer un compte', successLogin: 'Connexion réussie (statique).', successRegister: 'Compte créé avec succès (statique).' },
    dashboardPage: { eyebrow: 'Tableau de bord', title: 'Suivez vos favoris, vos achats et vos préférences.', text: 'Une page dédiée pour centraliser votre expérience d’achat et votre activité sur Souk Digital.', favoriteTitle: 'Vos produits préférés', summaryTitle: 'Résumé rapide' },
    aboutPage: { eyebrow: 'À propos', title: 'Nous connectons les passionnés de tech à des produits modernes.', text: 'Souk Digital propose une expérience de shopping simple, élégante et orientée performance pour les accessoires et équipements informatiques.', missionTitle: 'Notre mission', missionText: 'Créer une vitrine e-commerce simple, rapide et visuellement soignée pour mettre en avant les meilleures solutions tech.', valuesTitle: 'Nos valeurs', values: ['Qualité et fiabilité', 'Design moderne', 'Expérience utilisateur fluide', 'Accessibilité et responsive'] },
    product: { add: 'Ajouter', addFavorite: 'Ajouter aux favoris', emptyFavorites: 'Aucun favori pour le moment.', emptyCart: 'Votre panier est vide.' },
  },
  en: {
    brand: 'Souk Digital',
    nav: { home: 'Home', dashboard: 'Dashboard', about: 'About' },
    buttons: { login: 'Sign in', register: 'Create account', theme: 'Switch theme', cart: 'View cart' },
    hero: {
      eyebrow: 'New in 2026',
      title: 'Equip your setup with style and performance.',
      text: 'Discover premium products for gamers, creators and digital professionals. Fast delivery, official guarantees, and exclusive promotions.',
      primaryBtn: 'Shop now',
      secondaryBtn: 'View dashboard',
      metrics: ['Shipping', 'Happy customers', 'Premium products'],
    },
    categories: [
      { title: 'Laptops', text: 'Power and mobility for every need.' },
      { title: 'Displays', text: 'Immersive visuals and professional precision.' },
      { title: 'Accessories', text: 'Keyboards, mice, headsets and USB-C hubs.' },
      { title: 'Storage', text: 'Fast SSDs and backup solutions.' },
    ],
    products: { eyebrow: 'Trending now', title: 'Featured products', viewAll: 'See all' },
    dashboardSection: { eyebrow: 'Dashboard', title: 'Your preferences', open: 'Open', favorites: 'Favorites', cartItems: 'Items in cart', availability: 'Availability' },
    aboutSection: { eyebrow: 'Why Souk Digital?', title: 'A modern, fast and elegant shopping experience.', more: 'Learn more', items: ['Responsive design for mobile and desktop', 'Light / dark mode with saved preferences', 'Interactive cart and favorites without backend', 'Static authentication for demo purposes'] },
    cart: { title: 'Your cart', total: 'Total', checkout: 'Checkout', empty: 'Your cart is empty.' },
    auth: { loginTitle: 'Sign in', loginTab: 'Sign in', registerTab: 'Register', email: 'Email address', password: 'Password', confirmPassword: 'Confirm password', submitLogin: 'Sign in', submitRegister: 'Create account', successLogin: 'Sign-in successful (static).', successRegister: 'Account created successfully (static).' },
    dashboardPage: { eyebrow: 'Dashboard', title: 'Track your favorites, purchases and preferences.', text: 'A dedicated page to centralize your shopping experience and activity on Souk Digital.', favoriteTitle: 'Your favorite products', summaryTitle: 'Quick summary' },
    aboutPage: { eyebrow: 'About', title: 'We connect tech enthusiasts with modern products.', text: 'Souk Digital offers a simple, elegant and performance-oriented shopping experience for computer accessories and equipment.', missionTitle: 'Our mission', missionText: 'Create a simple, fast and visually polished e-commerce showcase that highlights the best tech solutions.', valuesTitle: 'Our values', values: ['Quality and reliability', 'Modern design', 'Smooth user experience', 'Accessibility and responsiveness'] },
    product: { add: 'Add', addFavorite: 'Add to favorites', emptyFavorites: 'No favorites yet.', emptyCart: 'Your cart is empty.' },
  },
  ar: {
    brand: 'سوق ديجيتال',
    nav: { home: 'الرئيسية', dashboard: 'لوحة التحكم', about: 'من نحن' },
    buttons: { login: 'تسجيل الدخول', register: 'إنشاء حساب', theme: 'تبديل الثيم', cart: 'عرض السلة' },
    hero: {
      eyebrow: 'الجديد في 2026',
      title: 'جهّز إعدادك بأناقة وأداء.',
      text: 'اكتشف منتجات مميزة للاعبين والمبدعين والمحترفين الرقميين. شحن سريع وضمانات رسمية وعروض حصرية.',
      primaryBtn: 'تسوق الآن',
      secondaryBtn: 'عرض لوحة التحكم',
      metrics: ['الشحن', 'عملاء راضون', 'منتجات مميزة'],
    },
    categories: [
      { title: 'أجهزة لابتوب', text: 'القوة والتنقل لكل احتياج.' },
      { title: 'الشاشات', text: 'صور غامرة ودقة احترافية.' },
      { title: 'الإكسسوارات', text: 'لوحات مفاتيح وفأر وسماعات وموزعات USB-C.' },
      { title: 'التخزين', text: 'أقراص SSD سريعة وحلول نسخ احتياطي.' },
    ],
    products: { eyebrow: 'الأكثر شعبية', title: 'المنتجات المميزة', viewAll: 'عرض الكل' },
    dashboardSection: { eyebrow: 'لوحة التحكم', title: 'تفضيلاتك', open: 'فتح', favorites: 'المفضلة', cartItems: 'العناصر في السلة', availability: 'التوفر' },
    aboutSection: { eyebrow: 'لماذا سوق ديجيتال؟', title: 'تجربة تسوق حديثة وسريعة وأنيقة.', more: 'اعرف المزيد', items: ['تصميم سريع الاستجابة على الهاتف والسطح', 'وضع فاتح / داكن مع حفظ التفضيلات', 'سلة ومفضلة تفاعلية بدون خلفية', 'مصادقة ثابتة للعرض التوضيحي'] },
    cart: { title: 'سلة المشتريات', total: 'الإجمالي', checkout: 'إتمام الطلب', empty: 'سلة المشتريات فارغة.' },
    auth: { loginTitle: 'تسجيل الدخول', loginTab: 'تسجيل الدخول', registerTab: 'إنشاء حساب', email: 'البريد الإلكتروني', password: 'كلمة المرور', confirmPassword: 'تأكيد كلمة المرور', submitLogin: 'تسجيل الدخول', submitRegister: 'إنشاء حساب', successLogin: 'تم تسجيل الدخول بنجاح (ثابت).', successRegister: 'تم إنشاء الحساب بنجاح (ثابت).' },
    dashboardPage: { eyebrow: 'لوحة التحكم', title: 'تابع مفضلاتك ومشترياتك وتفضيلاتك.', text: 'صفحة مخصصة لتجميع تجربة التسوق ونشاطك على سوق ديجيتال.', favoriteTitle: 'منتجاتك المفضلة', summaryTitle: 'ملخص سريع' },
    aboutPage: { eyebrow: 'من نحن', title: 'نربط عشاق التكنولوجيا بالمنتجات الحديثة.', text: 'تقدم سوق ديجيتال تجربة تسوق بسيطة وأنيقة وموجهة للأداء لملحقات وأجهزة الكمبيوتر.', missionTitle: 'رسالتنا', missionText: 'إنشاء واجهة متجر إلكتروني بسيطة وسريعة ومصممة بشكل أنيق لتسليط الضوء على أفضل حلول التكنولوجيا.', valuesTitle: 'قيمنا', values: ['الجودة والاعتمادية', 'تصميم حديث', 'تجربة مستخدم سلسة', 'إمكانية الوصول والاستجابة'] },
    product: { add: 'إضافة', addFavorite: 'إضافة إلى المفضلة', emptyFavorites: 'لا توجد مفضلات بعد.', emptyCart: 'سلة المشتريات فارغة.' },
  },
};

const state = {
  favorites: JSON.parse(localStorage.getItem('souk-favorites') || '[]'),
  cart: JSON.parse(localStorage.getItem('souk-cart') || '[]'),
  theme: localStorage.getItem('souk-theme') || 'light',
  lang: localStorage.getItem('souk-lang') || 'fr',
  authMode: 'login',
};

const productGrid = document.getElementById('productGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const favoritesList = document.getElementById('favoritesList');
const favoriteCount = document.getElementById('favoriteCount');
const cartSummary = document.getElementById('cartSummary');
const themeToggle = document.getElementById('themeToggle');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeAuth = document.getElementById('closeAuth');
const authForm = document.getElementById('authForm');
const modalTitle = document.getElementById('modalTitle');
const confirmInput = document.getElementById('confirmInput');
const tabs = document.querySelectorAll('.tab');
const langSwitcher = document.getElementById('langSwitcher');

function getText(value, lang = state.lang) {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') return value[lang] || value.fr || '';
  return '';
}

function getTranslation(path, lang = state.lang) {
  const keys = path.split('.');
  let current = translations[lang];
  for (const key of keys) {
    current = current?.[key];
    if (current === undefined) return '';
  }
  return current;
}

function formatPrice(price, lang = state.lang) {
  const locale = lang === 'ar' ? 'ar-TN' : lang === 'en' ? 'en-TN' : 'fr-TN';
  const currency = lang === 'ar' ? 'د.ت' : 'TND';
  return `${price.toLocaleString(locale)} ${currency}`;
}

function applyLanguage() {
  const lang = state.lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');
  if (langSwitcher) {
    langSwitcher.value = lang;
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getTranslation(element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = getTranslation(element.dataset.i18nPlaceholder);
    if (value) {
      element.placeholder = value;
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    const [attr, path] = element.dataset.i18nAttr.split(':');
    const value = getTranslation(path);
    if (value) {
      element.setAttribute(attr, value);
    }
  });

  if (modalTitle) {
    modalTitle.textContent = state.authMode === 'login' ? getTranslation('auth.loginTitle') : getTranslation('auth.registerTab');
  }
  if (authForm) {
    const submitButton = authForm.querySelector('button');
    if (submitButton) {
      submitButton.textContent = state.authMode === 'login' ? getTranslation('auth.submitLogin') : getTranslation('auth.submitRegister');
    }
  }
  if (confirmInput) {
    confirmInput.placeholder = getTranslation('auth.confirmPassword');
  }
  if (themeToggle) {
    themeToggle.textContent = state.theme === 'dark' ? '🌙' : '☀️';
  }

  renderProducts();
  renderFavorites();
  renderCart();
}

function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${getText(product.title)}" />
          <div class="product-top">
            <div>
              <p class="eyebrow">${getText(product.category)}</p>
              <h3>${getText(product.title)}</h3>
            </div>
            <button class="favorite-btn ${state.favorites.includes(product.id) ? 'active' : ''}" data-id="${product.id}" aria-label="${getTranslation('product.addFavorite')}">♡</button>
          </div>
          <p>${getText(product.description)}</p>
          <div class="product-actions">
            <span class="product-price">${formatPrice(product.price)}</span>
            <button class="btn btn-primary" data-add="${product.id}">${getTranslation('product.add')}</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderFavorites() {
  if (!favoritesList || !favoriteCount) return;
  const favProducts = products.filter((product) => state.favorites.includes(product.id));
  favoriteCount.textContent = favProducts.length;

  if (!favProducts.length) {
    favoritesList.innerHTML = `<div class="favorite-item">${getTranslation('product.emptyFavorites')}</div>`;
    return;
  }

  favoritesList.innerHTML = favProducts
    .map(
      (product) => `
        <div class="favorite-item">
          <span>${getText(product.title)}</span>
          <strong>${formatPrice(product.price)}</strong>
        </div>
      `
    )
    .join('');
}

function renderCart() {
  if (!cartItems || !cartCount || !cartSummary || !cartTotal) return;
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartSummary.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = formatPrice(total);

  if (!state.cart.length) {
    cartItems.innerHTML = `<div class="cart-item">${getTranslation('cart.empty')}</div>`;
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-top">
            <div class="cart-item-info">
              <strong>${getText(item.title)}</strong>
              <span>${item.quantity} × ${formatPrice(item.price)}</span>
            </div>
            <img src="${item.image}" alt="${getText(item.title)}" />
          </div>
        </div>
      `
    )
    .join('');
}

function saveState() {
  localStorage.setItem('souk-favorites', JSON.stringify(state.favorites));
  localStorage.setItem('souk-cart', JSON.stringify(state.cart));
  localStorage.setItem('souk-theme', state.theme);
  localStorage.setItem('souk-lang', state.lang);
}

function toggleFavorite(productId) {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter((id) => id !== productId);
  } else {
    state.favorites.push(productId);
  }
  saveState();
  renderProducts();
  renderFavorites();
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }
  saveState();
  renderCart();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.body.classList.toggle('dark', state.theme === 'dark');
  if (themeToggle) {
    themeToggle.textContent = state.theme === 'dark' ? '🌙' : '☀️';
  }
  saveState();
}

function closeMenu() {
  navLinks?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) {
    menuToggle.textContent = '☰';
  }
}

function toggleMenu() {
  const isOpen = navLinks?.classList.toggle('open');
  menuToggle?.setAttribute('aria-expanded', String(Boolean(isOpen)));
  if (menuToggle) {
    menuToggle.textContent = isOpen ? '✕' : '☰';
  }
}

function openAuth(mode) {
  state.authMode = mode;
  if (modalTitle) {
    modalTitle.textContent = mode === 'login' ? getTranslation('auth.loginTitle') : getTranslation('auth.registerTab');
  }
  if (confirmInput) {
    confirmInput.hidden = mode === 'login';
  }
  if (authForm) {
    const submitButton = authForm.querySelector('button');
    if (submitButton) {
      submitButton.textContent = mode === 'login' ? getTranslation('auth.submitLogin') : getTranslation('auth.submitRegister');
    }
  }
  if (authModal && overlay) {
    authModal.classList.add('open');
    overlay.classList.add('show');
    authModal.setAttribute('aria-hidden', 'false');
  }
  document.querySelector('.tab.active')?.classList.remove('active');
  document.querySelector(`.tab[data-mode="${mode}"]`)?.classList.add('active');
}

function closeAuthModal() {
  authModal?.classList.remove('open');
  overlay?.classList.remove('show');
  authModal?.setAttribute('aria-hidden', 'true');
}

function init() {
  document.body.classList.toggle('dark', state.theme === 'dark');

  if (langSwitcher) {
    langSwitcher.addEventListener('change', (event) => {
      state.lang = event.target.value;
      saveState();
      applyLanguage();
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });

  if (productGrid) {
    productGrid.addEventListener('click', (event) => {
      const favoriteButton = event.target.closest('.favorite-btn');
      if (favoriteButton) {
        toggleFavorite(Number(favoriteButton.dataset.id));
        return;
      }

      const addButton = event.target.closest('[data-add]');
      if (addButton) {
        addToCart(Number(addButton.dataset.add));
      }
    });
  }

  if (cartToggle && overlay) {
    cartToggle.addEventListener('click', () => {
      document.getElementById('cartPanel')?.classList.add('open');
      overlay.classList.add('show');
    });
  }
  if (closeCart && overlay) {
    closeCart.addEventListener('click', () => {
      document.getElementById('cartPanel')?.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      document.getElementById('cartPanel')?.classList.remove('open');
      closeAuthModal();
      overlay.classList.remove('show');
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', () => openAuth('login'));
  }
  if (registerBtn) {
    registerBtn.addEventListener('click', () => openAuth('register'));
  }
  if (closeAuth) {
    closeAuth.addEventListener('click', closeAuthModal);
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      openAuth(tab.dataset.mode);
    });
  });

  if (authForm) {
    authForm.addEventListener('submit', (event) => {
      event.preventDefault();
      closeAuthModal();
      window.alert(state.authMode === 'login' ? getTranslation('auth.successLogin') : getTranslation('auth.successRegister'));
    });
  }

  applyLanguage();
}

init();
