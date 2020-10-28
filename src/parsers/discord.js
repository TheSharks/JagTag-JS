const levenshtein = require('levenshtein-lite')
const getCreationTime = require('../utils').getCreationTime

const parsers = {
  user: (args, str) => authorOrSearchBySelector('username', str, args.author, args.members),
  nick: (args, str) => authorOrSearchBySelector('nick', str, args.author, args.members, { returnValue: true, searchByUsername: true }),
  discrim: (args, str) => authorOrSearchBySelector('discriminator', str, args.author, args.members, { returnValue: true, searchByUsername: true }),
  avatar: (args, str) => authorOrSearchBySelector('avatarURL', str, args.author, args.members, { returnValue: true, searchByUsername: true }),
  creation: (args, str) => getCreationTime(str),
  // The parameters for these must be Eris entities
  userid: args => args.author.id,
  atuser: args => `<@${args.author.id}>`,
  server: args => args.guild.name,
  serverid: args => args.guild.id,
  servercount: args => args.guild.memberCount,
  servericon: args => args.guild.iconURL,
  channel: args => args.channel.name,
  channelid: args => args.channel.id,
  randuser: args => {
    if (!args || !args.members || !Array.isArray(args.members)) throw new Error('Parameter \'members\' for randuser must be an array of Member objects ')
    else {
      args.members = args.members.map(u => u.username)
      return args.members[Math.floor(Math.random() * args.members.length)]
    }
  },
  randonline: args => {
    if (!args || !args.members || !Array.isArray(args.members)) throw new Error('Parameter \'members\' for randonline must be an array of Member objects')
    else {
      args.members = args.members.filter(u => u.status === 'online').map(u => u.username)
      return args.members[Math.floor(Math.random() * args.members.length)] || 'NO USERS ONLINE'
    }
  },
  randchannel: args => {
    if (!args || !args.channels || !Array.isArray(args.channels)) throw new Error('Parameter \'members\' for randchannel must be an array of TextChannel objects')
    else {
      args.channels = args.channels.map(c => c.name)
      return args.channels[Math.floor(Math.random() * args.channels.length)]
    }
  }
}

/**
 * Function to return author name or search properties with a selector.
 * @param {String} searchBy Object property on user/member object to search by. See https://abal.moe/Eris/docs/User and https://abal.moe/Eris/docs/Member.
 * @param {String} searchString String to search with.
 * @param {Object} author Author object from Eris' Message entity.
 * @param {Array<String|Object>} list Array of users/members.
 * @param {Object} options Options object
 * @param {Boolean} options.returnValue Return the value of the search query, not the username.
 * @param {Boolean} options.searchByUsername Search by username, not by value.
 */
function authorOrSearchBySelector (searchBy, searchString, author, list, options) {
  if (!searchString) return author[searchBy]
  else if (!Array.isArray(list)) throw new Error("Parameter 'list' for user/nick/discrim/avatar must be an array of Member objects")
  else {
    list = list.map(u => {
      return {
        uname: u.username,
        [searchBy]: u[searchBy]
      }
    })

    // Match query with list based on Levenshtein distance
    // NOTE: The longer the property to search for, the closer the match must be
    let matches = []
    list.map(i => {
      let comparison
      // Some searches must be performed based on the username, not the value to look up
      options && options.searchByUsername ? comparison = levenshtein(searchString, i.uname, 7) : comparison = levenshtein(searchString, i[searchBy], 7)

      if (comparison !== -1) {
        options && options.returnValue
          ? matches.push({ value: i[searchBy], distance: comparison })
          : matches.push({ value: i.uname, distance: comparison })
      }
    })
    matches = matches.sort((a, b) => a.distance - b.distance).map(m => m.value) // Distance based sort, then map to return value
    return matches[0] || 'NO MATCH'
  }
}

module.exports = parsers
