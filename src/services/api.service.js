import axios from 'axios'
const appId = process.env.VUE_APP_ID
const secret = process.env.VUE_APP_SEC
const baseURL = process.env.VUE_APP_URL

// class ApiService {
//   api() {
//     return axios.create({
//       baseURL: baseURL,
//       headers: {
//         Accept: 'application/json',
//         'X-Api-Factory-Application-Id': appId,
//         'Content-Type': 'application/json',
//       },
//     })
//   }
//   loadCities() {
//     return this.api.get('db/city')
//   }
//   loadCity(params) {
//     return this.api.get('db/city', { params: params })
//   }
// }

// export default new ApiService()

export const urls = {
  cities: 'db/city',
  points: 'db/point',
}

const api = () => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      Accept: 'application/json',
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
    },
  })
}
export const loadData = async (url, params) => {
  try {
    const result = await api()
      .get(url, { params: params })
      .then((resp) => resp.data)
    return result
  } catch (error) {
    console.log(error)
  }
}
