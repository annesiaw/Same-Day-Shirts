import React from 'react';
import { STATUS_COLORS, TASKS } from '../data';

function dueDateInfo(dueDate) {
  if (!dueDate) return { label: 'No date', color: '#adb5bd' };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate + 'T00:00:00');
  const diff = Math.floor((due - today) / 86400000);
  if (diff < 0) return { label: `${Math.abs(diff)}d overdue`, color: '#e63946' };
  if (diff === 0) return { label: 'Due today', color: '#e63946' };
  if (diff <= 2) return { label: `${diff}d left`, color: '#f4a261' };
  if (diff <= 4) return { label: `${diff}d left`, color: '#e8c547' };
  return { label: `${diff}d left`, color: '#52b788' };
}

export default function OrderCard({ order, onClick }) {
  const { item, customer, occasion, status, price, dueDate, tasks } = order;
  const statusColor = STATUS_COLORS[status] || '#adb5bd';
  const due = dueDateInfo(dueDate);
  const completed = TASKS.filter((t) => tasks?.[t]).length;
  const progress = (completed / TASKS.length) * 100;

  return (
    <div
      className="order-card"
      style={{ borderLeftColor: statusColor }}
      onClick={onClick}
    >
      <div className="card-header">
        <div className="card-title">{item || 'Untitled'}</div>
        <span
          className="status-badge"
          style={{
            background: statusColor + '22',
            color: statusColor,
            borderColor: statusColor + '55',
          }}
        >
          {status}
        </span>
      </div>

      <div className="card-customer">{customer || 'No customer'}</div>

      {occasion ? <span className="occasion-tag">{occasion}</span> : null}

      <div className="progress-wrap">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-label">{completed}/{TASKS.length} tasks</span>
      </div>

      <div className="card-footer">
        <span className="card-price">
          ${typeof price === 'number' ? price.toFixed(2) : parseFloat(price || 0).toFixed(2)}
        </span>
        <span
          className="due-badge"
          style={{
            background: due.color + '22',
            color: due.color,
            borderColor: due.color + '55',
          }}
        >
          {due.label}
        </span>
      </div>
    </div>
  );
}
