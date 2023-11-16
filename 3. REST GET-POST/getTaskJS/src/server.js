import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import nocache from 'nocache'

import fileRoutes from './routes/file.route.js'

const app = new express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(nocache())

app.use('/files', fileRoutes)

export default app