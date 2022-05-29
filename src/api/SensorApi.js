import axiosClient from './apiClient'

const SensorApi = {
  getLatestSensorData: () => {
    const pathUrl = '/data/latest'
    return axiosClient.get(pathUrl)
  },
  getSensorDataByTypesAndEvents: (params) => {
    return axiosClient.get('', { params })
  },
}

export default SensorApi
