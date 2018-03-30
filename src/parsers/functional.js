const safeCompare = require('../utils').safeCompare

const parsers = {
  note: (args, str) => '', // Could as well pipe it to /dev/null
  choose: function (args, options) { // Using legacy function because access to Function.arguments is required
    args = null // This function does not accept parser-level arguments, so they are nulled just in case
    let choices = [...arguments]
    choices = choices.slice(1) // Remove args
    return choices[Math.floor(Math.random() * choices.length)]
  },
  range: (args, start, end) => {
    start = Math.ceil(start)
    end = Math.floor(end)
    return Math.floor(Math.random() * (end - start) + start)
  },
  if: (args, item1, conditional, item2, truthyCond, falsyCond) => {
    if (safeCompare(item1, conditional, item2)) return truthyCond
    else return falsyCond
  },
  abs: (args, num) => Math.abs(num),
  floor: (args, num) => Math.floor(num),
  ceil: (args, num) => Math.ceil(num),
  round: (args, num) => Math.round(num),
  sin: (args, num) => Math.sin(num),
  cos: (args, num) => Math.cos(num),
  tan: (args, num) => Math.tan(num),
  base: (args, num, base) => parseFloat(num).toString(base)
}

module.exports = parsers
