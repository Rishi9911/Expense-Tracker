import React from 'react';

const Summary = ({ items }) => {
  const total = items.reduce((acc, curr) => acc + curr.amount, 0);
  const categoryTotals = {};
  items.forEach(({ category, amount }) => {
    categoryTotals[category] = (categoryTotals[category] || 0) + amount;
  });

  return (
    <div className="summary">
      <h4>Total Spent: ₹{total.toFixed(2)}</h4>
      <ul>
        {Object.entries(categoryTotals).map(([cat, amt], idx) => (
          <li key={idx}>{cat}: ₹{amt.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
