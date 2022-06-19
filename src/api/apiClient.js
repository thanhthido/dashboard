import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: 'https://kltn-dashboard.online/sensorsData',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    throw error
  }
)

export default axiosClient
