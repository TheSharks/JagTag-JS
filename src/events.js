// Event emitter system to avoid exposing the database to the end user
const EventEmitter = require('events')

class Dispatcher extends EventEmitter {
  clearTags (messageId) {
    this.emit('CLEAR_TAGS', messageId)
  }
}

const events = new Dispatcher()

module.exports = events
