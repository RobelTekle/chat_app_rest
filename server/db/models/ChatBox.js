const { Schema, model } = require('mongoose')

const chatBoxType = {
  id: String,
  name: String,
  messages: [String]
}

const chatBoxSchema = Schema(chatBoxType)
const ChatBox = model('ChatBox', chatBoxSchema)

module.exports = ChatBox
