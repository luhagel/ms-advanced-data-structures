var binarySearch = require('./binary-search')

describe('binary search', () => {

  var testArr = ['Alex', 'Brian', 'Julia', 'Kojin', 'Nabil', 'Nick', 'Winnie']
  
  it('finds an item in an array', () => {
    expect(binarySearch(testArr, 'Alex')).toBe(0)
    expect(binarySearch(testArr, 'Brian')).toBe(1)
    expect(binarySearch(testArr, 'Julia')).toBe(2)
    expect(binarySearch(testArr, 'Kojin')).toBe(3)   
  })

  it('doesn\'t find items not in the array', () => {
    expect(binarySearch(testArr, 'Test')).toBe(null)
    expect(binarySearch(testArr, 'NotHere')).toBe(null)
  })
})
