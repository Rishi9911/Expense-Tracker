import React from 'react';

const ExportButton = ({ data }) => {
  const exportToCSV = () => {
    const csvRows = [
      ['Description', 'Amount', 'Category', 'Date'],
      ...data.map(item => [item.desc, item.amount, item.category, item.date])
    ];

    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'expenses.csv';
    a.click();
  };

  return (
    <button className="export-btn" onClick={exportToCSV}>
      📤 Export CSV
    </button>
  );
};

export default ExportButton;
