import Parser from '../src/index'

describe('Functional parser', () => {
  it('Stores notes that are removed at runtime', () => {
    expect(Parser('{note:test} <= invisible note')).toBe(' <= invisible note')
  })

  it('Chooses an option randomly from a list', () => {
    expect(Parser('{choose:arg1|arg2|arg3}')).toMatch(/arg1|arg2|arg3/gi)
  })

  it('Chooses a number in a range', () => {
    expect(Parser('{range:1|5}')).toMatch(/[1-5]/g)
  })
  
  it('Calculates absolute values', () => {
    expect(Parser('{abs:-5}')).toBe('5')
  })

  it('Floors numbers', () => {
    expect(Parser('{floor:5.5}')).toBe('5')
  })

  it('Ceils numbers', () => {
    expect(Parser('{ceil:5.5}')).toBe('6')
  })

  it('Rounds numbers', () => {
    expect(Parser('{round:5.75}')).toBe('6')
  })

  it('Converts numbers to sines', () => {
    expect(Parser('{sin:1.1}')).toBe('0.8912073600614354')
  })

  it('Converts numbers to cosines', () => {
    expect(Parser('{cos:1.1}')).toBe('0.4535961214255773')
  })

  it('Converts numbers to tangents', () => {
    expect(Parser('{tan:1.1}')).toBe('1.9647596572486523')
  })

  it('Converts number base', () => {
    expect(Parser('{base:4|2}')).toBe('100')
  })
})