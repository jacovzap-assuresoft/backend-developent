import { Request, Response } from 'express'
import {
  getAllSalesRepository,
  createSaleRepository,
  updateSaleRepository,
  deleteSaleRepository,
  clientSalesTotalRepository,
  salesTotalByItemRepository
} from '../repositories/sale.repository'

export const getAllSales = async (req: Request, res: Response) => {
  try {
    const sales = await getAllSalesRepository()
    res.status(200).json(sales)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const createSale = async (req: Request, res: Response) => {
  try {
    const dbResponse = await createSaleRepository(req.body)
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateSale = async (req: Request, res: Response) => {
  try {
    const dbResponse = await updateSaleRepository(
      req.params.id,
      req.body
    )
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const deleteSale = async (req: Request, res: Response) => {
  try {
    const dbResponse = await deleteSaleRepository(
      req.params.id
    )
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const clientSalesTotal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const dbResponse = await clientSalesTotalRepository(id)

    const response = {
      clientId: id,
      total: dbResponse
    }

    return res.json(response)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const salesTotalByItem = async (req: Request, res: Response) => {
  try {
    const { item } = req.params
    const dbResponse = await salesTotalByItemRepository(item)

    const response = {
      item: item,
      total: dbResponse
    }

    return res.json(response)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
