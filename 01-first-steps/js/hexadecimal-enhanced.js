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

  if (r === 0 && g === 0 && b === 0) return 'rgb(' + r + ',' + g + ',' + b + ')\t\t Black'
  if (r === 255 && g === 255 && b === 255) return 'rgb(' + r + ',' + g + ',' + b + ')\t\t White'
  if (r === 255 && g === 0 && b === 0) return 'rgb(' + r + ',' + g + ',' + b + ')\t\t Red'
  if (r === 0 && g === 255 && b === 0) return 'rgb(' + r + ',' + g + ',' + b + ')\t\t Green'
  if (r === 0 && g === 0 && b === 255) return 'rgb(' + r + ',' + g + ',' + b + ')\t\t Blue'
}
