function playTheGame () {
	var ok = confirm("Click OK if you want to play the game!");
	if (ok == true) {
		prompt("Cool, let's play. Enter a number between 0 and 10.")
	}else {
		alert("Okay maybe next time!")
		break;
	}

	var response = Number(prompt);
	var computerNumber = Math.floor((Math.random() * 10) +1);
	let result = alert("Your random number is " + Number(computerNumber));

	if ((response.length) == 0) {
		return alert("Sorry, not a number!")
	}else if (Number(response) < 0 && Number(response)>10) {
		return alert("Sorry, not a good number!")
	}else {
		return result
	}

}	


