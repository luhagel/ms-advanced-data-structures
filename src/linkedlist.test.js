var Jest = require('jest')
var LinkedList = require('./linkedlist')

describe('Linked List', () => {
  it('constructs and returns a new list object', () => {
    var testList = new LinkedList()
    expect(testList).toBeDefined()
    expect(testList.head).toEqual(null)
    expect(testList.tail).toEqual(null)
  })

  it('constructs a list containing he supplied initial values', () => {
    var testList = new LinkedList([1, 2, 3])
    expect(testList.head.data).toEqual(1)
    expect(testList.tail.data).toEqual(3)
  })

  it('returns an array of the items contained', () => {
    var testList = new LinkedList()
    expect(testList.items()).toEqual([])
    testList.append(1)
    expect(testList.items()).toEqual([1])
    testList.append(2)
    expect(testList.items()).toEqual([1, 2])
  })

  it('tracks the number of items in the list', () => {
    var testList = new LinkedList()
    expect(testList.length).toEqual(0)
    testList.append(1)
    expect(testList.length).toEqual(1)
    testList.append(2)
    expect(testList.length).toEqual(2)

    testList.delete(1)
    expect(testList.length).toEqual(1)
  })

  it('returns value at index', () => {
    var testList = new LinkedList([1, 2, 3, 4, 5])

    expect(testList.getAtIndex(0)).toEqual(1)
    expect(testList.getAtIndex(2)).toEqual(3)
    expect(testList.getAtIndex(4)).toEqual(5)
  })
})
