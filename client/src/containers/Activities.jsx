import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Activities() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/crud/getAll', {
      credentials: 'include'
    })
      .then(response => {
        response.json().then(data => {
          setExpenses(data)
        })
      })
  }, [])

  return (
    <div className='w-full max-h-[30rem] overflow-scroll flex flex-col gap-4 p-5 text-gray-300 rounded-3xl shadow-xl bg-[#1C2949]'>
      <h2 className='text-2xl font-semibold'>Activities</h2>
      <div className='w-full flex flex-col gap-6 justify-center'>
        {expenses.map(expense => (
          <div key={expense.id} className='flex gap-7'>
            <div className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faPenFancy} className='h-6 w-6 p-2 bg-[#293B66] rounded-full shadow-lg ' />
            </div>
            <div className='w-full flex justify-between items-center'>
              <p className='text-lg font-semibold w-2/5'>{expense.description}</p>
              <p className={`${expense.category === 'youGetBack' ? "text-green-400" : "text-red-400"} font-thin w-2/5`}>{expense.category === 'youGetBack' ? "You get back" : "You owe"}</p>
              <p className={`${expense.category === 'You get back' ? "text-green-400" : "text-red-400"} text-xl w-1/5`}>₹{expense.amount}</p>
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