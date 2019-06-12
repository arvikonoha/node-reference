// core node module for file handling
const fs = require('fs')

// core node module for functions related to path
const path = require('path')


// first arguement in file methods is file path0( refer path_demo.js for more info on path.join() method

// Make directory, second arguement may include aditional options object err thrown is displayed on the console

fs.mkdir(path.join(__dirname, 'test'), {}, err => {
  if (err) throw err
  else {
    console.log('Directory created ')
  }
})

// create and write to file

fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world', err => {
  if (err) throw err
  else {
    console.log('File created')
  }
})

// writeFile can overwrite the existing file there is already something written in it

fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Goodbye world', err => {
  if (err) throw err
  else {
    console.log('File created')
  }
})

// Append file appends the second arguement to the filecontent

fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' , Nah im kidding ', err => {
  if (err) throw err
  else {
    console.log('Content appended')
  }
})

// Read file, requires the second arguement as encoding like ascii or utf-8 to correctly read the data

fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data) => {
  if (err) throw err
  else {
    console.log(data);
  }
})

// Rename file

fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'goodbye.txt'), err => {
  if (err) throw err
  else {
    console.log('File renamed')
  }
})
