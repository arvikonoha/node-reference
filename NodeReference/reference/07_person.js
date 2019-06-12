// This is an example of node module

// module.exports is an object that is made available to any other module that wants to use this module

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  greeting () {
    console.log('Hello ' + this.name)
  }
}

module.exports = Person

// This is how a node module is exported for external use
