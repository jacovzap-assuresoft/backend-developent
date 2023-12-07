import { Router } from 'express'
import {
  getAllSales,
  createSale,
  updateSale,
  deleteSale,
  clientSalesTotal,
  salesTotalByItem,
} from '../controller/sale.controller'

const router = Router()

router.get('/', getAllSales)
router.get('/client-sum/:id', clientSalesTotal)
router.get('/item/:item', salesTotalByItem)
router.post('/', createSale)
router.put('/:id', updateSale)
router.delete('/:id', deleteSale)

export default router
