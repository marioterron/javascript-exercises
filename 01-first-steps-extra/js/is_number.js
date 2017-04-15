// isNumber

// Define a function called ​isNumber​ that receives a value and return true if the value received is a number

//    isNumber(3) // true
//    isNumber("3") // false
//    isNumber("asass") // false

function isNumber (value) {
  return !isNaN(value)
}
