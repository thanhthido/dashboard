import React from 'react'
import { AiOutlineCloud } from 'react-icons/ai'
import { useSelector } from 'react-redux'

function NO2() {
  const no2Value = useSelector((state) => state.sensorData.no2Value)
  return (
    <div className='w-full lg:flex-1 rounded-lg bg-orange-200 text-orange-600 flex flex-col justify-center items-center py-4 shadow-lg shadow-orange-200/20'>
      <div className='flex items-center justify-center gap-4 text-center'>
        <AiOutlineCloud size='3rem' />
        <span className='text-3xl font-medium tracking-wider'>
          Nồng độ khí NO<sub>2</sub>
        </span>
      </div>
      <p className='text-4xl'>
        <span className='font-bold'>{`${no2Value} `}</span>
        <span className='text-3xl'>
          mg/m<sup>3</sup>
        </span>
      </p>
    </div>
  )
}

export default NO2
