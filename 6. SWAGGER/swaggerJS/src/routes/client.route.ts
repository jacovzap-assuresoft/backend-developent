import { Router } from 'express'
import ClientController from '../controller/client.controller'
import { ModelRouter} from '../types/types'

export default class ClientRouter implements ModelRouter {

  private router: Router = Router()
  private controller: ClientController

  public readonly PATH = '/clients'

  public constructor(controller: ClientController) {
    this.controller = controller

    this.router.get('/:id?', this.controller.getAllClients)
    this.router.post('/', this.controller.createClient)
    this.router.put('/:id', this.controller.updateClient)
    this.router.delete('/:id', this.controller.deleteClient)
  }

  public getRouterPath() {
    return { router: this.router, path: this.PATH }
  }

}
