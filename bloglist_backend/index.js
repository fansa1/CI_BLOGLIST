const app = require('./app') 
const http = require('http')
require('dotenv').config()

const server = http.createServer(app)

let PORT = process.env.PORT || 3003

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})