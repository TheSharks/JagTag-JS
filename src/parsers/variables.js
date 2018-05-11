const Loki = require('lokijs')
const events = require('../events')
const db = new Loki('../../jtvars.data')

const variables = db.addCollection('variables')

events.on('CLEAR_TAGS', messageId => {
  variables.findAndRemove({
    createdIn: messageId
  })
})

const parsers = {
  get: (args, name) => {
    let result = variables.findOne({
      name: name,
      createdIn: args.id
    })
    return result && result.value ? result.value : 'undefined'
  },
  set: (args, name, value) => {
    variables.insert({
      name: name,
      value: value,
      createdIn: args.id
    })
    return ''
  }
}

module.exports = parsers
