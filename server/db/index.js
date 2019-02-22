const mongoose = require('mongoose')
const { mongoDB } = require('./secrets')

mongoose.connect(mongoDB, { useNewUrlParser: true })
