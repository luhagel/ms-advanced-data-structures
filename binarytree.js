var BinaryNode = require('./binaryNode')

class BinarySearchTree {
  constructor(rootData) {
    this.root = new BinaryNode(rootData)
  }
}

module.exports = BinarySearchTree
