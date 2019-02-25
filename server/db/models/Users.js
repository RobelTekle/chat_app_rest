const { Schema, model } = require('mongoose')

const usersType = {
  name: String,
  email: String
  password: String,
}

const userSchema = Schema(usersType)

const User = model('Users', userSchema)

module.exports = User
