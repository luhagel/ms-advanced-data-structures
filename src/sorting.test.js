var Jest = require('jest')
var Sorter = require('./sorting')

describe('bubble sort', () => {
  it('returns an empty array if one is supplied', () => {
    expect(Sorter.bubbleSort([])).toEqual([])
  })

  it('sorts an array of integers', () => {
    expect(Sorter.bubbleSort([3, 2, 1])).toEqual([1, 2, 3])
  })

  it('sorts an array of chars', () => {
    expect(Sorter.bubbleSort(['F', 'Q', 'G'])).toEqual(['F', 'G', 'Q'])
  })
})

describe('selection sort', () => {
  it('returns an empty array if one is supplied', () => {
    expect(Sorter.selectionSort([])).toEqual([])
  })

  it('sorts an array of integers', () => {
    expect(Sorter.selectionSort([3, 2, 1])).toEqual([1, 2, 3])
  })

  it('sorts an array of chars', () => {
    expect(Sorter.selectionSort(['F', 'Q', 'G'])).toEqual(['F', 'G', 'Q'])
  })
})

describe('insertion sort', () => {
  it('returns an empty array if one is supplied', () => {
    expect(Sorter.insertionSort([])).toEqual([])
  })

  it('sorts an array of integers', () => {
    expect(Sorter.insertionSort([3, 2, 1])).toEqual([1, 2, 3])
  })

  it('sorts an array of chars', () => {
    expect(Sorter.insertionSort(['F', 'Q', 'G'])).toEqual(['F', 'G', 'Q'])
  })
})
