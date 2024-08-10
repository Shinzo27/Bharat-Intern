import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TotalIncomeCard = () => {
  const [income, setIncome ] = useState("")
  const getTotalIncome = async() => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/transaction/getTotalIncome', {withCredentials: true})
      setIncome(data.totalIncome)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getTotalIncome()
  }, [])

  return (
    <div className="bg-white ml-10 w-80 h-80 p-6 rounded-lg border-2">
      <h2 className="text-lg font-semibold mb-2">Total Income</h2>
      <p className="text-2xl font-bold">₹ {income}</p>
    </div>
  )
}

export default TotalIncomeCard