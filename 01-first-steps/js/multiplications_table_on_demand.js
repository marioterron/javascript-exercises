// Multiplications table on demand

// Write a function that writes in the console the multiplication table 
// (in one column) of any number passed as parameter

function tableMultOnDemand(num) {
	var table = '';
	for (var i = 1; i <= 10; i++) {
		table += num * i + '\t';
	}
	return table
}