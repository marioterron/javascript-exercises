// randomEven()

// Randomizes a number (range 0..100), then prints all the even
// numbers from 0 to the randomized.

function randomEven () {
  var aRandom = []

  var getRandom = function () {
    return Math.floor(Math.random() * (100 - 0)) + 0
  }

  var fillArray = function () {
    for (var i = 0; i <= getRandom(); i++) {
      aRandom.push(i)
    }
    return aRandom
  }

  return fillArray()
}
