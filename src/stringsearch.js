var stringSearch = {
  find: function(text, pattern) {
    return findIterative(text, pattern)
  },

  findIndex: function(text, pattern) {
    return findIndexIterative(text, pattern)
  },
}

function findIterative(text, pattern) {
  var chars = text.split('')

  for (var i = 0; i < (chars.length + 1 - pattern.length); i++) {
    if (chars.slice(i, i + pattern.length).join('') === pattern) {
      return true
    }
  }
  return false
}

function findIndexIterative(text, pattern) {
  var chars = text.split('')

  for (var i = 0; i < (chars.length + 1 - pattern.length); i++) {
    if (chars.slice(i, i + pattern.length).join('') === pattern) {
      return i
    }
  }
  return false
}

function findRecursive(text, pattern, offset = 0) {
  var chars = text.split('')

  if (text.length < offset) {
    return false
  }

  if (chars.slice(offset, offset + pattern.length).join('') === pattern) {
    return true
  } else {
    return findRecursive(text, pattern, offset + 1)
  }
}

function findIndexRecursive(text, pattern, offset = 0) {
  var chars = text.split('')

  if (text.length < offset) {
    return false
  }

  if (chars.slice(offset, offset + pattern.length).join('') === pattern) {
    return offset
  } else {
    return findIndexRecursive(text, pattern, offset + 1)
  }
}

module.exports = stringSearch
