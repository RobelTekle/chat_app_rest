const http = require('http')
const router = require('./router')
require('./db')

const port = process.env.PORT || 4000
const host = process.env.HOST || 'localhost'

const server = http.createServer(router)

server.listen({ port, host }, () => {
  console.log(`Server listening at port ${port}`)
})
