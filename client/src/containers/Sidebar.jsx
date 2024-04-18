import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links } from '../dataList/sidebarLinks'

import { faDoorOpen, faGear } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <section className='w-[15rem] h-screen fixed left-0 bg-[#0C142C] flex flex-col justify-between px-5 py-8 text-[#58637F]'>
      <div className='flex flex-col gap-10'>
        <div className='flex items-center gap-2'>
          <div>
            <img
              src="../../loginavatar.webp"
              alt="Photo"
              className='w-12 h-12 rounded-full object-cover'
            />
          </div>
          <div className='text-[#B7BAC1] font-semibold'>
            <p className='text-xs'>Hey,</p>
            <p>Tachin Sendulkar</p>
          </div>
        </div>

        <nav>
          <ul className='flex flex-col gap-3 text-lg font-medium'>
            {links.map((link, index) => (
              <li
                key={index}
                className='group hover:bg-[#050812] px-3 py-2 rounded-full transition-full ease-in-out hover:border-opacity-80 cursor-pointer'
              >
                <Link to={link.path} className='flex items-center gap-4'>
                  <FontAwesomeIcon icon={link.icon} className='group-hover:text-white text-xl' />
                  <span className='group-hover:translate-x-2 transition-all'>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='flex flex-col gap-3 text-xl font-medium'>
        <Link
          to={""}
          className='flex items-center gap-4 group hover:bg-[#050812] px-3 py-2 rounded-full transition-full ease-in-out hover:border-opacity-80 cursor-pointer'
        >
          <FontAwesomeIcon icon={faGear} className='group-hover:text-white text-xl' />
          <span className='group-hover:translate-x-2 transition-all'>Settings</span>
        </Link>
        <Link
          to={""}
          className='flex items-center gap-4 group hover:bg-[#050812] px-3 py-2 rounded-full transition-full ease-in-out hover:border-opacity-80 cursor-pointer'
        >
          <FontAwesomeIcon icon={faDoorOpen} className='group-hover:text-white text-xl' />
          <span className='group-hover:translate-x-2 transition-all'>Logout</span>
        </Link>
      </div>
    </section>
  )
}

export default Sidebar