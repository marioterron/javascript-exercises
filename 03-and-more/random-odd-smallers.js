// randomOddSmallers()

// Randomizes a number (range 0..100), then prints all the odd numbers
// from 40 to that one. If the number was smaller than 40, print all
// the numbers down to the randomized one (i.e. if the result was 37,
// you should print: 40, 39, 38, 37)

function randomOddSmallers () {
  var aRandom = []

  var getRandom = function () {
    return Math.floor(Math.random() * (100 - 0)) + 0
  }

  var currentNum = getRandom()
  var fillToUp = function () {
    for (var i = 0; i <= currentNum; i++) {
      if (isOdd(i)) aRandom.push(i)
    }
    return aRandom
  }

  var fillToDown = function () {
    for (var i = 40; i > currentNum; i--) {
      aRandom.push(i)
    }
    return aRandom
  }

  var isOdd = function (num) {
    return num % 2 === 1
  }

  if (currentNum > 40) {
    fillToUp()
    return aRandom
  } else {
    fillToDown()
    return aRandom
  }
}
