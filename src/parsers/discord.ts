import { IParserArguments } from '../interfaces/IParserArguments'
import { creationTime } from '../utils'
import { Member, User } from 'eris'
import levenshtein from 'js-levenshtein'

export const user = (args: IParserArguments, ctx: string): string => {
  if (args?.members !== undefined && args?.user !== undefined) return searchBySelector('username', ctx, args.members, args.user)
  else return 'undefined'
}
export const nick = (args: IParserArguments, ctx: string): string => {
  if (args?.members !== undefined && args?.user !== undefined) {
    return searchBySelector('nick', ctx, args.members, args.user, {
      usernameSearch: true
    })
  } else return 'undefined'
}
export const discrim = (args: IParserArguments, ctx: string): string => {
  if (args?.members !== undefined && args?.user !== undefined) {
    return searchBySelector('discriminator', ctx, args.members, args.user, {
      usernameSearch: true
    })
  } else return 'undefined'
}
export const avatar = (args: IParserArguments, ctx: string): string => {
  if (args?.members !== undefined && args?.user !== undefined) {
    return searchBySelector('avatarURL', ctx, args.members, args.user, {
      usernameSearch: true
    })
  } else return 'undefined'
}
export const creation = (args: IParserArguments, ctx: string): string => creationTime(ctx)
export const userid = (args: IParserArguments): string => args?.user !== undefined ? args.user?.id : 'undefined'
export const atuser = (args: IParserArguments): string => args?.user !== undefined ? args.user?.mention : 'undefined'
export const server = (args: IParserArguments): string => args?.guild !== undefined ? args.guild?.name : 'undefined'
export const serverid = (args: IParserArguments): string => args?.guild !== undefined ? args.guild?.id : 'undefined'
export const servercount = (args: IParserArguments): string => args?.guild !== undefined ? `${args.guild?.memberCount}` : 'undefined'
export const servericon = (args: IParserArguments): string => args?.guild !== undefined && args.guild.iconURL !== null ? args.guild?.iconURL : 'undefined'
export const channel = (args: IParserArguments): string => args?.channel !== undefined ? args.channel?.name : 'undefined'
export const channelid = (args: IParserArguments): string => args?.channel !== undefined ? args.channel?.id : 'undefined'
export const randuser = (args: IParserArguments): string => {
  if (Array.isArray(args?.members)) {
    return args.members[Math.floor(Math.random() * args.members.length)].username
  } else throw new TypeError("Can't use randuser if args.members is undefined or not an array")
}
export const randonline = (args: IParserArguments): string => {
  if (Array.isArray(args?.members)) {
    args.members = args.members.filter(x => x.status === 'online')
    return args.members[Math.floor(Math.random() * args.members.length)].username
  } else throw new TypeError("Can't use randonline if args.members is undefined or not an array")
}
export const randchannel = (args: IParserArguments): string => {
  if (Array.isArray(args?.guildChannels)) {
    const channel = args.guildChannels[Math.floor(Math.random() * args.guildChannels.length)]
    return channel !== undefined ? channel.name : 'undefined'
  } else throw new TypeError("Can't use randchannel if args.guildChannels is undefined or not an array")
}

function searchBySelector (searchBy: string, query: string | undefined, list: Member[], author: User | Member, options?: { usernameSearch?: Boolean }): string {
  if (query === undefined) return Reflect.get(author, searchBy)
  const matches = list.map((u) => {
    const result = levenshtein(options?.usernameSearch === true ? u.username : query, Reflect.get(u, searchBy))
    if (result !== -1) return Object.create({ uname: u.username, value: Reflect.get(u, searchBy), distance: result })
    else return null
  })
    .filter((x) => x !== null)
    .sort((a: { distance: number }, b: { distance: number }) => a.distance - b.distance)
    .map((x: { value: any }) => x.value)
  return matches.length > 0 ? matches[0] : 'NO MATCH'
}
