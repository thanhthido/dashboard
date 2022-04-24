import React from 'react'
import FakeData from '../../data/FakeData'
import History from '../../pages/history/History'
import Home from '../../pages/home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import NotFound from '../not_found/NotFound'

function AnimateRoutes() {
  const { temp, dustList, no2, co, ch4 } = FakeData
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path='/'
        element={<Home temp={temp} no2={no2} dustList={dustList} co={co} ch4={ch4} />}
      />
      <Route path='history' element={<History />}>
        <Route path='temp' element={<h1>History Temp</h1>} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AnimateRoutes
