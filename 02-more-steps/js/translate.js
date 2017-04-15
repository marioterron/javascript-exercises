 // Write a function translate() that will translate a text into "rövarspråket".
 // That is, double every consonant and place an occurrence of "o" in between. For
 // example, translate("this is fun") should return the string "tothohisos isos fofunon".

// Way 1
function translate (text) {
  text = text.toLowerCase().split('')
  var newText = []
  for (var letter in text) {
    if ('aeiou'.indexOf(text[letter]) !== -1) newText.push(text[letter])
    else newText.push(text[letter], 'o', text[letter])
  }
  return newText.join('')
}

// Way 2
function translate (text) {
  text = text.toLowerCase().split('')
  var newText = []
  text.forEach(function (letter) {
    if ('aeiou'.indexOf(letter) !== -1) newText.push(letter)
    else newText.push(letter, 'o', letter)
  })
  return newText.join('')
}
