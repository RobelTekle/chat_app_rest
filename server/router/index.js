const appFront = require('./home')
const chatList = require('./chatList')

const router = (req, res) => {
  switch (req.url) {
    case '/':
      appFront(req, res)
      break
    case '/api/chatList':
      chatList(req, res)
      break
    case '/api/chatBox':
      break
    case '/api/postMessage':
      break
    case 'api/login':
      break
    default:
      res.writeHead(400, {
        'Content-Type': 'text/plain',
        'x-error': 'oups'
      })
      res.end('Something Wrong')
      break
  }
}

module.exports = router
