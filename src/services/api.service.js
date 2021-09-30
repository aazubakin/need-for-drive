import axios from 'axios'

class ApiService {
  appId = process.env.VUE_APP_ID
  secret = process.env.VUE_APP_SEC
  baseURL = process.env.VUE_APP_URL

  api = axios.create({
    baseURL: baseURL,
    headers: {
      Accept: 'application/json',
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
    },
  })
}

export default new ApiService()

// export const fetchData = (url, params) => {
//   return apiClient.get(url, { params: params })
// }
