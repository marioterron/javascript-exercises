// isVowel() function

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// Way 1
function isVowel (letter) {
  return 'aeiou'.indexOf(letter) !== -1
}

// Way 2
function isVowel (letter) {
	return /[aeiou]/.test(letter)
}
