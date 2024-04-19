import React from 'react'
import Navbar from '../containers/Navbar'

function Dashboard() {
  return (
    <section className='bg-[#182341] py-5 px-6 flex flex-col justify-between'>
      <div>
        <Navbar />
      </div>
    </section>
  )
}

export default Dashboard