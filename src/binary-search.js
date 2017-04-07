function binarySearch(array, item) {
  return binarySearchRecursive(array, item)
}

function binarySearchIterative(array, item) {
  var left = 0, right = array.length - 1, current

  while (left <= right) {
    current = left + ((right - left) / 2)
    if (array[current] === item) {
      return current
    } else {
      if (array[current] > item) {
        right = current - 1
      } else {
        left = current + 1
      }
    }
  }
  return null
}

function binarySearchRecursive(array, item, offset = 0) {
  var current = (array.length - 1) / 2
 
  if(array.length === 0) {
    return null
  }

  if (array[current] === item) {
    return current + offset
  } else if (array[current] < item) {
    var rightArray = array.slice(current + 1, array.length)
    return binarySearchRecursive(rightArray, item, offset + current + 1)
  } else {
    var leftArray = array.slice(0, current)
    return binarySearchRecursive(leftArray, item, offset)
  }
}

module.exports = binarySearch
