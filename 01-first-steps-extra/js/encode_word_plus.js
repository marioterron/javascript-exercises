// encodeWordPlus

// Improve the previous function to add a random number between 0 and
// 1000 every 7 characters

// Way 1
function encodeWordPlus (text) {
  text = text.toLowerCase().split('')
  for (var letter in text) {
    if (text[letter] === 't' || text[letter] === 'a' || text[letter] === 's' || text[letter] === 'o') text[letter] = Math.floor((Math.random() * 1000) + 1)
  }
  return text.join('')
}

// Way 2 (dont work)
function encodeWordPlus (text) {
  text = text.toLowerCase().split('')
  text.forEach(function (letter) {
    if (letter === 't' || letter === 'a' || letter === 's' || letter === 'o') letter = Math.floor((Math.random() * 1000) + 1)
  })
  return text.join('')
}
