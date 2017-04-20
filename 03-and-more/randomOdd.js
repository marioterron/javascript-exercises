// randomOdd()

// Randomizes a number (range 0..100), then prints all the odd numbers
// from 40 to that one. If the number was smaller than 40 nothing should
// be printed.

function randomOdd () {
  var aRandom = []

  var getRandom = function () {
    return Math.floor(Math.random() * (100 - 0)) + 0
  }

  var currentNum = getRandom()
  var fillArray = function () {
    for (var i = 0; i <= currentNum; i++) {
      if (isOdd(i)) aRandom.push(i)
    }
    return aRandom
  }

  var isOdd = function (num) {
    return num % 2 === 1
  }

  if (currentNum > 40) {
    fillArray()
    return aRandom
  } else {
    return 'The number is smaller than 40'
  }
}
