import React from 'react'
import { AiOutlineCloud } from 'react-icons/ai'
import { useSelector } from 'react-redux'

function CO() {
  const coValue = useSelector((state) => state.sensorData.coValue)
  return (
    <div className='w-full lg:w-halfFull rounded-lg bg-teal-200 text-teal-600 flex flex-col justify-center items-center py-4 shadow-lg shadow-teal-200/20'>
      <div className='flex items-center justify-center gap-4 text-center'>
        <AiOutlineCloud size='3rem' />
        <span className='text-3xl font-medium tracking-wider'>Nồng độ khí CO</span>
      </div>
      <p className='text-4xl'>
        <span className='font-bold'>{`${coValue} `}</span>
        <span className='text-3xl'>
          mg/m<sup>3</sup>
        </span>
      </p>
    </div>
  )
}

export default CO
