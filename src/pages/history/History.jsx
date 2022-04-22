import React from 'react'
import { Outlet } from 'react-router-dom'
import SubNavigationBar from '../../components/sub_navigation_bar/SubNavigationBar'

function History() {
  return (
    <div className='flex-grow bg-white rounded-md border'>
      <SubNavigationBar />
      <Outlet />
    </div>
  )
}

export default History
