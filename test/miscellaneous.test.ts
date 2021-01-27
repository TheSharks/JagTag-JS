import Parser from '../src/index'

describe('Miscellaneous', () => {
  it('UUID', () => {
    expect(Parser('{uuid}')).toMatch(/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/)
  })
})
