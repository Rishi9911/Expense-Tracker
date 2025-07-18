import React, { useState } from 'react';
import { categories } from '../utils/categories';

const ExpenseForm = ({ onAdd }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount || !category || !date) return;
    onAdd({ desc, amount: parseFloat(amount), category, date });
    setDesc('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" />
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
      </select>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
