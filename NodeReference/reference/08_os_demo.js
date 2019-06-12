const os = require('os')
// os is a node core module

console.log(os.platform())

// for knowing the platform for operating system

console.log(os.arch())

// 64b or 32b

console.log(os.cpus())

// Returns the information on cpu cores

console.log(os.freemem())

// Returns free memory

console.log(os.totalmem())

// Returns total memory

console.log(os.homedir())

// Returns home directory

console.log(os.uptime())

// Returns the time for the pc has been up

// refer index.js to see how to create a basic server using plain node