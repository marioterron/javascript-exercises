// encodeWord

// Define a function called encodeWord that receives a string and return
// the codified version of that string replacing the following characters:

// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O

function encodeWord (string) {
  var lettersInString = string.toLowerCase().split('')
  for (var letter in lettersInString) {
    if (lettersInString[letter] === 't') lettersInString[letter] = 7
    if (lettersInString[letter] === 'a') lettersInString[letter] = 4
    if (lettersInString[letter] === 's') lettersInString[letter] = 5
    if (lettersInString[letter] === 'o') lettersInString[letter] = 0
  }
  return lettersInString.join('')
}
