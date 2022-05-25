import {
  CHANGE_CH4_VALUE,
  CHANGE_CO_VALUE,
  CHANGE_NO2_VALUE,
  CHANGE_TEMP_VALUE,
  CHANGE_PM1_VALUE,
  CHANGE_PM10_VALUE,
  CHANGE_PM25_VALUE,
  CHANGE_TIME_VALUE,
} from '../action/type'

const INITIAL_TEMP_STATE = {
  tempValue: 0,
  coValue: 0,
  no2Value: 0,
  ch4Value: 0,
  pm1Value: 0,
  pm10Value: 0,
  pm25Value: 0,
  time: 0,
}

const sensorDataReducer = (state = INITIAL_TEMP_STATE, action) => {
  switch (action.type) {
    case CHANGE_TEMP_VALUE:
      return {
        ...state,
        tempValue: action.tempValue,
      }
    case CHANGE_CO_VALUE:
      return {
        ...state,
        coValue: action.coValue,
      }
    case CHANGE_NO2_VALUE:
      return {
        ...state,
        no2Value: action.no2Value,
      }
    case CHANGE_CH4_VALUE:
      return {
        ...state,
        ch4Value: action.ch4Value,
      }
    case CHANGE_PM1_VALUE:
      return {
        ...state,
        pm1Value: action.pm1Value,
      }
    case CHANGE_PM10_VALUE:
      return {
        ...state,
        pm10Value: action.pm10Value,
      }
    case CHANGE_PM25_VALUE:
      return {
        ...state,
        pm25Value: action.pm25Value,
      }
    case CHANGE_TIME_VALUE:
      return {
        ...state,
        time: action.time,
      }
    default:
      return state
  }
}

export default sensorDataReducer
