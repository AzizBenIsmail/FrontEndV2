const products = [
  {
    id: 1,
    title: 'MacBook Air M3',
    price: 18999,
    category: 'Laptop',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-portable, autonomie exceptionnelle et écran Retina.',
  },
  {
    id: 2,
    title: 'Clavier mécanique RGB',
    price: 1299,
    category: 'Accessoire',
    image:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
    description: 'Switchs silencieux et éclairage RGB personnalisable.',
  },
  {
    id: 3,
    title: 'Casque HyperX',
    price: 1499,
    category: 'Audio',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Audio immersif avec micro antibruit.',
  },
  {
    id: 4,
    title: 'Écran 4K 27"',
    price: 6499,
    category: 'Écran',
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    description: 'Image nette et couleurs précises pour le travail et le jeu.',
  },
  {
    id: 5,
    title: 'Souris sans fil',
    price: 799,
    category: 'Accessoire',
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
    description: 'Précision et confort pour une utilisation prolongée.',
  },
  {
    id: 6,
    title: 'SSD NVMe 1 To',
    price: 1199,
    category: 'Stockage',
    image:
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    description: 'Accélérez votre système avec une lecture ultra rapide.',
  },
];

const state = {
  favorites: JSON.parse(localStorage.getItem('souk-favorites') || '[]'),
  cart: JSON.parse(localStorage.getItem('souk-cart') || '[]'),
  theme: localStorage.getItem('souk-theme') || 'light',
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
const overlay = document.getElementById('overlay');
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeAuth = document.getElementById('closeAuth');
const authForm = document.getElementById('authForm');
const modalTitle = document.getElementById('modalTitle');
const confirmInput = document.getElementById('confirmInput');
const tabs = document.querySelectorAll('.tab');

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.title}" />
          <div class="product-top">
            <div>
              <p class="eyebrow">${product.category}</p>
              <h3>${product.title}</h3>
            </div>
            <button class="favorite-btn ${state.favorites.includes(product.id) ? 'active' : ''}" data-id="${product.id}" aria-label="Ajouter aux favoris">♡</button>
          </div>
          <p>${product.description}</p>
          <div class="product-actions">
            <span class="product-price">${product.price.toLocaleString('fr-MA')} DH</span>
            <button class="btn btn-primary" data-add="${product.id}">Ajouter</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderFavorites() {
  const favProducts = products.filter((product) => state.favorites.includes(product.id));
  favoriteCount.textContent = favProducts.length;

  if (!favProducts.length) {
    favoritesList.innerHTML = '<div class="favorite-item">Aucun favori pour le moment.</div>';
    return;
  }

  favoritesList.innerHTML = favProducts
    .map(
      (product) => `
        <div class="favorite-item">
          <span>${product.title}</span>
          <strong>${product.price.toLocaleString('fr-MA')} DH</strong>
        </div>
      `
    )
    .join('');
}

function renderCart() {
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartSummary.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `${total.toLocaleString('fr-MA')} DH`;

  if (!state.cart.length) {
    cartItems.innerHTML = '<div class="cart-item">Votre panier est vide.</div>';
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-top">
            <div class="cart-item-info">
              <strong>${item.title}</strong>
              <span>${item.quantity} × ${item.price.toLocaleString('fr-MA')} DH</span>
            </div>
            <img src="${item.image}" alt="${item.title}" />
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
  themeToggle.textContent = state.theme === 'dark' ? '🌙' : '☀️';
  saveState();
}

function openAuth(mode) {
  state.authMode = mode;
  modalTitle.textContent = mode === 'login' ? 'Connexion' : 'Inscription';
  confirmInput.hidden = mode === 'login';
  authForm.querySelector('button').textContent = mode === 'login' ? 'Se connecter' : 'Créer un compte';
  authModal.classList.add('open');
  overlay.classList.add('show');
  authModal.setAttribute('aria-hidden', 'false');
  document.querySelector('.tab.active')?.classList.remove('active');
  document.querySelector(`.tab[data-mode="${mode}"]`)?.classList.add('active');
}

function closeAuthModal() {
  authModal.classList.remove('open');
  overlay.classList.remove('show');
  authModal.setAttribute('aria-hidden', 'true');
}

function init() {
  document.body.classList.toggle('dark', state.theme === 'dark');
  themeToggle.textContent = state.theme === 'dark' ? '🌙' : '☀️';

  renderProducts();
  renderFavorites();
  renderCart();

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

  themeToggle.addEventListener('click', toggleTheme);
  cartToggle.addEventListener('click', () => {
    document.getElementById('cartPanel').classList.add('open');
    overlay.classList.add('show');
  });
  closeCart.addEventListener('click', () => {
    document.getElementById('cartPanel').classList.remove('open');
    overlay.classList.remove('show');
  });
  overlay.addEventListener('click', () => {
    document.getElementById('cartPanel').classList.remove('open');
    closeAuthModal();
    overlay.classList.remove('show');
  });

  loginBtn.addEventListener('click', () => openAuth('login'));
  registerBtn.addEventListener('click', () => openAuth('register'));
  closeAuth.addEventListener('click', closeAuthModal);

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      openAuth(tab.dataset.mode);
    });
  });

  authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    closeAuthModal();
    window.alert(state.authMode === 'login' ? 'Connexion réussie (statique).' : 'Compte créé avec succès (statique).');
  });
}

init();
