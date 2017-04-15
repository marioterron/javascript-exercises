// charFreq()

// Write a function charFreq() that takes a string and builds a frequency
// listing of the characters contained in it. Represent the frequency listing
// as a Javascript object.
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq (str) {
  str = str.split('')
  var frequency = {}
  str.forEach(function (letter) {
    if (frequency[letter]) frequency[letter]++
    else frequency[letter] = 1
  })
  return frequency
}
