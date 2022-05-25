import { motion } from 'framer-motion'
import React from 'react'
import CH4 from '../../components/CH4/CH4'
import CO from '../../components/CO/CO'
import Dust from '../../components/Dust/Dust'
import HomeTopHeader from '../../components/HomeTopHeader/HomeTopHeader'
import NO2 from '../../components/NO2/NO2'
import Temperature from '../../components/Temperature/Temperature'
import { useEffect } from 'react'
import SensorApi from '../../api/SensorApi'
import { useDispatch } from 'react-redux'
import {
  changeTempValue,
  changeCoValue,
  changeNo2Value,
  changeCh4Value,
  changePm1Value,
  changePm10Value,
  changePm25Value,
  changeTimeValue,
} from '../../redux/action/actions'

function Home() {
  const dispatch = useDispatch()

  const getLatestSensorData = async () => {
    try {
      const result = await SensorApi.getLatestSensorData()
      console.log(result)
      dispatch(changeTempValue(result.tempValue))
      dispatch(changeCoValue(result.coValue))
      dispatch(changeNo2Value(result.no2Value))
      dispatch(changeCh4Value(result.ch4Value))
      dispatch(changePm1Value(result.pm1Value))
      dispatch(changePm10Value(result.pm10Value))
      dispatch(changePm25Value(result.pm25Value))
      dispatch(changeTimeValue(result.time))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getLatestSensorData()
  }, [])

  return (
    <motion.div
      className='mt-4 mx-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <HomeTopHeader />
      <div className='flex-grow mt-4 flex flex-col lg:flex-row lg:flex-wrap gap-2'>
        <Temperature />
        <NO2 />
        <CO />
        <CH4 />
        <Dust />
      </div>
    </motion.div>
  )
}

export default Home
