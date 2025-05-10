import React from 'react';
<<<<<<< HEAD
import { Pie } from 'react-chartjs-2';
=======
import { Pie } from 'react-chartjs-2';;
>>>>>>> origin/main

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
