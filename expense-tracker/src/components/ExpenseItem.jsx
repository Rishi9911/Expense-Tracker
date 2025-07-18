import React from 'react';

const ExpenseItem = ({ item, onDelete }) => (
  <div className="expense-item">
    <span>{item.date} - {item.desc} ({item.category})</span>
    <span>₹{item.amount.toFixed(2)} <button onClick={onDelete}>❌</button></span>
  </div>
);

export default ExpenseItem;
