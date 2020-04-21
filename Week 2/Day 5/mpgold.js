let word = prompt("Enter your word and make sure it's at least 8 letters!")
word = word.split('');
console.log(word)
let stars = "*";
let secretword;


//if/else checks true and false
if (word.length >= 8) {
	secretword = stars.repeat(word.length)
	console.log(secretword)
}else if  ( word.length < 3) {
	console.log("Give me another")
} else{
	console.log("Not a nice word!")
}



//running same action certain amount of time
for (let i=0; i<10; i++) {
	let letter= prompt("Guess the word by entering a letter!")
	if (word.includes(letter)) {
	   		console.log("letter: ",letter)

	   let letterindex = word.indexOf(letter);
	   		console.log("letterindex: ",letterindex)

	   let firstPart = secretword.substr(0, letterindex);
	  		console.log("firstPart: ",firstPart)

	   let lastPart = secretword.substr(letterindex + 1);
	   		console.log("lastPart: ",lastPart)

	   secretword = firstPart + letter + lastPart;
	   		console.log("secretword: ",secretword)
	}
}

function checkRepeats (word, letter) {
	for (repeatedLetter in word){
		console.log()
	}
}