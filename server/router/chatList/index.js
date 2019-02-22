const uuid = require('uuid')

const chatListMock = Array.from(Array(20), (_, i) => ({
  id: uuid.v4(),
  name: `chat_${i}`,
  messages: []
}))

const chatList = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(chatListMock))
}

module.exports = chatList
