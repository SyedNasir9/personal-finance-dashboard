import React from 'react';
import './ExpenseList.css'; 

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list-container">
      <h3 className="expense-list-heading">Expense List</h3>
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            {expense.name}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
