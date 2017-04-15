// sum() & multiply()

// Define a function sum() and a function multiply() that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example,
// sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum (array) {
  var result = array.reduce(function (acc, current) {
    return acc + current
  })
  return result
}

function multiply (array) {
  var result = array.reduce(function (acc, current) {
    return acc * current
  })
  return result
}
