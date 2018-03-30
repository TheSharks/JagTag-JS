/* eslint-disable no-undef */

const JagTagParser = require('../index')
const randstr = require('randstr')

describe('Variable parser', () => {
  it('Sets and gets variables', () => {
    expect(JagTagParser('{set:foo|bar}The variable foo is {get:foo}', { id: randstr(18) })).toBe('The variable foo is bar')
  })
})
