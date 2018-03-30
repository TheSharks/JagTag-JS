/* eslint-disable no-undef */

const JagTagParser = require('../index')

describe('Parser', () => {
  it('[HP] Replaces a valid tag', () => {
    expect(JagTagParser('string with {upper:test}')).toBe('string with TEST')
  })

  it('[HP] Replaces a valid multi-argument tag', () => {
    expect(JagTagParser('{replace:test|test2|this is a test}')).toBe('this is a test2')
  })

  it('[HP] Replaces several valid tags', () => {
    expect(JagTagParser('string with {upper:test1} and {lower:TEST2}')).toBe('string with TEST1 and test2')
  })

  it('[EX] Returns undefined when no string is passed', () => {
    expect(JagTagParser()).toBe(undefined)
  })

  it('[EX] Returns unchanged string when no tags are present', () => {
    expect(JagTagParser('notags')).toBe('notags')
  })

  it('[EX] Does not replace invalid tags', () => {
    expect(JagTagParser('string with {faketag} and unclosed {args')).toBe('string with {faketag} and unclosed {args')
  })
})
