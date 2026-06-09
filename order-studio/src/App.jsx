import React, { useState, useCallback, useEffect } from 'react';
import { loadOrders, saveOrders } from './storage';
import { defaultTasks } from './data';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import OrdersTab from './components/OrdersTab';
import CalendarTab from './components/CalendarTab';
import StatsTab from './components/StatsTab';
import BottomSheet from './components/BottomSheet';
import OrderForm from './components/OrderForm';
import Toast from './components/Toast';

function todayPlusDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function App() {
  const [orders, setOrders] = useState(() => loadOrders());
  const [activeTab, setActiveTab] = useState('orders');
  const [sheet, setSheet] = useState(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  const showToast = useCallback((message, type = 'success') => {
    const id = genId();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  }, []);

  const openNew = useCallback(() => {
    setSheet({
      mode: 'new',
      order: {
        id: genId(),
        customer: '',
        item: '',
        occasion: '',
        price: '',
        status: 'New',
        dueDate: todayPlusDays(7),
        notes: '',
        tasks: defaultTasks(),
      },
    });
  }, []);

  const openEdit = useCallback((order) => {
    setSheet({
      mode: 'edit',
      order: { ...order, tasks: { ...defaultTasks(), ...order.tasks } },
    });
  }, []);

  const closeSheet = useCallback(() => setSheet(null), []);

  const handleSave = useCallback(
    (order) => {
      setOrders((prev) => {
        const exists = prev.some((o) => o.id === order.id);
        return exists ? prev.map((o) => (o.id === order.id ? order : o)) : [...prev, order];
      });
      showToast(sheet?.mode === 'new' ? 'Order added!' : 'Order saved!');
      setSheet(null);
    },
    [sheet, showToast]
  );

  const handleDelete = useCallback(
    (id) => {
      setOrders((prev) => prev.filter((o) => o.id !== id));
      showToast('Order deleted', 'info');
      setSheet(null);
    },
    [showToast]
  );

  return (
    <div className="app">
      <Header onAdd={openNew} />
      <main className="main-content">
        {activeTab === 'orders' && <OrdersTab orders={orders} onEdit={openEdit} />}
        {activeTab === 'calendar' && <CalendarTab orders={orders} onEdit={openEdit} />}
        {activeTab === 'stats' && <StatsTab orders={orders} />}
      </main>
      <BottomNav active={activeTab} onChange={setActiveTab} />

      {sheet && (
        <BottomSheet onClose={closeSheet}>
          <OrderForm
            order={sheet.order}
            mode={sheet.mode}
            onSave={handleSave}
            onDelete={handleDelete}
            onClose={closeSheet}
          />
        </BottomSheet>
      )}

      <Toast toasts={toasts} />
    </div>
  );
}
