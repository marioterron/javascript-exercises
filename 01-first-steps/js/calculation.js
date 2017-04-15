// Calculation

// Write a program that writes in the console all the multiples of 23 
// less than 500 and at the end writes the sum of all of them

// Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function multiplesOf23() {
	var elements = 'Elements: '
	var sum = 0;
	for (var i=0; i<500; i++) {
		if (i%23===0) {
			elements += i + ' ';
			sum += i;
		}
	}
	return elements + '\n' + 'Sum: ' + sum;
}

