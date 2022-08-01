const express = require('express')
const mongoose = require('mongoose')
const noteRoutes = require('./routes/noteRoutes')

const app = express()

const PORT = process.env.PORT || 3001



app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Routes
app.use('/api/notes', noteRoutes)


app.listen(PORT, ()=>{
    console.log(`server running on PORT ${PORT}`)
})