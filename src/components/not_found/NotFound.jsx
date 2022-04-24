import React from 'react'
import { RiEmotionSadLine } from 'react-icons/ri'

function NotFound() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col gap-6'>
      <RiEmotionSadLine size='150px' />
      <h1 className='text-4xl'>Trang không tồn tại</h1>
    </div>
  )
}

export default NotFound
