import express from 'express'
import cors from 'cors'
import { resultsHandler } from './functions.js'

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.post('/', resultsHandler)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`)
})
