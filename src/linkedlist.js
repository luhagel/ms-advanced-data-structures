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

    var current = this.head
    while(current !== null) {
      items.push(current.data)
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
    this.length += 1
  }

  prepend(data) {
    var newNode = new Node(data)
    if (this.tail === null) {
      this.tail = newNode
    } else {
      newNode.next = this.head
    }
    this.head = newNode
    this.length += 1
  }

  find(value) {
    var current = this.head
    while (current !== null) {
      if (current.data === value) {
        return true
      }
      current = current.next
    }

    return false
  }

  delete(value) {
    var current = this.head
    var prev = null
    while (current !== null) {
      if (current.data === value) {
        if (prev === null) {
          this.head = current.next
        } else if (current.next === null){
          this.tail = current.prev
          prev.next = null
        } else {
          prev.next = current.next
        }
        current.next = null
        this.length -= 1
      }
      prev = current
      current = current.next
    }
  }
}

module.exports = LinkedList
