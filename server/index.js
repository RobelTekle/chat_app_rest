const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello Man!')
})

server.listen({ port: 4000, host: 'localhost' }, () => {
  console.log('Server listening at port 4000')
})
