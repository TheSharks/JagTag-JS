import Parser from '../src/index'

describe('String manipulation', () => {
  it('Converts to uppercase', () => {
    expect(Parser('{upper:hello}')).toBe('HELLO')
  })

  it('Converts to lowercase', () => {
    expect(Parser('{lower:HELLO}')).toBe('hello')
  })

  it('Determines string length', () => {
    expect(Parser('{length:hello}')).toBe('5')
  })

  it('Encodes URI components', () => {
    expect(Parser('{url:hello world}')).toBe('hello%20world')
  })

  it('Replaces text', () => {
    expect(Parser('{replace:hey|hello|hey world}')).toBe('hello world')
  })

  it('Extracts substrings', () => {
    expect(Parser('{substring:2|6|something}')).toBe('meth')
  })

  it('Trims white space', () => {
    // This also trims newlines, but Jest does not parse it properly for some reason (See https://repl.it/@LWTech/Whitespace-Replacer)
    expect(Parser('{oneline:lots     of     whitespace}')).toBe('lots of whitespace')
  })

  it('Hashes characters', () => {
    expect(Parser('{hash:test text}')).toBe('-1238303749')
  })
})