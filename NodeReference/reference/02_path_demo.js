const path = require('path')

// This is a core node module hence need not be installed

// __dirname and __filename are window properties filename is the entire path to the given file whereas __dirname is the path to the current directory

// Base file name ie just the file name without the full path

console.log(path.basename(__filename))

// Directory name

console.log(path.dirname(__filename))

// File extention

console.log(path.extname(__filename))

// Create object for ease of accessing the above mentioned file info like base,host,extname

console.log(path.parse(__filename))

// Concatenate paths

console.log(path.join(__dirname, 'test', 'hello.html'))

// The difference this makes in comparition to string concatenation is that it inserts correct delimiters
