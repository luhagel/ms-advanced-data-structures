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

  delete(data, node = this.root) {
    if (node !== null) {
      if (node.data === data) {
        node.data = null
        return
      } else {
        this.delete(data, node.right)
        this.delete(data, node.left)
      }
    }
  }

  preOrder(callback, node = this.root) {
    if (node !== null) {
      callback(node.data)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  inOrder(callback, node = this.root) {
    if (node !== null) {
      this.preOrder(node.left)
      callback(node.data)
      this.preOrder(node.right)
    }
  }

  postOrder(callback, node = this.root) {
    if (node !== null) {
      this.preOrder(node.left)
      this.preOrder(node.right)
      callback(node.data)
    }
  }
}

module.exports = BinarySearchTree
