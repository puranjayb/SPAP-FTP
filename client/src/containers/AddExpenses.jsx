import React, { useState } from 'react'

function AddExpenses() {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const saveExpense = () => {
    const data = {
      amount,
      description,
      category
    }

    if (!data.amount || !data.description || !data.category) {
      alert('All fields are required')
      return
    } else {
      if (category === 'youOwe') {
        fetch('http://localhost:3000/crud/addExpense', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        })
          .then(() => {
            setAmount('')
            setDescription('')
            setCategory('')
          })
          .catch((err) => console.error(err))
      } else if (category === 'youGetBack') {
        fetch('http://localhost:3000/crud/addIncome', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        })
          .then(() => {
            setAmount('')
            setDescription('')
            setCategory('')
          })
          .catch((err) => console.error(err))
      }
    }
  }

  return (
    <div className='w-[70%] flex flex-col gap-6 p-5 text-gray-300 rounded-3xl shadow-xl bg-[#1C2949]'>
      <h1 className='text-2xl font-semibold'>Add Expenses</h1>
      <div className='flex justify-between'>
        <div>
          <img
            src="../../loginavatar.webp"
            alt="Avatar"
            className='w-24 rounded-full'
          />
        </div>
        <div className='w-3/5 flex flex-col gap-3'>
          <input
            type="number"
            placeholder='Amount'
            className='w-full h-10 bg-transparent border-b-2 border-gray-300 focus:outline-none transition ease-in-out text-lg font-semibold tracking-wide'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder='Description'
            className='w-full h-10 bg-transparent border-b-2 border-gray-300 focus:outline-none transition ease-in-out text-lg font-semibold tracking-wide'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type='button'
            className='border-2 mt-4 border-gray-300 bg-transparent text-gray-300 font-semibold tracking-wide py-1 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition ease-in-out w-1/5'
            onClick={saveExpense}
          >
            Save
          </button>
        </div>
        <div>
          <select
            className='bg-[#293B66] rounded-lg px-2 py-1 cursor-pointer outline-none shadow-lg'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="category">Category</option>
            <option value="youOwe">You owe</option>
            <option value="youGetBack">You get back</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default AddExpenses