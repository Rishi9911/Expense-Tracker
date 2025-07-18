import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#e91e63', '#9c27b0', '#4caf50'];

const ChartView = ({ items }) => {
  const data = Object.values(items.reduce((acc, { category, amount }) => {
    acc[category] = acc[category] || { name: category, value: 0 };
    acc[category].value += amount;
    return acc;
  }, {}));

  return (
    <div className="chart-container">
      <h3>📊 Expense Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartView;
