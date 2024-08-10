import React, { useContext } from 'react'
import TotalIncomeCard from '../Components/TotalIncomeCard'
import RecentExpenses from '../Components/RecentExpenses'
import RecentIncome from '../Components/RecentIncome'
import AddExpenses from '../Components/AddExpenses'
import AddIncome from '../Components/AddIncome'
import HistoryData from '../Components/HistoryData'
import { Context } from '../main'
import { Navigate } from 'react-router-dom'

const Hero = () => {
  const { auth } = useContext(Context)

  if(!auth.isAuthenticated) return <Navigate to={'/signin'}/> 
  
  return (
    <div className='flex items-center justify-around flex-col gap-8 flex-wrap'>
      <div className='flex items-center justify-center'>
        <TotalIncomeCard/>
        <RecentExpenses/>
        <RecentIncome/>
      </div>
      <div className='flex items-center justify-around gap-8'>
        <AddExpenses/>
        <AddIncome/>
      </div>
      <div>
        <HistoryData/>
      </div>
    </div>
  )
}

export default Hero