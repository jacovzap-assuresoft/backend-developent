import ClientSchema from '../models/Client'
import { Client } from '../types/types'

export default class ClientRepository {

  async getAllClientsRepository() {
    return ClientSchema.find()
  }

  async createClientRepository(clientData: Client) {
    return ClientSchema.create(clientData)
  }

  async updateClientRepository(clientId: string, clientData: Client) {
    return ClientSchema.findByIdAndUpdate(clientId, clientData)
  }

  async deleteClientRepository(clientId: string) {
    return ClientSchema.findByIdAndRemove(clientId)
  }
}
