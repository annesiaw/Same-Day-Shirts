import React, { useState } from 'react';
import { STATUSES, TASKS } from '../data';

export default function OrderForm({ order: init, mode, onSave, onDelete, onClose }) {
  const [order, setOrder] = useState(init);

  const set = (field, value) => setOrder((prev) => ({ ...prev, [field]: value }));
  const toggleTask = (task) =>
    setOrder((prev) => ({ ...prev, tasks: { ...prev.tasks, [task]: !prev.tasks[task] } }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...order, price: parseFloat(order.price) || 0 });
  };

  const completedCount = TASKS.filter((t) => order.tasks?.[t]).length;

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2 className="form-title">{mode === 'new' ? 'New Order' : 'Edit Order'}</h2>
        <button type="button" className="close-btn" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="form-scroll">
        <div className="form-group">
          <label htmlFor="f-item">Item / Description</label>
          <input
            id="f-item"
            type="text"
            value={order.item}
            onChange={(e) => set('item', e.target.value)}
            placeholder="What are you making?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="f-customer">Customer Name</label>
          <input
            id="f-customer"
            type="text"
            value={order.customer}
            onChange={(e) => set('customer', e.target.value)}
            placeholder="Customer name"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="f-occasion">Occasion</label>
            <input
              id="f-occasion"
              type="text"
              value={order.occasion}
              onChange={(e) => set('occasion', e.target.value)}
              placeholder="e.g. Birthday"
            />
          </div>
          <div className="form-group">
            <label htmlFor="f-price">Price ($)</label>
            <input
              id="f-price"
              type="number"
              value={order.price}
              onChange={(e) => set('price', e.target.value)}
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="f-status">Status</label>
            <select
              id="f-status"
              value={order.status}
              onChange={(e) => set('status', e.target.value)}
            >
              {STATUSES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="f-due">Due Date</label>
            <input
              id="f-due"
              type="date"
              value={order.dueDate}
              onChange={(e) => set('dueDate', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="f-notes">Notes</label>
          <textarea
            id="f-notes"
            value={order.notes}
            onChange={(e) => set('notes', e.target.value)}
            placeholder="Additional notes..."
            rows={3}
          />
        </div>

        <div className="form-group">
          <label>Tasks <span className="task-counter">({completedCount}/{TASKS.length})</span></label>
          <div className="task-list">
            {TASKS.map((task) => (
              <label key={task} className="task-item">
                <input
                  type="checkbox"
                  checked={order.tasks?.[task] || false}
                  onChange={() => toggleTask(task)}
                />
                <span className={order.tasks?.[task] ? 'task-text done' : 'task-text'}>{task}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="form-actions">
        {mode === 'edit' && (
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => onDelete(order.id)}
          >
            Delete
          </button>
        )}
        <button type="submit" className="btn btn-save">
          {mode === 'new' ? 'Add Order' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}
