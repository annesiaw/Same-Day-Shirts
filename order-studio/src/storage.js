const KEY = 'order-studio-v1';

export function loadOrders() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveOrders(orders) {
  localStorage.setItem(KEY, JSON.stringify(orders));
}
