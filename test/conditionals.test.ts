import Parser from '../src/index'

describe('Conditionals', () => {
  it('Equality', () => {
    expect(Parser('{if:hello|=|hello|then:this was true|else:this was false} and {if:hell|=|hello|then:this was true|else:this was false}')).toBe('this was true and this was false')
  })

  it('Greater then', () => {
    expect(Parser('{if:hello|>|hell|then:this was true|else:this was false} and {if:hell|>|hello|then:this was true|else:this was false}')).toBe('this was true and this was false')
  })

  it('Less then', () => {
    expect(Parser('{if:hell|<|hello|then:this was true|else:this was false} and {if:hello|<|hell|then:this was true|else:this was false}')).toBe('this was true and this was false')
  })

  it('Levenshtein', () => {
    expect(Parser('{if:hell|~|hello|then:this was true|else:this was false} and {if:hello|~|world|then:this was true|else:this was false}')).toBe('this was true and this was false')
  })

  it('Regex', () => {
    expect(Parser('{if:this|?|th.*|then:this was true|else:this was false} and {if:hello|?|world|then:this was true|else:this was false}')).toBe('this was true and this was false')
  })

  it('[EX] Invalid if-else statements are always false', () => {
    expect(Parser('{if:hello|$|hello|then:this was true|else:this was false}')).toBe('this was false')
  })
})