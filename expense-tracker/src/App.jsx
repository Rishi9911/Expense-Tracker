
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './assets/styles.css';
import Header from './components/Header.jsx';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import Summary from './components/Summary.jsx';
import SearchBar from './components/SearchBar.jsx';
import SortOptions from './components/SortOptions.jsx';
import ChartView from './components/ChartView.jsx';
import AuthPage from './components/AuthPage.jsx';
import ExportButton from './components/ExportButton.jsx';

function Home({ expenses, setExpenses, searchQuery, setSearchQuery, sortOption, setSortOption }) {
  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  const deleteExpense = (idx) => {
    setExpenses(prev => prev.filter((_, i) => i !== idx));
  };

  const filteredExpenses = expenses
    .filter(item => item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'amount') return b.amount - a.amount;
      if (sortOption === 'date') return new Date(b.date) - new Date(a.date);
      if (sortOption === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

  return (
    <div className="container fade-in">
      <div className="hero-banner">
        <h2>Track Your Expenses Easily 📊</h2>
        <p>Simple and fast way to stay on top of your spending habits.</p>
      </div>
      

      <Header />
      <ExpenseForm onAdd={addExpense} />
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      <SortOptions sortOption={sortOption} onChange={setSortOption} />
      <ExpenseList items={filteredExpenses} onDelete={deleteExpense} />
      <Summary items={filteredExpenses} />
      <ChartView items={filteredExpenses} />
      <ExportButton data={filteredExpenses} />

      <footer className="footer">
        <p>Made with ❤️ by Rishi | © 2025 Expense Tracker</p>
      </footer>
    </div>
  );
}

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <Router>
      <nav className={`navbar shadow slide-down`}>
        <h1><span role="img" aria-label="money">💰</span> Expense Tracker</h1>
        <div className="menu">
          <Link to="/"><button className="nav-btn">🏠 Home</button></Link>
          <Link to="/auth"><button className="nav-btn">🔐 Login</button></Link>
          <button className="nav-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home
            expenses={expenses}
            setExpenses={setExpenses}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />}
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
