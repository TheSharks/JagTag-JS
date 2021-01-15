import Parser from '../src/index'
import { format } from 'date-fns'

describe('Time parser', () => {
  it('Returns current date', () => {
    expect(Parser('{now}')).toBe(new Date().toUTCString())
  })

  it('Returns current date with specified formatting', () => {
    expect(Parser('{now:d.M.yyyy}')).toBe(format(new Date(), 'd.M.yyyy'))
  })

  it('Formats time', () => {
    expect(Parser('{time:1522317740626|dd-MM-yyyy}')).toBe(format(new Date(1522317740626), 'dd-MM-yyyy'))
  })
})
