const express = require('express')
const colores = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use('/api/v1/goals', require('./routes/goalRoutes') )
app.use(errorHandler)

app.listen(port, () => console.log(`server started on http://localhost:${port}`))