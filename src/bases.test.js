var Jest = require('jest')
var BaseCalc = require('./bases')

describe('BaseCalc Encoding & Decoding', () => {
  it('returns 0 when the input is an empty string', () => {
    expect(BaseCalc.decode('', 12)).toBe(0)
  })

  it('converts from base 2 to base 10', () => {
    expect(BaseCalc.decode('1010', 2)).toBe(10)
    expect(BaseCalc.decode('1011', 2)).toBe(11)
  })

  it('converts from base 16 to base 10', () => {
    expect(BaseCalc.decode('A', 16)).toBe(10)
    expect(BaseCalc.decode('AA', 16)).toBe(170)
  })
})
