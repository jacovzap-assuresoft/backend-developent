import ClientRouter from '../routes/client.route'
import ClientController from '../controller/client.controller'
import ClientRepository from '../repositories/client.repository'
import Server from '../server'

import request from 'supertest'

const clientRepository = new ClientRepository()
const clientController = new ClientController(clientRepository)
const clientRouter = new ClientRouter(clientController)

const server = new Server([clientRouter.getRouterPath()])

describe('GET /clients', () => {
  it('should return 200 OK', async () => {
    const { path } = clientRouter.getRouterPath()
    const response = await request(server.getApp()).get(path)
    expect(response.status).toBe(200)
  })

  it('should return an array of clients', async () => {
    const { path } = clientRouter.getRouterPath()
    const response = await request(server.getApp()).get(path)
    expect(response.body !== null).toBeTruthy()
  })
})

describe('POST /clients', () => {
  it('should return 200 OK', async () => {
    const { path } = clientRouter.getRouterPath()
    const response = await request(server.getApp())
      .post(path)
      .send({
        name: 'John',
        lastName: 'Doe',
        email: 'john@email.com',
        phone: '123456789',
        address: {
          city: 'New York',
          zone: 'Manhattan',
          street: 'Wall Street'
        }
      })
    expect(response.status).toBe(200)
  })
})
