var BinaryNode = require('./binaryNode')

class BinarySearchTree {
  constructor(rootData) {
    this.root = new BinaryNode(rootData)
  }

  isEmpty() {
    return this.root.data === null
  }

  insert(data, node = this.root) {
    if (node.data === null || node.data === data) {
      node.data = data
      return
    }

    if(node.data > data) {
      if(node.left === null){
        node.left = new BinaryNode(data)
      } else {
        return this.insert(data, node.left)
      }
    }

    if (node.right === null) {
      node.right = new BinaryNode(data)
    } else {
      return this.insert(data, node.right)
    }
  }

  search(data, node = this.root) {
    if(node !== null) {
      if(node.data === data) {
        return true
      } else if (node.isLeaf()) {
        return false
      } else {
        return this.search(data, node.right) || this.search(data, node.left)
      }
    }
    return false   
  }
}

module.exports = BinarySearchTree
