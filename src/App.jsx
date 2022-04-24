import './App.css'
import AnimateRoutes from './components/AnimateRoutes/AnimateRoutes'
import NavigationBar from './components/navigation_bar/NavigationBar'

function App() {
  return (
    <div className='min-h-screen'>
      <h1 className='text-lg md:text-3xl font-bold text-center py-4 bg-darkGrey text-supLightPink'>
        Bảng điều khiển của tôi
      </h1>
      <div className='flex flex-col md:flex-row'>
        <NavigationBar />
        <AnimateRoutes />
      </div>
    </div>
  )
}

export default App
