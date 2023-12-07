import SaleSchema from '../models/Sale'
import { Sale } from '../types/types'

export const getAllSalesRepository = async () => {
    return SaleSchema.find().populate('clientId')
}

export const createSaleRepository = async (saleData: Sale) => {
    return SaleSchema.create(saleData)
}

export const updateSaleRepository = async (saleId: string, saleData: Sale) => {
    return SaleSchema.findByIdAndUpdate(saleId, saleData)
}

export const deleteSaleRepository = async (saleId: string) => {
    return SaleSchema.findByIdAndRemove(saleId)
}

export const clientSalesTotalRepository = async (clientId: string) => {
    return (await SaleSchema.find({clientId : clientId})).reduce(((sum, sale) => sum + sale.price), 0)
}

export const salesTotalByItemRepository = async (item: string) => {
    return (await SaleSchema.find({item : item})).reduce(((sum, sale) => sum + sale.price), 0)
}
