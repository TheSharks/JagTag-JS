/* eslint-disable no-extend-native */
const moment = require('moment')

// Native extensions

// Global String.prototype.replace()
String.prototype.replaceAll = function (searchString, replaceString) {
  return this.split(searchString).join(replaceString)
}

// Implement Java hashCode()
String.prototype.hashCode = function () {
  let hash = 0
  if (this.length === 0) return hash
  for (let i = 0; i < this.length; i++) {
    const char = this.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit int
  }
  return hash
}

// Utility functions

// Merge objects within objects to a single object
function mergeObjects (originObject) {
  const all = {}
  for (const o in originObject) {
    Object.assign(all, originObject[o])
  }
  return all
}

// Safe comparison for string-based if conditions
function safeCompare (item1, conditional, item2) {
  switch (conditional) {
    // Built-in
    case '>': return item1 > item2
    case '<': return item1 < item2
    case '>=': return item1 >= item2
    case '<=': return item1 <= item2
    case '==': return item1 == item2 // eslint-disable-line eqeqeq
    case '===': return item1 === item2
    case '!=': return item1 != item2 // eslint-disable-line eqeqeq
    case '!==': return item1 !== item2
    // Custom
    case '?': return new RegExp(item2, 'g').exec(item1) !== null
    default: return false
  }
}

// Get creation time of a Discord snowflake

function getCreationTime (discordSnowflake) {
  // Shamelessly nicked this code from https://github.com/qeled/discordie
  const formatted = (+discordSnowflake / 4194304) + 1420070400000
  return moment(new Date(parseInt(formatted))).utc()
}

exports.mergeObjects = mergeObjects
exports.safeCompare = safeCompare
exports.getCreationTime = getCreationTime
