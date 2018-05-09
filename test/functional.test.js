/* eslint-disable no-undef */

const JagTagParser = require('../index')

describe('Functional parser', () => {
  it('Stores notes that are removed at runtime', () => {
    expect(JagTagParser('{note:test} <= invisible note')).toBe(' <= invisible note')
  })

  it('Chooses an option randomly from a list', () => {
    expect(JagTagParser('{choose:arg1|arg2|arg3}')).toMatch(/arg1|arg2|arg3/gi)
  })

  it('Chooses a number in a range', () => {
    expect(JagTagParser('{range:1|5}')).toMatch(/[1-5]/g)
  })

  it('Executes conditional statements', () => {
    expect(JagTagParser('{if:hello|===|hello|this was true|this was false}')).toBe('this was true')
  })

  it('Executes math', () => {
    expect(JagTagParser('{math:(2 + 2) * 3 / 4}')).toBe('3')
  })

  it('Calculates absolute values', () => {
    expect(JagTagParser('{abs:-5}')).toBe('5')
  })

  it('Floors numbers', () => {
    expect(JagTagParser('{floor:5.5}')).toBe('5')
  })

  it('Ceils numbers', () => {
    expect(JagTagParser('{ceil:5.5}')).toBe('6')
  })

  it('Rounds numbers', () => {
    expect(JagTagParser('{round:5.75}')).toBe('6')
  })

  it('Converts numbers to sines', () => {
    expect(JagTagParser('{sin:1.1}')).toBe('0.8912073600614354')
  })

  it('Converts numbers to cosines', () => {
    expect(JagTagParser('{cos:1.1}')).toBe('0.4535961214255773')
  })

  it('Converts numbers to tangents', () => {
    expect(JagTagParser('{tan:1.1}')).toBe('1.9647596572486523')
  })

  it('Converts number base', () => {
    expect(JagTagParser('{base:4|2}')).toBe('100')
  })
})
