// translate()

// Represent a small bilingual lexicon as a Javascript object in the
// following fashion {"merry":"god", "christmas":"jul", "and":"och",
// "happy":gott", "new":"nytt", "year":"år"} and use it to translate
// your Christmas cards from English into Swedish.

function translate (string) {
  string = string.toLowerCase().split(' ')
  var translatedStr = []
  string.forEach(function (word) {
    if (word === 'merry') translatedStr.push('god')
    else if (word === 'christmas') translatedStr.push('jul')
    else if (word === 'and') translatedStr.push('och')
    else if (word === 'happy') translatedStr.push('gott')
    else if (word === 'new') translatedStr.push('nytt')
    else if (word === 'year') translatedStr.push('år')
    else translatedStr.push(word)
  })
  return translatedStr.join(' ')
}
