const homeRoute = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('App Front')
}

module.exports = homeRoute
