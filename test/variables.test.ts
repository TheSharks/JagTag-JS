import Parser from '../src/index'

describe('Variable parser', () => {
  it('Gets and sets variables', () => {
    // The randstr mocks a Discord message ID
    expect(Parser('{set:foo|bar}The variable foo is {get:foo}')).toBe('The variable foo is bar')
  })

  it('Allows the same variable to be reused within a single tag', () => {
    expect(Parser('{set:foo|bar}Foo is {get:foo} and is still {get:foo}')).toBe('Foo is bar and is still bar')
  })

  it('Returns undefined if a variable that is not defined is fetched', () => {
    expect(Parser('{get:foo}')).toBe('undefined')
  })

  it('[EX] Advanced manipulation', () => {
    expect(Parser('{set:all|1|2|3|4|5|6|7|}{set:all|{math:{get:all}|-|5|}}{get:all}')).toBe('1|2|3|4|6|7|')
  })
})