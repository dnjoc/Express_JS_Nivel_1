const http = require('http') 

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Daniel Castellanos</h1>')
} )
server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`)
    })