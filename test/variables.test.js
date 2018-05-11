/* eslint-disable no-undef */

const JagTagParser = require('../index')
const randstr = require('randstr')

describe('Variable parser', () => {
  it('Gets and sets variables', () => {
    // The randstr mocks a Discord message ID
    expect(JagTagParser('{set:foo|bar}The variable foo is {get:foo}', { id: randstr(18) })).toBe('The variable foo is bar')
  })

  it('Allows the same variable to be reused within a single tag', () => {
    expect(JagTagParser('{set:foo|bar}Foo is {get:foo} and is still {get:foo}', { id: randstr(18) })).toBe('Foo is bar and is still bar')
  })

  it('Returns undefined if a variable that is not defined is fetched', () => {
    expect(JagTagParser('{get:foo}', { id: randstr(18) })).toBe('undefined')
  })

  it('Returns undefined if a variable is fetched before setting it', () => {
    expect(JagTagParser('{get:foo} {set:foo}', { id: randstr(18) })).toBe('undefined ')
  })
})
