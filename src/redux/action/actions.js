import {
  CHANGE_TEMP_VALUE,
  CHANGE_CO_VALUE,
  CHANGE_NO2_VALUE,
  CHANGE_CH4_VALUE,
  CHANGE_PM1_VALUE,
  CHANGE_PM10_VALUE,
  CHANGE_PM25_VALUE,
  CHANGE_TIME_VALUE,
} from './type'

export const changeTempValue = (value) => {
  return {
    type: CHANGE_TEMP_VALUE,
    tempValue: value,
  }
}

export const changeCoValue = (value) => {
  return {
    type: CHANGE_CO_VALUE,
    coValue: value,
  }
}

export const changeNo2Value = (value) => {
  return {
    type: CHANGE_NO2_VALUE,
    no2Value: value,
  }
}

export const changeCh4Value = (value) => {
  return {
    type: CHANGE_CH4_VALUE,
    ch4Value: value,
  }
}

export const changePm1Value = (value) => {
  return {
    type: CHANGE_PM1_VALUE,
    pm1Value: value,
  }
}

export const changePm10Value = (value) => {
  return {
    type: CHANGE_PM10_VALUE,
    pm10Value: value,
  }
}

export const changePm25Value = (value) => {
  return {
    type: CHANGE_PM25_VALUE,
    pm25Value: value,
  }
}

export const changeTimeValue = (value) => {
  return {
    type: CHANGE_TIME_VALUE,
    time: value,
  }
}
