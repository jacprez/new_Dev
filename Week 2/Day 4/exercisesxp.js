// //exercise 1

// var age = prompt("What is your age?");

// function checkDriverAge(age) {
// 	if (Number(age) < 18) {
// 		prompt("What is your age?");
// 	}else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}

// }

//exercise 2

amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100,
    toothbrushes: 0
}

// "glasses"
let item = prompt("WHat item do you want to check?")

function checkBasket(basket, item) {
	if (basket[item] > 0){
		return true;
	}else {
		return false;
	}
}





//DAILY CHALLENGE

// let text = prompt("How are you today?");
// text_arr = text.split (" ");
// console.log(text_arr)

// const longest = get_longest(text_arr);
// const border = new Array(longest + 5).join("*")


// console.log(border);
// for (word of text_arr) {
// 	console.log("* " + word + new Array(longest - word.length +1).join(" ") + " *");
// }
// console.log(border);



// function get_longest(arr) {
// 	let longest = 0;
// 	for (word of arr) { //for in actually gives you the number
// 		if (word.length > longest) {
// 			longest = word.length
// 		}
// 	}
// // 	return longest;
// // }


// function total(numbers) {
// 	let running_total = 0;
// 	for (digit of numbers) {
// 		running_total =	running_total + digit;
// 	}
// 	return running_total;
// }





