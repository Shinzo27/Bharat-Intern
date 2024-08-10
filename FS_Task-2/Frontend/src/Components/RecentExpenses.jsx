import React from "react";

const RecentExpenses = () => {
  const expenses = [
    { date: "2023-06-01", category: "Groceries", amount: 50.25 },
    { date: "2023-06-03", category: "Utilities", amount: 125.0 },
    { date: "2023-06-05", category: "Transportation", amount: 30.75 },
  ];

  return (
    <div className="bg-white ml-10 w-96 h-80 p-6 rounded-lg border-2 text-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Expenses</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Date</th>
            <th className="pb-2">Category</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{expense.date}</td>
              <td className="py-2">{expense.category}</td>
              <td className="py-2">{`$${expense.amount.toFixed(2)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#" className="text-blue-500 mt-4 block">
        View all expenses
      </a>
    </div>
  );
};

export default RecentExpenses;
