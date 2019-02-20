const mongoose = require('mongoose')
const config = require('../config')
// connect to database
const connectDb = () => {
    const options = {
        autoReconnect: true,
        connectTimeoutMS: 0,
        useNewUrlParser: true 
    }
    if (mongoose.connection.readyState != 1) {
        mongoose.connect(config.database.localDb, options)
    }
}

// connection status callbacks
mongoose.connection.on('disconnected', () => connectDb())
mongoose.connection.on('connected', () => console.log('connected to database'))

module.exports = { connect: connectDb }