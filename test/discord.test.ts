// @ts-nocheck - i really cannot be bothered to infer all these darn types

import { randstr } from './utils/randstr'
import { creationTime } from '../src/utils'
import Parser from '../src/index'

describe('Discord expression parser', () => {
  it('Returns user username or searches for a user with a specified username', () => {
    expect(Parser('I am {user} and that is {user:nenk}', {
      user: mockUser,
      members: mockUsers
    })).toBe('I am LWTech and that is Nenkai')
  })

  it('Returns user nickname or returns the nickname of a user based on a username search', () => {
    expect(Parser('My nick is {nick} and their is {nick:zaz}', {
      user: mockUser,
      members: mockUsers
    })).toMatch(/My nick is LW and their is (uINT32|SaltyDev|Webscale|Wallaby|RegexGod)/gi)
  })

  it('Returns user discriminator or returns the discrim of a user based on a username search', () => {
    expect(Parser('My discriminator is {discrim} and I can find Dougleys {discrim:doug} discrim', {
      user: mockUser,
      members: mockUsers
    })).toMatch(/My discriminator is 0005 and I can find Dougleys ([0-9]{4}) discrim/gi)
  })

  it('Returns user avatar URL or returns the avatar URL for a specified username', () => {
    expect(Parser('My avatar URL is {avatar} and Dougleys is {avatar:doug}', {
      user: mockUser,
      members: mockUsers
    })).toMatch(/My avatar URL is https:\/\/cdn\.discordapp\.com\/avatars\/152664793587777537\/a_9fac7b06c5256cc37f059afe93294d28\.gif and Dougleys is https:\/\/cdn\.discordapp\.com\/avatars\/([0-9]){17,18}\/[a-zA-Z0-9]{32}\.jpg/gi)
  })

  it('Returns creation time of Discord snowflakes', () => {
    expect(Parser('{creation:152664793587777537}')).toBe('Fri, 26 Feb 2016 06:35:23 GMT')
  })

  it('Returns user ID', () => {
    expect(Parser('{userid}', { user: mockUser })).toBe(mockUser.id)
  })

  it('Returns user mention', () => {
    expect(Parser('{atuser}', { user: mockUser })).toBe(mockUser.mention)
  })

  it('Returns the name of the current server', () => {
    expect(Parser('{server}', { guild: mockServer })).toBe(mockServer.name)
  })

  it('Returns the ID of the current server', () => {
    expect(Parser('{serverid}', { guild: mockServer })).toBe(mockServer.id)
  })

  it('Returns the member count of the current server', () => {
    expect(Parser('{servercount}', { guild: mockServer })).toBe(mockServer.memberCount.toString())
  })

  it('Returns the icon URL of the current server', () => {
    expect(Parser('{servericon}', { guild: mockServer })).toBe(mockServer.iconURL)
  })

  it('Returns the name of the current channel', () => {
    expect(Parser('{channel}', { channel: mockChannel })).toBe(mockChannel.name)
  })

  it('Returns the ID of the current channel', () => {
    expect(Parser('{channelid}', { channel: mockChannel })).toBe(mockChannel.id)
  })

  it('Returns a random user', () => {
    expect(Parser('{randuser}', { members: mockUsers })).toMatch(/LWTech|Dougley|Zaza|Piero|Nenkai/gi)
  })

  it('Returns a random online user or a warning when nobody is online', () => {
    expect(Parser('{randonline}', { members: mockUsers })).toMatch(/LWTech|Dougley|Zaza|Piero|Nenkai|NO USERS ONLINE/gi)
  })

  it('Returns a random channel', () => {
    expect(Parser('{randchannel}', { guildChannels: Array.from(Object.values(mockServer.channels)) })).toMatch(/newsfeed|projects|meta|offtopic|general/gi)
  })

  it('Returns unchanged strings when randomisers are called without the members prop', () => {
    expect(Parser('{randuser}{randonline}{randchannel}')).toBe('{randuser}{randonline}{randchannel}')
  })
})


// Mock User object from Eris (With added nickname and status properties from Member)
const mockUser = {
  bot: false,
  id: '152664793587777537',
  username: 'LWTech',
  nick: 'LW',
  discriminator: '0005',
  mention: '<@152664793587777537>',
  status: 'online',
  avatar: 'a_9fac7b06c5256cc37f059afe93294d28',
  avatarURL: 'https://cdn.discordapp.com/avatars/152664793587777537/a_9fac7b06c5256cc37f059afe93294d28.gif',
  staticAvatarURL: 'https://cdn.discordapp.com/avatars/152664793587777537/a_9fac7b06c5256cc37f059afe93294d28.jpg',
  defaultAvatar: '6debd47ed13483642cf09e832ed0bc1b',
  defaultAvatarURL: 'https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png',
  createdAt: 1456468523166.0312
}

// Partially mock Guild object from Eris
const mockServer = {
  name: 'The Coding Den',
  id: '172018499005317120',
  memberCount: 316,
  iconURL: 'https://cdn.discordapp.com/icons/348704514989228032/24a89ffb5d1b4b920a9d3991e90c2f09.jpg',
  channels: {
    '172057906823299072': { id: '172057906823299072', name: 'newsfeed' },
    '178933262381613057': { id: '178933262381613057', name: 'projects' },
    '359110876004876288': { id: '359110876004876288', name: 'meta' },
    '172645867570987008': { id: '172645867570987008', name: 'offtopic' },
    '172018499005317120': { id: '172018499005317120', name: 'general' }
  }
}

// Partially mock TextChannel object from Eris
const mockChannel = {
  name: 'general',
  id: '172018499005317120'
}

const mockUsers = createList([
  'LWTech',
  'Dougley',
  'Zaza',
  'Piero',
  'Nenkai'
])

// Function to simplify creation of mock users
function createList (stringList: any[]) {
  const newList: object[] = []
  const ids = [
    '152664793587777537',
    '107904023901777920',
    '96554096349175808',
    '212445217763229699',
    '150293555271696384'
  ]
  const nicknames = [
    'uINT32',
    'SaltyDev',
    'Webscale',
    'Wallaby',
    'RegexGod'
  ]

  stringList.map((x: any) => { // Using legacy function to access 'this'
    const id = ids[rng(5)]
    const nick = nicknames[rng(5)]
    const avatar = randstr(32)
    const defaultAvatar = randstr(32)
    newList.push({
      bot: [true, false][rng(2)],
      id: id,
      username: x,
      nick: nick,
      discriminator: randstr(4, '0123456789'),
      mention: `<@${id}>`,
      status: ['online', 'idle', 'offline'][rng(3)],
      avatar: randstr(32),
      defaultAvatar: randstr(32),
      avatarURL: `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`,
      staticAvatarURL: `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`,
      defaultAvatarURL: `https://discordapp.com/assets/${defaultAvatar}`,
      createdAt: creationTime(id)
    })
  })

  return newList
}

// Shorter random selection
function rng (optionsAmount: number) {
  return Math.floor(Math.random() * optionsAmount)
}
