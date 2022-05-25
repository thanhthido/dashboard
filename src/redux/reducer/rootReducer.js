import { combineReducers } from 'redux'
import sensorDataReducer from './sensorDataReducer'

const rootReducer = combineReducers({
  sensorData: sensorDataReducer,
})

export default rootReducer
