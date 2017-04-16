# Javascript Exercises 1

### Integer Numbers Range

Write a function in Javascript that having two integers `x1` and `x2` returns all the integers between them. If `x2` es lower than `x1` it should return -1

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


### Multiplications table

Write a function that writes in the console the multiplication table (from 1 to 10)

```
1   2   3   4   5   6   7   8   9   10  
2   4   6   8   10  12  14  16  18  20  
3   6   9   12  15  18  21  24  27  30  
4   8   12  16  20  24  28  32  36  40  
5   10  15  20  25  30  35  40  45  50  
6   12  18  24  30  36  42  48  54  60  
7   14  21  28  35  42  49  56  63  70  
8   16  24  32  40  48  56  64  72  80  
9   18  27  36  45  54  63  72  81  90  
10  20  30  40  50  60  70  80  90  100
```

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/multiplications-table.js)


### Multiplications table on demand

Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/multiplications-table-on-demand.js)


### Calculation

Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

```
Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313
```

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/calculation.js)


### `max()` function

Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/max.js)


### `maxOfThree()` function

Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/max-of-three.js)


### `isVowel()` function

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/is-vowel.js)


### Hexadecimal 

Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

```
>>> var a = getRGB ('#00FF00');
>>> a;
“rgb(0,255,0)”;
```

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/hexadecimal.js)


### Hexadecimal enhanced

Improves the previous function so besides the conversion also identifies some basic colors:
- Black: #000000
- White: #FFFFFF
- Red: #FF0000
- Green: #00FF00
- Blue: #0000FF

So the result can be (for these cases):

```
>>> var a = getRGB ('#00FF00'); 
>>> a;
“rgb(0,255,0)   verde”;
```

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/hexadecimal-enhanced.js)
