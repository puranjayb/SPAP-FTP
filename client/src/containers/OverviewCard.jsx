import React from 'react'

function OverviewCard() {
  const moneyData = [
    {
      title: 'Total Spend',
      amount: 852.8
    },
    {
      title: 'You owe',
      amount: 852.8
    },
    {
      title: 'You get back',
      amount: 852.8
    },
    {
      title: 'Settled up',
      amount: 852.8
    }
  ]

  return (
    <div className='flex flex-col gap-4 p-5 text-gray-300 rounded-3xl shadow-xl bg-[#1C2949]'>
      <p className='text-2xl text-left font-semibold'>Overview</p>

      <div className='flex justify-between gap-16'>
        {moneyData.map((data, index) => (
          <div key={index} className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl'>₹{data.amount}</h2>
            <p className='text-xs font-semibold text-gray-500 mt-1'>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OverviewCard