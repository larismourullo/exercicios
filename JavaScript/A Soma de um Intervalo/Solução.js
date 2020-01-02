// CRIAR ARRAY ------------------------------------
function range(start, end, increase) {
	var size = [];

	if (increase == undefined) { increase = 1; }
	
	if (increase > 0) {
		for (var i = start; i <= end; i += increase) {
			size.push(i);
		}
	} else {
		for (var i = start; i >= end; i += increase) {
			size.push(i);
		}
	}

	return size;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

// SOMAR VALORES DO ARRAY -------------------------
function sum(numberArray) {
	var result = 0;

	for (var i = 0; i < numberArray.length; i++) {
		result += numberArray[i];
	}

	return result;
}

console.log(sum(range(1, 10)));