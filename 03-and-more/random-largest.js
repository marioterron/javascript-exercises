// randomLargest()

// Randomizes three numbers in range (0.. 100) and prints the largest one.

function randomLargest () {
  var aRandom = []

  var getRandom = function () {
    return Math.floor(Math.random() * (100 - 0)) + 0
  }

  var fillArray = function () {
    for (var i = 0; i < 3; i++) {
      aRandom.push(getRandom())
    }
    return aRandom
  }

  return Math.max.apply(null, fillArray())
}
