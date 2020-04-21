//exercise 1

var number =prompt("Give me a number")
num=Number(number)

if ( num % 2 == 0) {
	alert(num + ' is an even number')
}else{
	alert(num + ' is an odd number');
}

//exercise 2

var x=10
var y=20

if (x<y) {
	console.log(y);
}else if (x>y) {
	console.log(x);
}

// exercise 3

var language=prompt("What language do you speak?")

switch (language) {
	case "French":
		alert("Bonjour");
		break;
	case "English":
		alert("Hello");
		break;
	case "Hebrew":
		alert("Shalom");
		break;
	default:
		alert(":)")
}

//exercise 4

var grade=prompt("Hey! What grade did you get?")
num=Number(grade)

if (num >90) {
	console.log("A")
}else if (num<90 && num> 80) {
	console.log("B")
}else if (num<80 &&num>70) {
	console.log("C")
}else if (num <70) {
	console.log("D")
}

