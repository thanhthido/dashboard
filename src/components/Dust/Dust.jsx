import React from 'react'
import { GiDustCloud } from 'react-icons/gi'

function Dust(props) {
  const { dustList } = props
  return (
    <div className='w-full rounded-lg bg-gray-200 text-gray-600 flex flex-col justify-center items-center py-4 shadow-lg shadow-gray-200/40'>
      <div className='flex items-center justify-center gap-4'>
        <GiDustCloud size='2rem' />
        <span className='text-3xl font-medium tracking-wider'>Nồng độ bụi</span>
      </div>
      <ul>
        {dustList.map((dust) => {
          const { id, name, value } = dust
          return (
            <li key={id} className='text-center text-3xl py-6'>
              <span>{name}: </span>
              <span className='text-4xl py-3'>
                <span className='font-bold ml-2'>{`${value} `}</span>
                <span className='text-3xl'>
                  &#181;/m<sup>3</sup>
                </span>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dust
