// console.log('Hello from Node.js')

const Person = require('./reference/07_person')

// This is how node modules are brought in

let person = new Person('John Doe', 20)

person.greeting()

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
// Just for reference

  // fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //   if (err) throw err
  //   else {
  //   url is / for http://localhost:<your_port_number> 
  //     if (req.url === '/') {
  //      writeHeader gives the info on the data sent back to the client it includes a status which could be 200,400,404 etc
  // 200 imples that data is sent correctly second arguement is for content type which is text/html,text/plain,application.json etc
  //       res.writeHead(200, {
  //         'Content-type': 'text/html'
  //       })
  //       res.end(data)
  //     }
  //   }
  // })

  // Build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  
  // Get the extention of the file
  let extName = path.extname(filePath)

  // use switch to map the extention to correct content-type for res header
  let contentType = 'text/html'
  switch (extName) {
    case '.js': contentType = 'text/javascript'
      break
    case '.css': contentType = 'text/css'
      break
    case '.png': contentType = 'image/png'
      break
    case '.jpg': contentType = 'image/jpg'
      break
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
      // ENOENT means Page not found
      // we would like to send a html page for error message which is called 404.html
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
          if (err) throw err
          res.writeHead(200, {
            'Content-type': 'text/html'
          })
          // write function can also be used to write data to the client instead of end
          res.write(data)
          res.end()
        })
      } else {
        // Some othe error
        res.writeHead(500)
        res.end('Server Error ' + err.code)
      }
    } else {
      res.writeHead(200, {
        'Content-type': contentType
      })
      res.write(content)
      res.end()
    }
  })
})

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log('Server runnung on PORT ' + port)
})
