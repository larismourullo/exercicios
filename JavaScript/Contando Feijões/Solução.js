// FIRST FUNCTION -----------------------------
function countBs(word) {
	return countChar(word, "B");
}

console.log(countBs("BBC"));

// SECOND FUNCTION ----------------------------
function countChar(word, countWord) {
	counter = 0;

	for (var i = 0; i < word.length; i++) {
		if (word.charAt(i) === countWord) {
			counter++;
		}	 	
	}

	return counter;
}

console.log(countChar("kakkerlak", "k"));