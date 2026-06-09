import React, { useState } from 'react';
import { STATUS_COLORS } from '../data';

const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function CalendarTab({ orders, onEdit }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const byDay = {};
  orders.forEach((o) => {
    if (!o.dueDate) return;
    const [y, m, d] = o.dueDate.split('-').map(Number);
    if (y === year && m - 1 === month) {
      (byDay[d] = byDay[d] || []).push(o);
    }
  });

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
  };

  const cells = [...Array(firstDow).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  const isToday = (d) => d && year === now.getFullYear() && month === now.getMonth() && d === now.getDate();

  return (
    <div className="tab-content">
      <div className="calendar-nav">
        <button className="cal-nav-btn" onClick={prevMonth}>‹</button>
        <span className="cal-month-title">{MONTH_NAMES[month]} {year}</span>
        <button className="cal-nav-btn" onClick={nextMonth}>›</button>
      </div>

      <div className="calendar-grid">
        {DAY_NAMES.map((d) => (
          <div key={d} className="cal-day-name">{d}</div>
        ))}
        {cells.map((d, i) => (
          <div key={i} className={`cal-cell${isToday(d) ? ' today' : ''}${d && byDay[d] ? ' has-orders' : ''}`}>
            {d && (
              <>
                <span className="cal-day-num">{d}</span>
                {byDay[d] && (
                  <div className="cal-dots">
                    {byDay[d].slice(0, 4).map((o) => (
                      <span
                        key={o.id}
                        className="cal-dot"
                        style={{ background: STATUS_COLORS[o.status] }}
                        onClick={(e) => { e.stopPropagation(); onEdit(o); }}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="cal-orders-section">
        {Object.keys(byDay).length === 0 ? (
          <div className="empty-state">
            <p>No orders due in {MONTH_NAMES[month]}.</p>
          </div>
        ) : (
          Object.entries(byDay)
            .sort(([a], [b]) => Number(a) - Number(b))
            .flatMap(([day, dayOrders]) =>
              dayOrders.map((order) => (
                <div
                  key={order.id}
                  className="cal-order-row"
                  style={{ borderLeftColor: STATUS_COLORS[order.status] }}
                  onClick={() => onEdit(order)}
                >
                  <div className="cal-order-date">
                    {MONTH_NAMES[month].slice(0, 3)} {day}
                  </div>
                  <div className="cal-order-info">
                    <span className="cal-order-name">{order.item || 'Untitled'}</span>
                    <span className="cal-order-customer">{order.customer}</span>
                  </div>
                  <span className="cal-order-status" style={{ color: STATUS_COLORS[order.status] }}>
                    {order.status}
                  </span>
                </div>
              ))
            )
        )}
      </div>
    </div>
  );
}
