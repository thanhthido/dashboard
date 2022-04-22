import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/navigation_bar/NavigationBar'
import History from './pages/history/History'
import Home from './pages/home/Home'

function App() {
  const temp = 25
  const dustList = [
    {
      id: 0,
      name: 'PM 1.0',
      value: 10,
    },
    {
      id: 1,
      name: 'PM 2.5',
      value: 20,
    },
    {
      id: 2,
      name: 'PM 10.0',
      value: 30,
    },
  ]
  const no2 = 40
  const co = 50
  const ch4 = 30
  return (
    <div className='px-8 bg-indigo-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-center'>My Dashboard</h1>
      <div className='flex flex-col md:flex-row mt-5 space-x-4'>
        <NavigationBar />

        <Routes>
          <Route
            path='/'
            element={<Home temp={temp} no2={no2} dustList={dustList} co={co} ch4={ch4} />}
          />
          <Route path='history' element={<History />}>
            <Route path='temp' element={<h1>History Temp</h1>} />
          </Route>

          <Route path='*' element={<h1>Trang không tồn tại</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
