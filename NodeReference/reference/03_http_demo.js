const http = require('http')
// http module is a core node module that helps us to create a server it takes a callback function with request from the a client and response to the client

// res.end('some data') ends the response to the client with an optional data that is sent back to the client

// Create a server
http.createServer((req, res) => {
  // Write a response
  res.end('Hello world')
}).listen(8080)

// http.createServer returns an object corresponding to the server that can listen to any port (8080 in this case) and respond to the requests made on this perticular port

console.log('Server running')
