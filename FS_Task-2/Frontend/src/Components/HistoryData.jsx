import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HistoryData = () => {
  const [expenses, setExpenses] = useState([])
  const [incomes, setIncomes] = useState([])

  const getExpenses = async() => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/transaction/getExpenses', {withCredentials: true})
      console.log(data.expenses);
      setExpenses(data.expenses)
    } catch (error) {
      console.log(error);
    }
  }
  const getIncome = async() => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/transaction/getIncome', {withCredentials: true})
      setIncomes(data.incomes)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getExpenses()
    getIncome()
  }, [])

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
                      <td className="py-2 px-4 border-b text-sm text-gray-700">₹{expense.amount.toFixed(2)}</td>
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
                  {incomes.map((inc, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">{inc.date}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">{inc.category}</td>
                      <td className="py-2 px-4 border-b text-sm text-gray-700">₹{inc.amount.toFixed(2)}</td>
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