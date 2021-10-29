import ApiService from '@/services/api.service'

class ClientService extends ApiService {
  loadCities() {
    return this.api.get('db/city')
  }
  loadCity(params) {
    return this.api.get('db/city', { params: params })
  }
}

export default new ClientService()
