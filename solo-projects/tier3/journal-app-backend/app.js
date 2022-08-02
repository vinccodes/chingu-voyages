const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const noteRoutes = require('./routes/noteRoutes')
const errorHandler = require('./middlewares/errorHandler')
const connectDB = require('./config/database')
const app = express()

const PORT = process.env.PORT || 3001
require('dotenv').config({path: './config/.env'})

// Connect to the DB
connectDB()


//Middleware 
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use(morgan(':method :url :status - :response-time ms'))

// Routes
app.use('/api/notes', noteRoutes)


app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`server running on PORT ${PORT}`)
})