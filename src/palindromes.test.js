var isPalindrome  = require('./palindromes')

describe('palindromes', () => {
  it('detects palindromes in  mirrored strings', () => {
    expect(isPalindrome('')).toBe(true)
    expect(isPalindrome('A')).toBe(true)
    expect(isPalindrome('AA')).toBe(true)
    expect(isPalindrome('LOL')).toBe(true)
    expect(isPalindrome('noon')).toBe(true)
    expect(isPalindrome('radar')).toBe(true)
    expect(isPalindrome('racecar')).toBe(true)
  })

  it('detects palindromes in  mirrored strings with mixed case', () => {
    expect(isPalindrome('Bb')).toBe(true)
    expect(isPalindrome('NoOn')).toBe(true)
    expect(isPalindrome('Radar')).toBe(true)
    expect(isPalindrome('RaceCar')).toBe(true)
  })

  it('detects palindromes in  mirrored strings with white space', () => {
    expect(isPalindrome('taco cat')).toBe(true)
    expect(isPalindrome('race car')).toBe(true)
    expect(isPalindrome('race fast safe car')).toBe(true)
  })

  it('detects palindromes in  mirrored strings with punctuation', () => {
    expect(isPalindrome('Race fast, safe car.')).toBe(true)
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true)
    expect(isPalindrome('A man, a plan, a canal - Panama!')).toBe(true)
  })

  it('detects palindromes in Alan\'s weird extra cases', () => {
    // expect(isPalindrome('HERE')).toBe(true)
  })

  it('doesn\'t detect palindromes in non palindrome strings', () => {
    expect(isPalindrome('AB')).toBe(false)
    expect(isPalindrome('ABC')).toBe(false)
    expect(isPalindrome('doge')).toBe(false)
    expect(isPalindrome('monkey')).toBe(false)
    expect(isPalindrome('chicken, monkey!')).toBe(false)
  })
})
