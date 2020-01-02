function isEven(value) {

	if (value === 0) {
		return true;
	} else if (value === 1) {
		return false;
	} else if (value < 0) {
		return isEven(-value);
	} else {
		return isEven(value - 2);
	}

}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));