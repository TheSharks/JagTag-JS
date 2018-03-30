const Loki = require('lokijs')
const db = new Loki('tmp.json')

const variables = db.addCollection('variables')

const parsers = {
  get: (args, name) => {
    let result = variables.findOne({
      name: name,
      createdIn: args.id
    })
    variables.findAndRemove({
      name: name,
      createdIn: args.id
    })
    return result.value || 'NOT FOUND'
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
