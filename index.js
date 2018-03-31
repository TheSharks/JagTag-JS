const parsers = require('./src/parsers/controller')
const mergeObjects = require('./src/utils').mergeObjects

const allParsers = mergeObjects(parsers)

/**
 * Parse a string for JagTag-formatted tags and replace them.
 * @param {String} string String to parse tags from.
 * @param {Object} args Additional arguments to the parser.
 * @param {Array} args.tagArgs Additional arguments from the command. (Passed after initial tag definition)
 * @param {Object} args.author Author object from Eris, the user than ran the command.
 * @param {Object} args.channel Channel object from Eris, the channel in which the command was ran.
 * @param {Object} args.guild Guild object from Eris, the guild in which the command was ran.
 * @param {Array} args.channels Array of Eris channel objects, all channels in the current guild. Used by randchannel. (Recommended: Only pass when necessary)
 * @param {Array} args.members Array of Eris member objects, all members in the current guild. Used by randuser and randonline. (Recommended: Only pass when necessary)
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
