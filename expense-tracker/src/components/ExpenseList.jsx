import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ items, onDelete }) => {
  if (items.length === 0) return <p>No expenses found.</p>;

  return (
    <>
      {items.map((item, idx) => (
        <ExpenseItem key={idx} item={item} onDelete={() => onDelete(idx)} />
      ))}
    </>
  );
};

export default ExpenseList;
