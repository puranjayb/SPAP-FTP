import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

function TotalExpenses() {
  const [expenseList, setExpenseList] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/crud/getAll', {
      credentials: 'include'
    })
      .then(response => {
        response.json().then(data => {
          setExpenseList(data)
        })
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/crud/getUsers', {
      credentials: 'include'
    }
    ).then(response => {
      response.json().then(data => {
        setUsers(data)
        console.log(users)
      })
    })
  }, [])

  return (
    <section className='relative w-full flex flex-col gap-3 p-5'>
      <h1 className='text-4xl font-semibold text-gray-200 text-center'>Total Expenses</h1>
      <div className='w-full flex gap-5 mt-5'>
        <div className='w-full flex flex-col gap-5'>
          {expenseList.map((expense, index) => (
            <div key={index} className='flex justify-between items-center px-5 py-2 rounded-xl bg-[#1C2949] shadow-xl'>
              <p className='flex justify-center items-center'>
                {
                  expense.category === 'youOwe' ? (
                    <FaArrowAltCircleUp className={`w-10 h-10 text-white ${expense.category === 'youOwe' ? "text-red-500" : "text-green-500"}`} />
                  ) : (
                    <FaArrowAltCircleDown className={`w-10 h-10 text-white ${expense.category === 'youOwe' ? "text-red-500" : "text-green-500"}`} />
                  )}
              </p>

              <div className={`flex gap-5 font-medium text-lg ${expense.category === 'youOwe' ? "text-red-500" : "text-green-500"}`}>
                <p>{expense.description}</p>
                <p>{expense.category === "youOwe" ? "You  owe" : "You get back"}</p>
              </div>

              <div className={`${expense.category === 'youOwe' ? "text-red-500" : "text-green-500"}`}>
                <p className='text-xl font-semibold'>{expense.amount}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-[30%] flex flex-col px-10 py-2 rounded-3xl bg-[#1C2949] shadow-xl'>
          <h2 className='text-center text-2xl font-semibold text-white tracking-wide'>Friends</h2>
          <div className='flex flex-col text-lg mt-3 pb-4'>
            {users.map((user, index) => (
              <div key={index} className='flex items-center text-gray-300'>
                <p className='bg-[#293b6670] w-full rounded-xl p-2 shadow-lg mt-2 border border-opacity-5'>{index + 1}. {user.username}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className='absolute top-2 right-6 text-center text-gray-300 mt-5 bg-[#1C2949] p-3 rounded-lg shadow-xl text-xl'>
          Total Expense: {expenseList.reduce((acc, curr) => acc + curr.amount, 0)}
        </p>
      </div>
    </section>
  )
}

export default TotalExpenses