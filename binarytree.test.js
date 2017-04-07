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

describe('Binary Search Tree', () => {
  it('properly intializes', () => {
    var tree = new BinaryTree('heya')

    expect(tree.root.data).toBe('heya')
  })

  it('checks for isEmpty', () => {
    var emptyTree = new BinaryTree(null)
    var nonEmptyTree = new BinaryTree('heya')

    expect(emptyTree.isEmpty()).toBe(true)
    expect(nonEmptyTree.isEmpty()).toBe(false)
  })

  it('properly inserts', () => {
    var tree = new BinaryTree(3)
    tree.insert(2)

    expect(tree.root.left.data).toBe(2)
  })

  it('searches for and finds an element', () => {
    var tree = new BinaryTree(5)
    tree.insert(4)
    tree.insert(1)
    tree.insert(3)

    expect(tree.search(3)).toBe(true)
    expect(tree.search(5)).toBe(true)

    expect(tree.search(8)).toBe(false)
  })
})
