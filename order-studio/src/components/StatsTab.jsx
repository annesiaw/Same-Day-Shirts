import React from 'react';
import { STATUSES, STATUS_COLORS } from '../data';

export default function StatsTab({ orders }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const active = orders.filter((o) => o.status !== 'Delivered').length;
  const revenue = orders.reduce((sum, o) => sum + (parseFloat(o.price) || 0), 0);
  const dueSoon = orders.filter((o) => {
    if (o.status === 'Delivered' || !o.dueDate) return false;
    const diff = Math.floor((new Date(o.dueDate + 'T00:00:00') - today) / 86400000);
    return diff >= 0 && diff <= 3;
  }).length;
  const overdue = orders.filter((o) => {
    if (o.status === 'Delivered' || !o.dueDate) return false;
    return new Date(o.dueDate + 'T00:00:00') < today;
  }).length;

  const tiles = [
    { label: 'Active Orders', value: active, color: '#6a9fd8' },
    { label: 'Total Revenue', value: `$${revenue.toFixed(2)}`, color: '#52b788' },
    { label: 'Due Soon', value: dueSoon, color: '#e8c547' },
    { label: 'Overdue', value: overdue, color: '#e63946' },
  ];

  const statusCounts = STATUSES.map((s) => ({
    status: s,
    count: orders.filter((o) => o.status === s).length,
    color: STATUS_COLORS[s],
  }));
  const maxCount = Math.max(...statusCounts.map((s) => s.count), 1);

  return (
    <div className="tab-content">
      <div className="stat-grid">
        {tiles.map((t) => (
          <div key={t.label} className="stat-tile" style={{ borderTopColor: t.color }}>
            <div className="stat-value" style={{ color: t.color }}>{t.value}</div>
            <div className="stat-label">{t.label}</div>
          </div>
        ))}
      </div>

      <div className="chart-card">
        <h3 className="chart-title">Orders by Status</h3>
        <div className="bar-chart">
          {statusCounts.map(({ status, count, color }) => (
            <div key={status} className="bar-row">
              <span className="bar-label">{status}</span>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: `${(count / maxCount) * 100}%`, background: color }}
                />
              </div>
              <span className="bar-count">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
