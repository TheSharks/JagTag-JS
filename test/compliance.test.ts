import Parser from '../src/index'


describe('Spec compliance', () => {
  it('[HP] Replaces a valid tag', () => {
    expect(Parser('string with {upper:test}')).toBe('string with TEST')
  })

  it('[HP] Replaces a valid multi-argument tag', () => {
    expect(Parser('{replace:test|test2|this is a test}')).toBe('this is a test2')
  })

  it('[HP] Replaces several valid tags', () => {
    expect(Parser('string with {upper:test1} and {lower:TEST2}')).toBe('string with TEST1 and test2')
  })

  it('[EX] Replaces nested tags', () => {
    expect(Parser('{upper:{lower:TEST}}')).toBe('TEST')
  })

  it('[EX] Replaces several nested tags', () => {
    expect(Parser('{upper:{lower:{upper:test}}} {lower:{upper:{lower:test}}}')).toBe('TEST test')
  })

  it('[EX] Returns unchanged string when no tags are present', () => {
    expect(Parser('notags')).toBe('notags')
  })

  it('[EX] Does not replace invalid tags', () => {
    expect(Parser('string with {faketag}')).toBe('string with {faketag}')
  })

  it('[EX] Does not parse many invalid tags', () => {
    expect(Parser('{faketag}{faketag}{faketag}')).toBe('{faketag}{faketag}{faketag}')
  })

  it('[EX] Does not replace tags from disabled parsers', () => {
    expect(Parser('{upper:test}', { disabledParsers: ['upper'] })).toBe('{upper:test}')
  })

  it('[EX] Does not parse if a tag is left unclosed', () => {
    expect(Parser('string with {upper:test} and unclosed {args')).toBe('string with TEST and unclosed {args')
  })

  it('[EX] Does not replace invalid nested tags within valid ones', () => {
    expect(Parser('{upper:{doot:TEST}}')).toBe('{DOOT:TEST}')
  })
})