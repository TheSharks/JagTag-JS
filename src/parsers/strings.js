const parsers = {
  lower: (args, str) => str.toLowerCase(),
  upper: (args, str) => str.toUpperCase(),
  length: (args, str) => str.length,
  url: (args, str) => encodeURI(str),
  replace: (args, toReplace, replaceWith, str) => str.replace(toReplace, replaceWith), // Regex supported
  substring: (args, start, end, str) => str.substring(start, end),
  oneline: (args, str) => str.replace(/\s+/g, ' '), // Also replaces newlines
  hash: (args, str) => str.hashCode(str)
}

module.exports = parsers
