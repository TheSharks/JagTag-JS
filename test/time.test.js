/* eslint-disable no-undef */

const JagTagParser = require('../index')
const moment = require('moment')

describe('Time parser', () => {
  it('Returns current date', () => {
    expect(JagTagParser('{now}')).toBe(new Date().toUTCString())
  })

  it('Returns current date with specified formatting', () => {
    expect(JagTagParser('{now:YYYY}')).toBe(new Date().getFullYear().toString())
  })

  it('Formats time', () => {
    expect(JagTagParser(`{time:1522317740626|DD-MM-YYYY}`)).toBe(moment(1522317740626).utc().format('DD-MM-YYYY'))
  })
})
