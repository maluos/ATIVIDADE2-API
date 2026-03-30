const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use('/livros', require('./routes/livros'))

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})