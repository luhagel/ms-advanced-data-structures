const usableChars = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8',
  '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const correspondingVals = {}

for (var i = 0; i < usableChars.length; i++) {
  correspondingVals[usableChars[i]] = i
}

module.exports = {
  decode: (stringNum, base) => {
    let undecodedNumbers = stringNum.split('').reverse()
    let decodedNumber = 0

    for (var i = 0; i < undecodedNumbers.length; i++) {
      decodedNumber += Math.pow(base, i) * correspondingVals[undecodedNumbers[i]]
    }

    return decodedNumber
  },
  encode: (num, base) => {

  },
  convert: (stringNum, base1, base2) => {

  }
}
