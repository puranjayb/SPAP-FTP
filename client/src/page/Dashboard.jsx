import React from 'react'
import Navbar from '../containers/Navbar'
import OverviewCard from '../containers/OverviewCard'

function Dashboard() {
  return (
    <section className='bg-[#182341] py-5 px-6 flex flex-col justify-between'>
      <div>
        <Navbar />
      </div>
      <div className='flex justify-between pt-6'>
        <div className='flex flex-col'>
          <OverviewCard />
        </div>
      </div>
    </section>
  )
}

export default Dashboard