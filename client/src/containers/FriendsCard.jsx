import React from 'react'
import { Link } from 'react-router-dom'

function FriendsCard() {
  const friendsList = [
    {
      name: 'Harikesh Ranjan',
      amount: 50,
      status: 'You owe',
    },
    {
      name: 'Puranjay',
      amount: 207.8,
      status: 'You get back',
    },
    {
      name: 'Akash',
      amount: 100.5,
      status: 'You owe',
    },
  ]

  return (
    <div className='w-[30rem] flex flex-col gap-6 py-5 px-8 text-gray-300 rounded-3xl shadow-xl bg-[#1C2949]'>
      <h1 className='text-2xl font-semibold'>Friends</h1>

      <div className='flex flex-col gap-5'>
        {friendsList.map((friend, index) => (
          <div key={index} className='flex justify-between items-center pb-2 border-b-[.01rem]'>
            <p className='w-[30%] font-medium text-[17px]'>{friend.name}</p>
            <span className={`w-[55%] flex items-center gap-1 ${friend.status === 'You owe' ? "text-red-400" : "text-green-400"}`}>
              <p>{friend.status}</p>
              <p>₹{friend.amount}</p>
            </span>
          </div>
        ))}
      </div>

      <div className='text-[#535F7D] font-medium text-right pr-5'>
        <Link to='/total-expense' className='underline hover:text-gray-300'>
          View All
        </Link>
      </div>
    </div>
  )
}

export default FriendsCard