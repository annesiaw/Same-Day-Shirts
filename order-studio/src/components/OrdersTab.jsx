import React, { useState, useMemo } from 'react';
import OrderCard from './OrderCard';
import { STATUSES } from '../data';

export default function OrdersTab({ orders, onEdit }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    let result = orders;
    if (filter !== 'All') result = result.filter((o) => o.status === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (o) =>
          o.item?.toLowerCase().includes(q) ||
          o.customer?.toLowerCase().includes(q) ||
          o.occasion?.toLowerCase().includes(q)
      );
    }
    return [...result].sort((a, b) => {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return a.dueDate.localeCompare(b.dueDate);
    });
  }, [orders, filter, search]);

  return (
    <div className="tab-content">
      <div className="search-bar">
        <input
          type="search"
          className="search-input"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-chips">
        {['All', ...STATUSES].map((s) => (
          <button
            key={s}
            className={`filter-chip${filter === s ? ' active' : ''}`}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="orders-list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            {orders.length === 0 ? (
              <>
                <div className="empty-icon">📦</div>
                <p>No orders yet.</p>
                <p>Tap <strong>+</strong> to add your first order!</p>
              </>
            ) : (
              <p>No orders match your search.</p>
            )}
          </div>
        ) : (
          filtered.map((order) => (
            <OrderCard key={order.id} order={order} onClick={() => onEdit(order)} />
          ))
        )}
      </div>
    </div>
  );
}
