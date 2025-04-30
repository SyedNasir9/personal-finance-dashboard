import React, { useState } from 'react';
import './ExpenseForm.css'; 

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addExpense({ name, amount: parseFloat(amount) });
      setName('');
      setAmount('');
    }
  };

  return (
    <div className="expense-form-container">
      <h3 className="form-heading">Add Expense</h3>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
