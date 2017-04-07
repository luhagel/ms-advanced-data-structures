var BinaryTree = require('./binarytree')
var BinaryNode = require('./binaryNode')

describe('Binary Node', () => {
  it('creates a new node', () => {
    var node = new BinaryNode('test')
    expect(node.data).toEqual('test')
  })

  it('correctly checks for isLeaf', () => {
    var leaf = new BinaryNode('root')
    var internal = new BinaryNode('root')
    internal.left = 'leftNode'
    internal.right = 'rightNode'

    expect(leaf.isLeaf()).toBe(true)
    expect(internal.isLeaf()).toBe(false)
  })

  it('correctly checks for isInternal', () => {
    var leaf = new BinaryNode('root')
    var internal1 = new BinaryNode('root')
    internal1.left = 'leftNode'
    internal1.right = 'rightNode'
    var internal2 = new BinaryNode('root')
    internal2.left = 'leftNode'

    expect(internal1.isInternal()).toBe(true)
    expect(internal2.isInternal()).toBe(true)

    expect(leaf.isInternal()).toBe(false)
  })
})
