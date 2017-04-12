class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(arr = null) {
    this.head = null
    this.tail = null
    this.length = 0

    if(arr !== null) {
      arr.forEach((value) => {
        this.append(value)
      })
    }
  }

  append(data) {
    var newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.size += 1
  }
}

module.exports = LinkedList
