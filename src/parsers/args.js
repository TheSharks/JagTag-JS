const parsers = {
  args: args => args,
  argslen: args => args.length,
  arg: (args, index) => args[index]
}

module.exports = parsers
