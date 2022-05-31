import axiosClient from './apiClient'

const SensorApi = {
  getLatestSensorData: () => {
    const pathUrl = '/data/latest'
    return axiosClient.get(pathUrl)
  },
  getAllSensorData: (params) => {
    return axiosClient.get('', { params })
  },
  getSensorDataByTypesAndEvents: (params) => {
    const pathUrl = '/data'
    return axiosClient.get(pathUrl, { params })
  },
}

export default SensorApi
