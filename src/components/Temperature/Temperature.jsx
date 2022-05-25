import React from 'react'
import { FaTemperatureHigh } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Temperature() {
  const tempValue = useSelector((state) => state.sensorData.tempValue)
  return (
    <div className='w-full lg:w-halfFull rounded-lg bg-yellow-200 text-yellow-600 flex flex-col justify-center items-center py-4 shadow-lg shadow-yellow-200/40'>
      <div className='flex items-center justify-center gap-4'>
        <FaTemperatureHigh size='2rem' />
        <span className='text-3xl font-medium tracking-wider'>Nhiệt Độ</span>
      </div>
      <p className='text-4xl'>
        <span className='font-bold'>{`${tempValue}°`}</span>
        <span>C</span>
      </p>
    </div>
  )
}

export default Temperature
