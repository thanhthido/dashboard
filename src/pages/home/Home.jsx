import React from 'react'
import MainContent from '../../components/main_content/MainContent'
import ItemsDetails from '../../components/items_details/ItemsDetails'

function Home(props) {
  const { temp, no2, dustList, co, ch4 } = props
  return (
    <div className='flex-grow font-semibold flex flex-col md:flex-row gap-4'>
      <MainContent temp={temp} no2={no2} />
      <ItemsDetails />
    </div>
  )
}

export default Home
