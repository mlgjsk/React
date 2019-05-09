function vowelsAndConsonants(s) {
	var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
	var consonant = [];

	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < vowels.length; j++) {
			if (s[i] === vowels[j]) {
				console.log(s[i] + '\n');
			} else {
				consonant.push(s[i]);
			}
		}
	}
	for (let n = 0; n < consonant.length; n++) {
		console.log(consonant[n] + '\n');
	}
}

vowelsAndConsonants('javascriptloops');
