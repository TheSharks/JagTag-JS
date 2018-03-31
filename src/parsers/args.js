const parsers = {
  args: args => args.tagArgs.join(', '),
  argslen: args => args.tagArgs.length,
  arg: (args, index) => args.tagArgs[index]
}

module.exports = parsers
