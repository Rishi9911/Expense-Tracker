import React from 'react';

const SortOptions = ({ sortOption, onChange }) => (
  <select className="sort-options" value={sortOption} onChange={(e) => onChange(e.target.value)}>
    <option value="">Sort By</option>
    <option value="amount">Amount</option>
    <option value="date">Date</option>
    <option value="category">Category</option>
  </select>
);

export default SortOptions;