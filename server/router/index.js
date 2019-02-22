const appFront = require('./home')
const chatList = require('./chatList')

const router = (req, res) => {
  switch (req.url) {
    case '/':
      appFront(req, res)
      break
    case '/chatList':
      chatList(req, res)
    default:
      res.writeHead(400, {
        'Content-Type': 'text/plain',
        'x-antani': 'ciao'
      })
      res.end('Something Wrong')
      break
  }
}

module.exports = router
