import axiosClient from './apiClient'

const SensorApi = {
  getLatestSensorData: () => {
    const pathUrl = '/data/latest'
    return axiosClient.get(pathUrl)
  },
}

export default SensorApi
