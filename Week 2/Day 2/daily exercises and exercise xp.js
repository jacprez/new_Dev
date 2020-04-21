// Exercise 1

let age = prompt("How old are you");

if (age < 18) {
	alert("Sorry, you are too young to drive this car. Powering off")
} else if (age==18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!")
} else {
	alert("Powering On. Enjoy the ride!")
}

// Exercise 2

var a = 2 + 2;

switch (a) {
  case 3: //if the value is "3", the the alert will say too small
    alert( 'Too small' );
    break; //no other blocks of code is used
  case 4: //is a is equal to "4", the alert will say exactly
    alert( 'Exactly!' );
    break; //no other blocks of code executed
  case 5: //if the value is equal to "5", it will say too large
    alert( 'Too large' );
    break; //means no other block of code to be executed
  default: //any other value imputed with say i dont know such values
    alert( "I don't know such values" );
}

// Exercise 3

var a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5: //when you have two cases grouped, it's saying 3 OR 5 and will display both alerts
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default: //if it's not 3, 4, or 5, then it will say this 
    alert('The result is strange. Really.');
}


// Exercise XP
// Exercise 1

let newDog="Chihuahua"
	undefined
newDog.length
	9
newDog.toUpperCase();
	"CHIHUAHUA"
newDog.toLowerCase();
	"chihuahua"

if (newDog=="Chihuahua") {
	alert("I LOVE Chihuahua, it’s my favorite dog")
} else {
	alert("I dont care, I prefer CATS")
}



