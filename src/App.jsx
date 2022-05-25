import './App.css'
import AnimateRoutes from './components/AnimateRoutes/AnimateRoutes'
import NavigationBar from './components/navigation_bar/NavigationBar'
import mqtt from 'mqtt/dist/mqtt'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  changeTempValue,
  changeCoValue,
  changeNo2Value,
  changeCh4Value,
  changePm1Value,
  changePm10Value,
  changePm25Value,
} from './redux/action/actions'

const MQTT_TOPIC = 'nodeWiFi32/detail'
function App() {
  const [mqttClient, setMqttClient] = useState(null)
  const dispatch = useDispatch()

  const mqttConnect = () => {
    const url = `wss://driver.cloudmqtt.com:38675/mqtt`
    const clientId = '706caf07df3748f680efcf4f2fd65aa8'
    const username = 'burlgbdf'
    const password = '0--UiYtSUWAZ'

    const options = {
      keepalive: 60,
      clean: true,
      useTLS: true,
      protocolVersion: 4,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      clientId,
      username,
      password,
      rejectUnauthorized: false,
    }

    const client = mqtt.connect(url, options)
    setMqttClient(client)
  }

  const mqttSub = () => {
    if (!mqttClient) return

    mqttClient.subscribe(MQTT_TOPIC, 0, (error) => {
      if (error == null) return
      console.log(`Subscribe to topics error ${error}`)
    })
  }

  const mqttUnSub = () => {
    if (!mqttClient == null) return

    client.unsubscribe(MQTT_TOPIC, (error) => {
      if (error == null) return
      console.log(`Subscribe to topics error ${error}`)
    })
  }

  useEffect(() => {
    mqttConnect()
  }, [])

  useEffect(() => {
    if (!mqttClient) return

    mqttClient.on('connect', () => {
      console.log('mqtt connected')
      mqttSub()
    })

    mqttClient.on('error', (error) => {
      console.error(`Connection error: ${error}`)
      mqttClient.end()
    })

    mqttClient.on('message', (topic, message) => {
      if (topic === MQTT_TOPIC) {
        const messageData = JSON.parse(message.toString())

        if (messageData.type === 'temperature') {
          dispatch(changeTempValue(messageData.value))
        }

        if (messageData.type === 'co') {
          dispatch(changeCoValue(messageData.value))
        }

        if (messageData.type === 'no2') {
          dispatch(changeNo2Value(messageData.value))
        }

        if (messageData.type === 'ch4') {
          dispatch(changeCh4Value(messageData.value))
        }

        if (messageData.type === 'pm1') {
          dispatch(changePm1Value(messageData.value))
        }

        if (messageData.type === 'pm25') {
          dispatch(changePm25Value(messageData.value))
        }

        if (messageData.type === 'pm10') {
          dispatch(changePm10Value(messageData.value))
        }
      }
    })

    return () => {
      mqttUnSub()
    }
  }, [mqttClient])

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
