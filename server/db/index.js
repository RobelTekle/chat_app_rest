const mongoose = require('mongoose')
const { mongoDB } = require('./secrets')

mongoose.connect(mongoDB, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongoose : connection error'))
db.once('open', () => {
  console.log('Mongoose : connection open')
})

// const catSchema = mongoose.Schema({
//   name: String
// })

// catSchema.methods.speak = function() {
//   console.log(`my name is ${this.name}`)
// }

// const Cat = mongoose.model('Cat', catSchema)

// const jack = new Cat({ name: 'Jack' })

// jack.save(function(err, jack) {
//   if (err) return console.error(err)
//   jack.speak()
// })
