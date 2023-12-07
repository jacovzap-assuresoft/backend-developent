import { Request, Response } from 'express'
import ClientRepository from '../repositories/client.repository'

export default class ClientController {
  private reporsitory: ClientRepository

  public constructor(repository: ClientRepository) {
    this.reporsitory = repository

    this.getAllClients = this.getAllClients.bind(this)
    this.createClient = this.createClient.bind(this)
    this.updateClient= this.updateClient.bind(this)
    this.deleteClient = this.deleteClient.bind(this)
  }

  async getAllClients(_req: Request, res: Response) {
    try {
      const clients = await this.reporsitory.getAllClientsRepository()
      return res.status(200).json(clients)
    } catch (err: any) {
      res.status(500).json({ message: err.message, stack: err.stack })
    }
  }

  async createClient(req: Request, res: Response) {
    try {
      const dbResponse = await this.reporsitory.createClientRepository(req.body)
      return res.json(dbResponse)
    } catch (err: any) {
      res.status(500).json({ message: err.message, stack: err.stack })
    }
  }

  async updateClient(req: Request, res: Response) {
    try {
      const dbResponse = await this.reporsitory.updateClientRepository(
        req.params.id,
        req.body
      )
      return res.json(dbResponse)
    } catch (err: any) {
      res.status(500).json({ message: err.message, stack: err.stack })
    }
  }

  async deleteClient(req: Request, res: Response) {
    try {
      const dbResponse = await this.reporsitory.deleteClientRepository(
        req.params.id
      )
      return res.json(dbResponse)
    } catch (err: any) {
      res.status(500).json({ message: err.message, stack: err.stack })
    }
  }
}
