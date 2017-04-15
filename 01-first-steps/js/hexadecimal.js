// Hexadecimal enhanced

// Improves the previous function so besides the conversion also identifies some basic colors:

// Black: #000000
// White: #FFFFFF
// Red: #FF0000
// Green: #00FF00
// Blue: #0000FF
// So the result can be (for these cases):

// >>> var a = getRGB ('#00FF00');
// >>> a;
// “rgb(0,255,0)   verde”;

function getRGB (hexadecimal) {
  var r = parseInt(hexadecimal.slice(1, 3), 16)
  var g = parseInt(hexadecimal.slice(3, 5), 16)
  var b = parseInt(hexadecimal.slice(5), 16)

  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
