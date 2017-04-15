// filterLongWords()

// Write a function filterLongWords() that takes an array of words and
// an integer i and returns the array of words that are longer than i.

function filterLongWord (arr, int) {
  var longWords = []
  arr.filter(function (currentWord) {
    if (currentWord.length > int) longWords.push(currentWord)
  })
  return longWords
}
