function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity = 1) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const existingItem = cart.find(item => item.id === product.id);
  const currentQuantity = existingItem ? existingItem.quantity : 0;
  const newQuantity = currentQuantity + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  const newCart = JSON.parse(JSON.stringify(cart));
  const itemInNewCart = newCart.find(item => item.id === product.id);

  if (itemInNewCart) {
    itemInNewCart.quantity = newQuantity;
  } else {
    newCart.push({ ...product, quantity });
  }

  return newCart;
}

function changeQuantity(cart, productId, quantity) {
  const existingItem = cart.find(item => item.id === productId);
  
  if (!existingItem) {
    return cart;
  }

  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  if (quantity > existingItem.stock) {
    throw new RangeError('Указанное количество превышает остаток на складе');
  }

  return cart.map(item => 
    item.id === productId ? { ...item, quantity } : item
  );
}

function removeFromCart(cart, productId) {
  return cart.filter(item => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoCode) {
 
  const subtotal = calculateCartSubtotal(cart);
  
  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.floor(subtotal * 0.1);
  }

  const delivery = subtotal < 50000 ? 30000 : 0;
  
  const total = subtotal - discount + delivery;

  return {
    subtotal,
    discount,
    delivery,
    total
  };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
