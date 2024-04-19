import React from 'react'
import Navbar from '../containers/Navbar'
import OverviewCard from '../containers/OverviewCard'
import ExpenseStatistics from '../containers/ExpenseStatistics'
import Activities from '../containers/Activities'

function Dashboard() {
  return (
    <section className='bg-[#182341] py-5 px-6 flex flex-col justify-between'>
      <div>
        <Navbar />
      </div>
      <div className='flex justify-between pt-6 W-[45%]'>
        <div className='flex flex-col gap-8'>
          <OverviewCard />
          <ExpenseStatistics />
        </div>
        <div className='w-[45%]'>
          <Activities />
        </div>
      </div>
    </section>
  )
}

export default Dashboard