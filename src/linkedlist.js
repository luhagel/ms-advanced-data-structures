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

  items() {
    var items = []

    current = this.head
    while(current !== null) {
      items.append(current.data)
      current = current.next
    }

    return items
  }

  isEmpty() {
    return this.head === null
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

  prepend(data) {

  }

  find(value) {
    current = this.head
    while (current !== null) {
      if (current.data === value) {
        return true
      }
      current = current.next
    }

    return false
  }

  delete(value) {
    
  }
}

module.exports = LinkedList
