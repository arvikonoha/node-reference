const events = require('events')

const emitter = new events.EventEmitter()

// on is used to assign handlers to the event mentioned as string in the first arguement
// here second arguement is a handler function
emitter.on('event', () => {
  console.log('Event Fired')
})

// reffer logger.js for details on emit
emitter.emit('event')

const Logger = require('./05_logger')

const logger = new Logger()

logger.on('message', data => {
  console.log(`Logger called with the message ${data.message}`)
})

logger.log('Hello')
