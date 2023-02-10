const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/api/v1/goals', require('./routes/goalRoutes') )
app.use(errorHandler)

app.listen(port, () => console.log(`server started on http://localhost:${port}`))