import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaHistory } from 'react-icons/fa'

function NavigationBar() {
  return (
    <nav className='mt-4 px-4 flex flex-col space-y-2'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-100 rounded-lg font-bold transition duration-500'
            : 'bg-white rounded-none font-normal transition duration-500'
        }>
        <div className='flex justify-start items-center px-4 py-3 space-x-3'>
          <FaHome size='1.2rem' />
          <span className='text-lg md:w-44'>Trang chính</span>
        </div>
      </NavLink>
      <div className='w-full bg-gray-100 h-1 rounded-lg'></div>
      <NavLink
        to='/history'
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-100 rounded-lg font-bold transition duration-500'
            : 'bg-white rounded-none font-normal transition duration-500'
        }>
        <div className='flex items-center px-4 py-3 space-x-3'>
          <FaHistory size='1.2rem' />
          <span className='text-lg md:w-44'>Lịch sử</span>
        </div>
      </NavLink>
    </nav>
  )
}

export default NavigationBar
