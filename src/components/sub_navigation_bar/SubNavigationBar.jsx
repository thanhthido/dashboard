import React from 'react'
import { NavLink } from 'react-router-dom'

function SubNavigationBar() {
  return (
    <div className='flex'>
      <NavLink to='/history/temp' className='history-sub-nav-item'>
        <div className='flex items-center px-3 py-2 space-x-4'>
          <div className='w-5 h-5 bg-red-500 rounded-md'></div>
          <span className='w-20'>Temperature</span>
        </div>
      </NavLink>
      <NavLink to='/history/humidity' className='history-sub-nav-item'>
        <div className='flex items-center px-3 py-2 space-x-4'>
          <div className='w-5 h-5 bg-red-500 rounded-md'></div>
          <span className='w-20'>Humidity</span>
        </div>
      </NavLink>
    </div>
  )
}

export default SubNavigationBar
