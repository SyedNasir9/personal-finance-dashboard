import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpenseChart = ({ expenses, budget }) => {
  const data = {
    labels: ['Expenses', 'Remaining Budget'],
    datasets: [
      {
        data: [expenses, budget - expenses],
        backgroundColor: ['#EF4444', '#10B981'],
      },
    ],
  };

  const options = {
    responsive: true, 
    plugins: {
      legend: {
        position: 'top', 
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Expense Chart</h3>
      <Pie data={data} options={options} width={200} height={200} /> {/* Adjust width and height */}
    </div>
  );
};

export default ExpenseChart;
