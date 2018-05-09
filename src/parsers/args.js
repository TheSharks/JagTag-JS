const R = require('../ramda.path')

// Check if the object properties exist first, less verbose than chaining tons of && logic
const exists = args => R.path(['tagArgs'], args)

const parsers = {
  args: args => exists(args) && args.tagArgs.length > 0 ? args.tagArgs.join(', ') : 'undefined',
  argslen: args => exists(args) ? args.tagArgs.length : 'undefined',
  arg: (args, index) => exists(args) && args.tagArgs[index] ? args.tagArgs[index] : 'undefined'
}

module.exports = parsers
