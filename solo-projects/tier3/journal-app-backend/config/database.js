const mongoose = require('mongoose')
require('dotenv').config({path: './.env'})

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI_LOCAL, {
        dbName: 'journal-app',
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log('connected to mongoose database: journal-app'))
    .catch(err=> console.log(err))

    mongoose.connection.on('connected', ()=> console.log('connected to db'))
    mongoose.connection.on('error', err=> console.log(err.message))
    mongoose.connection.on('disconnected', ()=>console.log('mongoose connected disconnected'))
    process.on('SIGINT', async()=>{
        await mongoose.connection.close()
        process.exit(0)
    })
}

module.exports = connectDB