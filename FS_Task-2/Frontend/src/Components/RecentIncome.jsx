import React, { useEffect, useState } from "react";
import axios from 'axios'

const RecentIncome = () => {
  const [incomes, setIncomes] = useState([]);

  const getExpenses = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/transaction/getIncome",
        { withCredentials: true }
      );
      console.log(data.expenses);
      setIncomes(data.incomes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getExpenses()
  }, [])
  return (
    <div className="bg-white ml-10 w-96 h-80 p-6 rounded-lg border-2 text-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Incomes</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Date</th>
            <th className="pb-2">Category</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((expense, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{expense.date}</td>
              <td className="py-2">{expense.category}</td>
              <td className="py-2">{`₹${expense.amount.toFixed(2)}`}</td>
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

export default RecentIncome;
