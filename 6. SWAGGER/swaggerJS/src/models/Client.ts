import mongoose from 'mongoose'
import { Client } from '../types/types'

const clientSchema = new mongoose.Schema<Client>(
  {
    name: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    address: {
      city: { type: String, required: true, trim: true },
      zone: { type: String, required: true, trim: true },
      street: { type: String, required: true, trim: true }
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    versionKey: false
  }
)

const Client = mongoose.model('Client', clientSchema)
export default Client
