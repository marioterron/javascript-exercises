// charFreq()

// Write a function charFreq() that takes a string and builds a frequency
// listing of the characters contained in it. Represent the frequency listing
// as a Javascript object.
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

// Way 1
function charFreq (text) {
  var frequencies = {}
  var cleanedText = text.replace(/\W/g, '')
  var aText = cleanedText.split('')
  aText.forEach(function (currentChar) {
    if (!frequencies[currentChar]) frequencies[currentChar] = 1
    else frequencies[currentChar]++
  })
  return frequencies
}

// Way 2
function charFreq (text) {
  var frequencies = {}
  var aText = text.match(/\w/gi)
  aText.forEach(function (currentChar) {
    if (!frequencies[currentChar]) frequencies[currentChar] = 1
    else frequencies[currentChar]++
  })
  return frequencies
}

// Way 3
function charFreq (text) {
  return text
          .match(/\w/gi)
          .reduce(function (oFreq, currentChar) {
            if (!oFreq[currentChar]) oFreq[currentChar] = 1
            else oFreq[currentChar]++
            return oFreq
          }, {})
}

// Way 4
function charFreq (text) {
  return text
          .match(/\w/gi)
          .reduce(function (oFreq, char) {
            oFreq[char] = oFreq[char] ? ++oFreq[char] : 1
            return oFreq
          }, {})
}
