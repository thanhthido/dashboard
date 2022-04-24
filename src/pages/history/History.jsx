import React from 'react'
import { Outlet } from 'react-router-dom'
import SubNavigationBar from '../../components/sub_navigation_bar/SubNavigationBar'
import { motion } from 'framer-motion'
import TempHistory from '../../components/temp_history/TempHistory'

function History() {
  return (
    <motion.div
      className='sm:px-6 w-full min-h-screen mt-4 mx-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {/* <SubNavigationBar /> */}
      <div className='mr-4'>
        <h1 class='text-3xl font-bold leading-normal text-gray-800'>Lịch sử</h1>

        <TempHistory />
      </div>
      <Outlet />
    </motion.div>
  )
}

export default History
