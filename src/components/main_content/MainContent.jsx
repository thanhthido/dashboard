import React from 'react'
import Temperature from '../../components/Temperature/Temperature'
import NO2 from '../../components/NO2/NO2'

function MainContent(props) {
  const { temp, no2 } = props
  return (
    <div className='flex-1 bg-white rounded-md border'>
      <Temperature temp={temp} />
      <NO2 no2={no2} />
    </div>
  )
}

export default MainContent
