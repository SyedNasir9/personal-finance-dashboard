import React, { useState } from 'react';
import './App.css';
import ExpenseChart from './components/ExpenseChart';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [budget, setBudget] = useState(1000);
  const [expenses, setExpenses] = useState([]);
  
  // Add a new expense to the list
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Calculate the total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="App">
      <header>
        <h1>Personal Finance Dashboard</h1>
      </header>

      <main>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
        <ExpenseChart expenses={totalExpenses} budget={budget} />
      </main>

      <footer>
        <p>Remaining Budget: ${budget - totalExpenses}</p>
      </footer>
    </div>
  );
}

export default App;
