// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
const reverseInt = n => {
  const reversedString = n.toString().split('').reverse().join('')
  return parseInt(reversedString) * Math.sign(n)
}


module.exports = reverseInt;
