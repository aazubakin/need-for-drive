import ApiService from './api.service'

class ClientService extends ApiService {
  loadCities() {
    return this.api.get('db/city')
  }
}
