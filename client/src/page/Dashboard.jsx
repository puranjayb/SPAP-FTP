import React from 'react'
import Navbar from '../containers/Navbar'
import OverviewCard from '../containers/OverviewCard'
import ExpenseStatistics from '../containers/ExpenseStatistics'

function Dashboard() {
  return (
    <section className='bg-[#182341] py-5 px-6 flex flex-col justify-between'>
      <div>
        <Navbar />
      </div>
      <div className='flex justify-between pt-6'>
        <div className='flex flex-col gap-8'>
          <OverviewCard />
          <ExpenseStatistics />
        </div>
      </div>
    </section>
  )
}

export default Dashboard