/* eslint-disable no-undef */

const JagTagParser = require('../index')

describe('Arg parser', () => {
  it('Returns arguments passed to the parser', () => {
    expect(JagTagParser('{args}', ['arg1', 'arg2'])).toBe('arg1,arg2')
  })

  it('Returns the length of arguments passed to the parser', () => {
    expect(JagTagParser('{argslen}', ['arg1', 'arg2'])).toBe('2')
  })

  it('Returns a specified argument passed to the parser', () => {
    expect(JagTagParser('{arg:0}', ['arg1', 'arg2'])).toBe('arg1')
  })
})
