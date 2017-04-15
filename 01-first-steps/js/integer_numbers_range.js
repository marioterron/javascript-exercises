// Integer Numbers Range

// Write a function in Javascript that having two integers x1 and x2 returns
// all the integers between them. If x2 es lower than x1 it should return -1

function between(a, b) {
	var c = '';
	if ( b < a ) {
		var c = -1;
	} else {
		for (var i = a; i < b; i++) {
			c += i + ' ';
		}
	}
	return c;
}
