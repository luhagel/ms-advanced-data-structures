var Jest = require('jest')
var LinkedList = require('./linkedlist')

describe('Linked List', () => {
  it('constructs and returns a new list object', () => {
    var testList = new LinkedList()
    expect(testList).toBeDefined()
    expect(testList.head).toEqual(null)
    expect(testList.tail).toEqual(null)
  })
})
