// findLongestWord()

// Write a function findLongestWord() that takes an array of words and
// returns the length of the longest one.

function findLongestWord (str) {
  var strSplit = str.split(' ')
  var longestWord = strSplit.reduce(function (longest, currentWord) {
    if (currentWord.length > longest.length) return currentWord
    else return longest
  })
  return longestWord + ' => ' + longestWord.length
}
