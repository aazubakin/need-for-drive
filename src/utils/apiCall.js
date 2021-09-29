import axios from 'axios'

const appId = process.env.VUE_APP_ID
const secret = process.env.VUE_APP_SEC
const baseURL = process.env.VUE_APP_URL

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'X-Api-Factory-Application-Id': appId,
    'Content-Type': 'application/json',
  },
})

export const fetchData = (url, params) => {
  return apiClient.get(url, { params: params })
}
