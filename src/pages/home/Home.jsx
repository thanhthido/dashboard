import React from 'react'
import Temperature from '../../components/Temperature/Temperature'
import NO2 from '../../components/NO2/NO2'
import CO from '../../components/CO/CO'
import CH4 from '../../components/CH4/CH4'
import Dust from '../../components/Dust/Dust'
import { motion } from 'framer-motion'

function Home(props) {
  const { temp, no2, dustList, co, ch4 } = props
  return (
    <motion.div
      className='flex-grow mt-4 mx-4 flex flex-col lg:flex-row lg:flex-wrap gap-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Temperature temp={temp} />
      <NO2 no2={no2} />
      <CO co={co} />
      <CH4 ch4={ch4} />
      <Dust dustList={dustList} />
    </motion.div>
  )
}

export default Home
