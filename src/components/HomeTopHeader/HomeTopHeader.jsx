import React from 'react'
import { useSelector } from 'react-redux'
import formatDate from '../../utils/DateUtils'

function HomeTopHeader() {
  const time = useSelector((state) => state.sensorData.time)
  return (
    <div className='flex flex-wrap justify-between items-center gap-2 lg:gap-0'>
      <span className='text-3xl font-medium'>Các thông số môi trường</span>
      <span className='text-2xl font-medium'>{formatDate(time)}</span>
    </div>
  )
}

export default HomeTopHeader
