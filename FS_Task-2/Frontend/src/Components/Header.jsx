import React from 'react'

const Header = () => {
  return (
    // <div className="flex justify-between items-center">
    //   <h1 className="text-xl font-bold">Expense Tracker</h1>
    //   <div className="">
    //     <span>Welcome, John Doe!</span>
    //     <button className="bg-gray-800 text-white px-4 py-2 rounded">Profile</button>
    //     <button className="bg-black text-white px-4 py-2 rounded">Logout</button>
    //   </div>
    // </div>
    <div className='flex items-center justify-around p-7 sticky'>
      <div className='flex items-center justify-center gap-4'>
        <p className='font-bold text-xl'>Expense Tracker</p>
        <p className='text-sm text-gray-500'>Welcome, John Doe!</p>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <button className='bg-white rounded-lg px-3 font-normal border-opacity-20 py-1 border-2 border-black hover:bg-gray-100'>Login</button>
        <button className='bg-white rounded-lg px-3 font-normal border-opacity-20 py-1 border-2 border-black hover:bg-gray-100'>Register</button>
        <button className='bg-white rounded-lg px-3 font-normal border-opacity-20 py-1 border-2 border-black hover:bg-gray-100'>Profile</button>
        <button className='bg-black rounded-lg px-3 font-normal py-1 text-white'>Logout</button>
      </div>
    </div>
  )
}

export default Header