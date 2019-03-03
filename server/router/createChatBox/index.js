const { ChatBox } = require('../../db')
const { checkBody } = require('./helper')

const createChatBox = (req, res) => {
  const { method } = req
  if (method !== 'POST') {
    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.end('Error: only post method is available at this route')
    return
  }
  let body = ''
  req.on('data', chunck => {
    body += chunck.toString()
  })
  req.on('end', () => {
    const { obj, error, message } = checkBody(body)

    if (error) {
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.end(`Error : ${message}`)
      return
    }

    const chatBox = new ChatBox(obj)
    chatBox.save((err, chat) => {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end(`Error : ${err}`)
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(chat))
      }
    })
  })
}

module.exports = createChatBox
