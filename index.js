const XRegExp = require('xregexp')
const parsers = require('./src/parsers/controller')
const mergeObjects = require('./src/utils').mergeObjects

const allParsers = mergeObjects(parsers)
const matchRecursive = str => XRegExp.matchRecursive(str, '{', '}', 'gi')

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
 * @param {*} _callback Internal callback function. Do not touch or things will break.
 * @returns {String} Parsed string.
 */
function parse (string, args, _callback) {
  if (!string) return undefined // No string
  else {
    const funcRegex = /{(.*?\S(:).*?\S)}/gi // Regex for {name:param}
    const splitRegex = /:(.+)?/gi // Splits the tag only at the first colon (URL colon foolproofing)
    
    const isRootFunc = _callback === undefined

    let tags = matchRecursive(string)

    if (tags === null) return string // Unclosed tag, return unchanged string
    else tags = tags.map(t => `{${t}}`) // Restore curly braces for funcRegex to work

    let parsedString = string // This is modified and eventually returned to the user

    if (!tags) return string
    else {
      for (let tag of tags) {
        let stripped = tag.slice(1, -1) // Remove curly braces

        if (matchRecursive(stripped)) { // Nested tags found
          parse(stripped, args, newString => {
            stripped = newString
          })
          // This is a very complex pattern, see the bottom of the file for notes
        }

        const tagDef = {
          raw: stripped,
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
      if (!isRootFunc) _callback(parsedString)
      else return parsedString
    }
  }
}

/*
NOTES ABOUT PARSE RECURSION
---------------------------

The if (matchRecursive(stripped)) conditional serves to achieve parsing of nested tags from the deepest tag upwards,
according to the common mathematical algorithm of calcalating the innermost bracket first.

The parse function is called recursively in this conditional. On each iteration, a check is performed if there are
further tags to be found in the already stripped tag. If some are found, the parse function is called again. This
is repeated until the lowermost tag is reached, at which point the if condition no longer fires.

At this point the code starts parsing each tag and performing callbacks, thus working its way up from the bottom.
When the function reaches the point where the _callback function is undefined (isRootFunc), it will return the
complete string.
*/

module.exports = parse
