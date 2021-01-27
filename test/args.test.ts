import Parser from '../src/index'

describe('Arg parser', () => {
  it('Returns arguments passed to the parser', () => {
    expect(Parser('{args}', { tagArgs: ['arg1', 'arg2'] })).toBe('arg1 arg2')
  })

  it('Returns the length of arguments passed to the parser', () => {
    expect(Parser('{argslen}', { tagArgs: ['arg1', 'arg2'] })).toBe('2')
  })

  it('Returns a specified argument passed to the parser', () => {
    expect(Parser('{arg:0}', { tagArgs: ['arg1', 'arg2'] })).toBe('arg1')
  })

  it('Returns undefined when an out-of-range or invalid argument is accessed', () => {
    expect(Parser('{arg:2} {arg:doot}', { tagArgs: ['arg1', 'arg2'] })).toBe('undefined undefined')
  })

  it('Returns undefined when no arguments are passed to args parsers', () => {
    expect(Parser('{args} {argslen} {arg:0}')).toBe('undefined undefined undefined')
  })
})