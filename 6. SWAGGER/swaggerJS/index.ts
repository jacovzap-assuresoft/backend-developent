import ClientController from './src/controller/client.controller'
import ClientRepository from './src/repositories/client.repository'
import ClientRouter from './src/routes/client.route'
import Server from './src/server'
import { RouterPath } from './src/types/types'

const clientRepository = new ClientRepository()
const clientController = new ClientController(clientRepository)
const clientRouter = new ClientRouter(clientController)

const routers: Array<RouterPath> = []
routers.push(clientRouter.getRouterPath())

const server = new Server(routers) // WIP: server factory because of complex building :(

server.getApp().listen(3000, () => {
  console.log('Mongo server is listening on port 3000')
})
