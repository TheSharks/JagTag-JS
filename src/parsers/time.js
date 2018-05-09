const moment = require('moment')

const parsers = {
  now: (args, format) => !format ? new Date().toUTCString() : moment().utc().format(format),
  time: (args, ms, format) => !format ? new Date(+ms).toUTCString() : moment(+ms).utc().format(format)
}

module.exports = parsers
