import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FriendsCard() {
  const [friendsList, setFriendsList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/crud/getUsers', {
      credentials: 'include'
    }
    ).then(response => {
      response.json().then(data => {
        setFriendsList(data)
      })
    })
  }, [])

  return (
    <div className='w-[20rem] flex flex-col gap-6 py-5 px-8 text-gray-300 rounded-3xl shadow-xl bg-[#1C2949]'>
      <h1 className='text-2xl font-semibold'>Friends</h1>

      <div className='flex flex-col gap-5'>
        {friendsList.map((friend, index) => (
          <div key={index} className='flex justify-between items-center pb-2 border-b-[.01rem]'>
            <p className=' font-medium text-[17px]'>{friend.username}</p>
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

export default FriendsCard