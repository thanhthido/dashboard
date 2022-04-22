import React from 'react'

Temperature.propTypes = {}

function Temperature(props) {
  const { temp } = props
  return (
    <div className='cursor-pointer border rounded-lg py-14 bg-teal-50 shadow-lg flex flex-col justify-center items-center'>
      <div className='font-medium text-center tracking-wider'>
        <img src='/image/temperature.svg' alt='' className='w-16 h-16 inline-block mb-3' />
        <h1 className='inline-block text-3xl'>Nhiệt độ</h1>
      </div>
      <p className='text-center text-4xl md:text-5xl lg:text-6xl py-1'>
        {`${temp}°`}
        <span className='text-4xl lg:text-5xl'>C</span>
      </p>
    </div>
  )
}

export default Temperature
