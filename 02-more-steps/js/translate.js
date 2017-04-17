// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For
// example, translate("this is fun") should return the string "tothohisos isos fofunon".

// Way 1
function isVowel (char) {
  return 'aeiou'.indexOf(char) !== -1
}

function isSpace (char) {
  return char === ' '
}

function translate (text) {
  text = text.toLowerCase().split('')
  var newText = []
  for (var letter in text) {
    if (isVowel(text[letter]) || isSpace(text[letter])) newText.push(text[letter])
    else newText.push(text[letter], 'o', text[letter])
  }
  return newText.join('')
}

// Way 2
function isVowel (char) {
  return 'aeiou'.indexOf(char) !== -1
}

function isSpace (char) {
  return char === ' '
}

function translate (text) {
  text = text.toLowerCase().split('')
  var newText = []
  text.forEach(function (letter) {
    if (isVowel(letter) || isSpace(letter)) newText.push(letter)
    else newText.push(letter, 'o', letter)
  })
  return newText.join('')
}


// Way 3
var translate = text => text.replace(/([b-df-hj-np-tv-xz])/g, "$1o$1")


