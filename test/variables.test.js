/* eslint-disable no-undef */

const JagTagParser = require('../index')
const randstr = require('randstr')

describe('Variable parser', () => {
  it('Gets and sets variables', () => {
    // The randstr mocks a Discord message ID
    expect(JagTagParser('{set:foo|bar}The variable foo is {get:foo}', { id: randstr(18) })).toBe('The variable foo is bar')
  })

  it('Returns undefined if a variable that is not defined is fetched', () => {
    expect(JagTagParser('{get:foo}', { id: randstr(18) })).toBe('undefined')
  })

  it('Returns undefined if a variable is fetched before setting it', () => {
    expect(JagTagParser('{get:foo} {set:foo}', { id: randstr(18) })).toBe('undefined ')
  })
})
