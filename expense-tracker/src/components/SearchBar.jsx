import React from 'react';

const SearchBar = ({ query, onChange }) => (
  <input
    type="text"
    className="search-bar"
    placeholder="Search by description..."
    value={query}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;