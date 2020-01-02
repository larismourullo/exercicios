function deepEqual(valueOne, valueTwo) {
	if (valueOne === valueTwo) { return true; }

	if (typeof valueOne != "object" || valueOne == null ||
		typeof valueTwo != "object" || valueTwo == null) {
		return false;
	}

	var countValueOne = 0, countValueTwo = 0;

	for (prop in valueOne) {
		countValueOne += 1;
	}

	for (prop in valueTwo) {
		countValueTwo += 1;

		if (!(prop in valueOne) || !deepEqual(valueOne[prop], valueTwo[prop])) {
			return false;
		}
	}

	return countValueOne == countValueTwo;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));