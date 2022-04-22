import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationBar(props) {
  return (
    <nav className='flex flex-col bg-white'>
      <NavLink id='items-nav-first' to='/'>
        <div className='flex items-center px-4 py-2 space-x-4'>
          <div className='w-5 h-5 bg-red-500 rounded-md'></div>
          <span className='w-20'>Home</span>
        </div>
      </NavLink>
      <NavLink id='items-nav-last' to='/history'>
        <div className='flex items-center px-4 py-2 space-x-4'>
          <div className='w-5 h-5 bg-red-500 rounded-md'></div>
          <span className='w-20'>History</span>
        </div>
      </NavLink>
    </nav>
  )
}

export default NavigationBar
