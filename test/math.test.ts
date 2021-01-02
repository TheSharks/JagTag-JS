import Parser from '../src/index'

describe('Math', () => {
  it('Addition', () => {
    expect(Parser('{math:2|+|2}')).toBe('4')
  })

  it('Subtraction', () => {
    expect(Parser('{math:2|-|2}')).toBe('0')
  })

  it('Division', () => {
    expect(Parser('{math:4|/|2}')).toBe('2')
  })

  it('Multiplication', () => {
    expect(Parser('{math:2|*|2}')).toBe('4')
  })

  it('Exponentiation', () => {
    expect(Parser('{math:2|^|2}')).toBe('4')
  })

  it('Modulo', () => {
    expect(Parser('{math:3|%|2}')).toBe('1')
  })

  it('Complex', () => {
    expect(Parser('{math:2|+|2|*|3|/|4}')).toBe('3.5')
  })

  it('Nested', () => {
    expect(Parser('{math:{math:2|+|2}|*|3|/|4}')).toBe('3')
  })

  it('[EX] String manipulation - Addition', () => {
    expect(Parser('{math:hello world|+| world}')).toBe('hello world world')
  })

  it('[EX] String manipulation - Subtraction', () => {
    expect(Parser('{math:hello world|-| world}')).toBe('hello')
  })
  
  it('[EX] String manipulation - Complex', () => {
    expect(Parser('{math:5|*|2|+|hello world|-| world}')).toBe('10hello')
  })

  it('[EX] String manipulation - Do nothing on unsupported expressions', () => {
    expect(Parser('{math:hello world|*| world}')).toBe('hello world* world')
  })
})