import React from 'react'
import History from '../../pages/history/History'
import Home from '../../pages/home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import NotFound from '../not_found/NotFound'

function AnimateRoutes() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='history' element={<History />}>
        <Route path='temp' element={<h1>History Temp</h1>} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AnimateRoutes
