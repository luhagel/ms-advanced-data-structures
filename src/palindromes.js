function isPalindrome(text) {
  return isPalindromeIterative(text)
}

function isPalindromeIterative(text) {
  var chars = text.split('')
  chars.reverse()
  var reversedText = chars.join('')

  if (cleanString(text) === cleanString(reversedText)) {
    // console.log(text + ' is a palindrome')
    return true
  }
  // console.log(text + ' is not a palindrome')
  return false
} 

function isPalindromeRecursive(text) {
  text = cleanString(text)
  if (text.length <= 1) {
    return true
  }

  if(text.charAt(0) === text.charAt(text.length - 1)) {
    return isPalindromeRecursive(text.slice(1, text.length - 1))
  }

  return false
}

function cleanString(str) {
  cleanedString = str
  
  cleanedString = cleanedString.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~() ]/g, '')
  cleanedString = cleanedString.toLowerCase()

  return cleanedString
}
module.exports = isPalindrome
