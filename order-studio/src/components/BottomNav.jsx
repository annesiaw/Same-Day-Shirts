import React from 'react';

const TABS = [
  { id: 'orders', label: 'Orders', icon: '📋' },
  { id: 'calendar', label: 'Calendar', icon: '📅' },
  { id: 'stats', label: 'Stats', icon: '📊' },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="bottom-nav">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`nav-btn${active === tab.id ? ' active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
