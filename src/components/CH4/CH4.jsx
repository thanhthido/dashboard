import React from 'react'
import { AiOutlineCloud } from 'react-icons/ai'
import { useSelector } from 'react-redux'

CH4.propTypes = {}

function CH4() {
  const ch4Value = useSelector((state) => state.sensorData.ch4Value)
  return (
    <div className='w-full lg:flex-1 rounded-lg bg-sky-200 text-sky-600 flex flex-col justify-center items-center py-4 shadow-lg shadow-sky-200/20'>
      <div className='flex items-center justify-center gap-4 text-center'>
        <AiOutlineCloud size='3rem' />
        <span className='text-3xl font-medium tracking-wider'>
          Nồng độ khí CH<sub>4</sub>
        </span>
      </div>
      <p className='text-4xl'>
        <span className='font-bold'>{`${ch4Value} `}</span>
        <span className='text-3xl'>
          mg/m<sup>3</sup>
        </span>
      </p>
    </div>
  )
}

export default CH4
