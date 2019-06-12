const EventEmitter = require('events')
// Eventemitter is a core node module which is responsible for event handling in most of the objects in node

// uuid is a package, ie has all the interdependant modules required for the given module
// uuid.v4() generates a random id on every call
const uuid = require('uuid')

class Logger extends EventEmitter {
  log (message) {
    // emit just triggers an event and is a method of EventEmittor
    this.emit('message', {
      message,
      id: uuid.v4()
    })
  }
}

// please go to event_demo for seeng Logger being implemented

module.exports = Logger
