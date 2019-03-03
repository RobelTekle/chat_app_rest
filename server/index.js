const http = require('http')
const router = require('./router')
const middleware = require('./middleware')

require('./db')

const port = process.env.PORT || 4000
const host = process.env.HOST || 'localhost'

const app = http.createServer(middleware)
app.on('request', router)

app.listen({ port, host }, () => {
  console.log(`Server listening at port ${port}`)
})
