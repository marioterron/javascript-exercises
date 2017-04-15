// Multiplications table

// Write a function that writes in the console the multiplication table (from 1 to 10)

function tableMult() {
	var table = '';
	for (var i = 1; i <= 10; i++) {
		table += '\n';
		for (var j = 1; j <= 10; j++) {
			console.log()
					table += i*j + '\t';
		}
	}
	return table;
}