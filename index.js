const parsers = require('./src/parsers/controller')
const mergeObjects = require('./src/utils').mergeObjects

const allParsers = mergeObjects(parsers)

/**
 * Parse a string for JagTag-formatted tags and replace them.
 * @param {String} string String to parse tags from.
 * @param {Array} args Additional arguments to the parser.
 * @returns {String} Parsed string.
 */
function parse (string, args) {
  if (!string) return undefined // No string
  else {
    const baseRegex = /{(.*?\S)}/gi // Regex for {}
    const funcRegex = /{(.*?\S(:).*?\S)}/gi // Regex for {name:param}
    const splitRegex = /:(.+)?/gi // Splits the tag only at the first comma (URL colon foolproofing)

    const tags = string.match(baseRegex)

    let parsedString = string // This is modified and returned to the user

    if (!tags) return string // No matches
    else {
      for (let tag of tags) {
        let stripped = tag.slice(1, -1)
        // Preprocessing to prevent colons in URLs creating problems for the URL parser
        const tagDef = {
          raw: stripped, // Remove curly braces
          name: tag.match(funcRegex) !== null ? String(stripped.split(splitRegex).splice(0, 1)) : stripped,
          func: tag.match(funcRegex) !== null ? stripped.split(splitRegex).splice(1, 1)[0].split('|') : []
          // Arguments are separated by pipes which calls for an another split
          // The arguments are in an array from which the name is extracted, hence using the 0th element
        }

        // If parser exists, run function - otherwise leave tag unchanged
        // If errors are encountered, return unchanged tag
        let result
        try {
          result = allParsers.hasOwnProperty(tagDef.name) ? allParsers[tagDef.name](args || null, ...tagDef.func) : tag
        } catch (e) {
          console.error(e)
          result = tag
        }

        // Replace tags in the parsed string
        parsedString = parsedString.replaceAll(tag, result)
      }
      return parsedString
    }
  }
}

module.exports = parse
