import React, { useContext } from 'react'
import { Context } from '../main'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Header = () => {
  const { auth, logout } = useContext(Context)
  const navigateTo = useNavigate()

  const logoutHandler = async() => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/user/logout', {withCredentials: true})
      if(data.success){
        logout()
        toast.success(data.message)
        navigateTo('/signin')
      }
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div className='flex items-center justify-around p-7 sticky'>
      <div className='flex items-center justify-center gap-4'>
        <p className='font-bold text-xl'>Expense Tracker</p>
        {
          auth.isAuthenticated ? (
            <p className='text-sm text-gray-500'>Welcome, {auth.username}!</p>
          ) : null
        }
      </div>
      <div className='flex items-center justify-center gap-5'>
        {
          !auth.isAuthenticated ? (
            <>
            <Link className='bg-white rounded-lg px-3 font-normal border-opacity-20 py-1 border-2 border-black hover:bg-gray-100' to={'/signin'}>Login</Link>
            <Link className='bg-white rounded-lg px-3 font-normal border-opacity-20 py-1 border-2 border-black hover:bg-gray-100' to={'/signup'}>Register</Link>
            </>
          ) : (
            <>
              <button className='bg-white rounded-lg px-3 font-normal border-opacity-20 py-1 border-2 border-black hover:bg-gray-100'>Profile</button>
              <button className='bg-black rounded-lg px-3 font-normal py-1 text-white' onClick={logoutHandler}>Logout</button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Header