// maxOfThree() function

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

// Way 1
function maxOfThree(a, b, c) {
	if (a>b &&  a>c) return a
	if (b>a && b>c) return b
	return c;
}

//Way 2
function maxOfThree(a, b, c) {
	return Math.max(a,b,c);
}

