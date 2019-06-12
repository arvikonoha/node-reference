// node is an open source javascript runtime which lets js programs to be run on a computer using google chrome's v8 engine

// node is nonblocking, single threaded and asynchrounous i.e events are queued and served while rest of the script runs as they occur this makes node run faster and effiently

// every javascript file in node is a module (common js system) it is run as a immedietly invoked function expression for ex: (function(){ console.log("Hello")})

// it receives the following parameters as global variables

// module,__filename,__dirname there are couple more which i forgot xD

// refer logger.js or Person.js for knowing how to export a module to be used in other module

// url module is a core node module

const url = require('url')
const myUrl = new URL('http://myWebsite.com/hello.js?id=100&status=active')

// url is a core node module that deals with urls

console.log(myUrl.href)
console.log(myUrl.toString())

// Displaying the url as it is

console.log(myUrl.host)
console.log(myUrl.hostname)

// The host returns hostname followed by port used while the latter just returns the hostname

console.log(myUrl.search)

// Returns anything after ? [and including]

console.log(myUrl.pathname)

// Doest exactly what it says [what follows the domain name]

console.log(myUrl.searchParams)

// returns an object including querries as key value pairs and any thing can be added to querries as well

// consider this example url www.google.com?name=aravind&email=abc@gmail.com
// here name and email are the keys in searchParams and aravind and email are the values

//  for each works on it as it would on an object

// there used to be a parser for this but now its automatically parsed 