import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState('')

  return (
    <section className='flex justify-between text-gray-300'>
      <div className='w-[85%] flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>Dashboard</h1>

        <div className='relative h-full flex items-center'>
          <input
            type="text"
            className='h-10 w-96 px-5 py-1 bg-[#1E2A47] rounded-full shadow-xl border border-[#1E2A47] focus:outline-none focus:border-[#1E2A47] transition-all ease-in-out duration-300'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute right-4 cursor-pointer'
          />
        </div>
      </div>

      <div className='w-[10%] flex items-center justify-center gap-10'>
        <Link to={"#"} className='relative'>
          <FontAwesomeIcon
            icon={faBell}
            className='text-2xl'
          />
          <span className='h-2 w-2 bg-red-500 absolute -top-1 -right-1 rounded-full'></span>
        </Link>
        <Link to={"#"} className='relative'>
          <FontAwesomeIcon
            icon={faMessage}
            className='text-2xl'
          />
          <span className='h-2 w-2 bg-red-500 absolute -top-1 -right-1 rounded-full'></span>
        </Link>
      </div>
    </section>
  )
}

export default Navbar