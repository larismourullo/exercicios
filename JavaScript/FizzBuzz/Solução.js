function isMultiple(num, divisor) {
	return num % divisor === 0;
}

// SOLUÇÃO SIMPLES ----------------------------

for (var i = 1; i <= 100; i++) { 

	if (isMultiple(i, 3) && isMultiple(i, 5)){
		console.log("FizzBuzz");
	} else if (isMultiple(i, 3)) {
		console.log("Fizz");
	} else if (isMultiple(i, 5)) {
		console.log("Buzz");
	}

	console.log(i);
}


// SOLUÇÃO INTELIGENTE ------------------------

for (var i = 1; i <= 100; i++) { 
	var result = "";

	if (isMultiple(i, 3)) {
		result += "Fizz";
	}
	
	if (isMultiple(i, 5)) {
		result += "Buzz";
	}

	console.log(result || i);
}