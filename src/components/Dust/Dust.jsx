import React from 'react'

Dust.propTypes = {}

function Dust(props) {
  const { dustList } = props
  return (
    <ul className='cursor-pointer border rounded-lg bg-teal-50 py-10 shadow-lg font-medium text-center tracking-wider col-ul  row-span-2'>
      <div className='font-medium text-center tracking-wider'>
        <img src='/image/dust.svg' alt='' className='w-16 h-16 inline-block mb-3 mr-2' />
        <h1 className='inline-block text-3xl'>Nồng độ bụi</h1>
      </div>

      {dustList.map((dust) => {
        const { id, name, value } = dust
        return (
          <li key={id} className='text-center text-3xl py-6'>
            <span>{name}: </span>
            <p className='text-4xl md:text-5xl lg:text-6xl py-3'>
              {`${value} `}
              <span className='text-4xl lg:text-5xl'>
                ug/m<sup>3</sup>
              </span>
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default Dust
