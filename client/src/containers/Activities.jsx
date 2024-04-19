import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Activities() {
  const expenses = [
    {
      "id": 1,
      "name": "Gas",
      "amount": 150.0,
      "status": "You Owe"
    },
    {
      "id": 2,
      "name": "Rent",
      "amount": 308.2,
      "status": "You Owe"
    },
    {
      "id": 3,
      "name": "Lunch",
      "amount": 10.0,
      "status": "You get back"
    },
    {
      "id": 4,
      "name": "Groceries",
      "amount": 50.0,
      "status": "You get back"
    },
    {
      "id": 5,
      "name": "Dinner",
      "amount": 20.0,
      "status": "You get back"
    },
    {
      "id": 6,
      "name": "Electricity",
      "amount": 200.5,
      "status": "You Owe"
    }
  ]


  return (
    <div className='w-full flex flex-col gap-4 p-5 text-gray-300 rounded-3xl shadow-xl bg-[#1C2949]'>
      <h2 className='text-2xl font-semibold'>Activities</h2>
      <div className='w-full flex flex-col gap-6 justify-center'>
        {expenses.map(expense => (
          <div key={expense.id} className='flex gap-7'>
            <div className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faPenFancy} className='h-6 w-6 p-2 bg-[#293B66] rounded-full shadow-lg ' />
            </div>
            <div className='w-full flex justify-between items-center'>
              <p className='text-lg font-semibold w-2/5'>{expense.name}</p>
              <p className={`${expense.status === 'You get back' ? "text-green-400" : "text-red-400"} font-thin w-2/5`}>{expense.status}</p>
              <p className={`${expense.status === 'You get back' ? "text-green-400" : "text-red-400"} text-xl w-1/5`}>₹{expense.amount}</p>
            </div>
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

export default Activities