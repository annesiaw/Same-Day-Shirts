import React from 'react';

export default function Header({ onAdd }) {
  return (
    <header className="header">
      <span className="header-title">Order Studio</span>
      <button className="add-btn" onClick={onAdd} aria-label="Add new order">+</button>
    </header>
  );
}
