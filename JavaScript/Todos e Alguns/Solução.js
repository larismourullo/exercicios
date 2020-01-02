function every (array, comparisonValue) {
	var bool;

	for (prop in array) {
		if(!isNaN(array[prop])) {
			bool = false;
		} else {
			bool = true;
		}
	}

	return bool;
}

function some (array, comparisonValue) {
	for (prop in array) {
		if(isNaN(array[prop])) {
			return true;
		}
	}

	return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));