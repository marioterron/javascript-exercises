// encodeWord

// Define a function called encodeWord that receives a string and return
// the codified version of that string replacing the following characters:

// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O

// Way 1
function encodeWord (text) {
  var aText = txt.toLowerCase().split('')
  for (var letter in aText) {
    if (aText[letter] === 't') aText[letter] = 7
    if (aText[letter] === 'a') aText[letter] = 4
    if (aText[letter] === 's') aText[letter] = 5
    if (aText[letter] === 'o') aText[letter] = 0
  }
  return aText.join('')
}

// Way 1
function encodeWord (text) {
  var myText = text
  myText = myText.replace(/t/gi, '7')
  myText = myText.replace(/a/gi, '4')
  myText = myText.replace(/s/gi, '5')
  myText = myText.replace(/o/gi, '0')
  return myText
}

// Way 2
function encodeWord (text) {
  return text
          .replace(/t/gi, '7')
          .replace(/a/gi, '4')
          .replace(/s/gi, '5')
          .replace(/o/gi, '0')
}

// Way 3
function encodeWord (text) {
  var codes = {
    't': 7,
    'a': 4,
    's': 5,
    'o': 0
  }
  return text.replace(/[taso]/gi, function (itemFound) {
    return codes[itemFound]
  })
}

// Way 4
function encodeWord (text) {
  return text.replace(/\w/gi, function (itemFound) {
    var codes = { 't': 7, 'a': 4, 's': 5, 'o': 0, 'j': 1 }
    return codes[itemFound] ? codes[itemFound] : itemFound
  })
}

// Way 5
function encodeWord (codes, text) {
  return text.replace(/\w/gi, function (itemFound) {
    return codes[itemFound] ? codes[itemFound] : itemFound
  })
}
// encodeWord( { "t": 75, "a": 43, "s": 55, "o": 30, "j": 12 }, "juanma")
