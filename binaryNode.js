class BinaryNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  isLeaf() {
    return this.right === null && this.left === null
  }

  isInternal() {
    return this.right !== null || this.left !== null
  }
}

module.exports = BinaryNode
