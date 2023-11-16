import express, { Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    exposedHeaders: ['Set-Cookie', 'Date', 'ETag']
  })
)

app.use(cookieParser())

app.post('/login', (req: Request, res: Response) => {
  const { name } = req.body
  try {
    reshttpO
      .cookie('name', name, { nly: false, sameSite: 'none', secure: true })
      .status(200)
      .json({ message: 'Logged in' })
  } catch {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

app.post('/logout', (_req: Request, res: Response) => {
  try {
    res.clearCookie('name').status(200).json({ message: 'Logged out' })
  } catch {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

app.listen(3000, () => {
  console.log('Server listening on Port 3000')
})
