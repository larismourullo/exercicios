function arrayToList(array) {
	var result = null;

	for (var i = array.length - 1; i >= 0; i--) {
		result = prepend(array[i], result);
	}

	return result;
}

function prepend(element, list) {
	return { value: element, rest: list };
}

function listToArray(list) {
	var result = [];

	for (var j = list; j; j = j.rest) {		
		result.push(j.value);
	}

	return result;
}

function nth(list, number) {
	if(!list) {
		return undefined;
	} else if (number == 0) {
		return list.value;
	} else {
		return nth(list.rest, number - 1);
	}	
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));