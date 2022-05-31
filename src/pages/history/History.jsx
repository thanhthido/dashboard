import el from 'date-fns/esm/locale/el/index.js'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SensorApi from '../../api/SensorApi'
import HistoryFilter from '../../components/HistoryFilter'
import HistoryPagination from '../../components/HistoryPagination'
import HistoryList from '../../components/history_list'

function History() {
  const [sensorDataList, setSensorDataList] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 14,
    total: 14,
  })

  const [filters, setFilters] = useState({
    limit: 14,
    event: 'all',
    page: 1,
    type: 'all',
  })

  const [id, setId] = useState(0)

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    })
  }

  const handleChangeTypeAndEvent = (newType, newEvent = 'all') => {
    setFilters({
      ...filters,
      page: 1,
      type: newType,
      event: newEvent,
    })
  }

  const fetchAllSensorData = async (event = 'all') => {
    try {
      const newFilter = { ...filters, event: `${event}` }
      const { sensorDataList, total, page } = await SensorApi.getAllSensorData(newFilter)
      const limit = 14
      const pagination = {
        total: total,
        page: page,
        limit: limit,
      }
      if (page === 1) {
        setId(0)
      } else {
        setId((page - 1) * limit)
      }
      setPagination(pagination)
      setSensorDataList(sensorDataList)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchDataBasedOnTypeAndEvent = async (newEvent, newType) => {
    try {
      const newFilters = { ...filters, event: newEvent, type: newType }
      const { sensorDataList, total, page } = await SensorApi.getSensorDataByTypesAndEvents(
        newFilters
      )
      console.log(sensorDataList)
      const limit = 14
      const pagination = {
        total: total,
        page: page,
        limit: limit,
      }
      if (page === 1) {
        setId(0)
      } else {
        setId((page - 1) * limit)
      }
      setPagination(pagination)
      setSensorDataList(sensorDataList)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const { event, type } = filters
    if (event === 'all' && type === 'all') {
      fetchAllSensorData()
    } else if (event === 'normal' && type === 'all') {
      fetchAllSensorData('normal')
    } else if (event === 'error' && type === 'all') {
      fetchAllSensorData('error')
    } else {
      fetchDataBasedOnTypeAndEvent(event, type)
    }
  }, [filters])

  return (
    <motion.div
      className='sm:px-6 w-full min-h-screen mt-4 mx-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className='mr-4'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-3xl font-bold leading-normal text-gray-800'>Lịch sử</h1>
          <HistoryPagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
        <HistoryFilter onFilterChange={handleChangeTypeAndEvent} />
        <HistoryList sensorDataList={sensorDataList} id={id} />
      </div>
      <Outlet />
    </motion.div>
  )
}

export default History
