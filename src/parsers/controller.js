// Parser controller - recursively requires the contents of this directory
const requireDirectory = require('require-directory')

module.exports = requireDirectory(module)
