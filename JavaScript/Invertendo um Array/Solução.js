// FIRST FUNCTION ----------------------------------
function reverseArray(array) {
	var newArray = [];

	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}

	return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

// SECOND FUNCTION ---------------------------------
function reverseArrayInPlace(array) {
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		var j = array.length - 1 - i;

		var save = array[j];
		array[j] = array[i];
		array[i] = save;
	}

	return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);