var stringSearch = require('./stringsearch')

describe('find pattern in string', () => {
  it('finds a pattern in a string', () => {
    expect(stringSearch.find('Hi there!', 'the')).toBe(true)
    expect(stringSearch.find('Hi there!', 'Hi')).toBe(true)
    expect(stringSearch.find('Hi there!', 'there!')).toBe(true)
  })

  it('doen\'t find nonexistant patterns in a string', () => {
    expect(stringSearch.find('Hi there!', 'MARA')).toBe(false)
    expect(stringSearch.find('Hi there!', 'Defenitely not in here')).toBe(false)
  })
})

describe('find index of pattern in string', () => {
  it('finds a pattern index in a string', () => {
    expect(stringSearch.findIndex('Hi there!', 'the')).toBe(3)
    expect(stringSearch.findIndex('Hi there!', 'Hi')).toBe(0)
    expect(stringSearch.findIndex('Hi there!', 'there!')).toBe(3)
  })

  it('doen\'t find nonexistant patterns in a string', () => {
    expect(stringSearch.findIndex('Hi there!', 'MARA')).toBe(false)
    expect(stringSearch.findIndex('Hi there!', 'Defenitely not in here')).toBe(false)
  })
})
