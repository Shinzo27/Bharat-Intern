import React from 'react'

const HistoryData = () => {
    const expenses = [
        { date: '2023-06-01', category: 'Groceries', amount: 50.25, description: 'Weekly grocery shopping' },
        { date: '2023-06-03', category: 'Utilities', amount: 125.00, description: 'Electricity bill' },
        { date: '2023-06-05', category: 'Transportation', amount: 30.75, description: 'Gas for commute' },
        { date: '2023-06-10', category: 'Entertainment', amount: 75.00, description: 'Movie tickets' },
        { date: '2023-06-15', category: 'Groceries', amount: 65.50, description: 'Grocery trip' },
      ];
    
      const income = [
        { date: '2023-06-01', category: 'Salary', amount: 5000.00, description: 'Monthly salary' },
        { date: '2023-06-15', category: 'Freelance', amount: 1500.00, description: 'Freelance work' },
      ];
    
      return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 px-24">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Expenses and Income History</h2>
          </div>
          
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2">Expenses</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Category</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Amount</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">{expense.date}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">{expense.category}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">${expense.amount.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">{expense.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    
          <div>
            <h3 className="text-md font-semibold mb-2">Income</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Category</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Amount</th>
                    <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {income.map((inc, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">{inc.date}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">{inc.category}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">${inc.amount.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">{inc.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default HistoryData