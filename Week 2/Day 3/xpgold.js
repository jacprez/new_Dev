// exercise 1

var family = {
	mom : "Elana",
	dad : "Jeff",
	brother: "Jonathan",
	sister: "Stephanie",
	members: 6,
}; for ( i in family) {
	console.log(i);
}

for (x in family) {
	console.log(family[x]);
}

//exercise 2

var building = {
    number_levels : 4,
    number_of_apt_by_level : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants : ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent:  {
        "Sarah": [3, 2000],
        "Dan":  [4, 1000],
        "David": [1, 10],
    },
}

//1. console.log(building.number_of_apt_by_level);

// console.log(building["number_of_apt_by_level"]["1" + " 3"]);

// for (x in building) {
// 	console.log (building.number_of_apt_by_level["1"]["3"]);
// }

//3. console.log(building.number_of_rooms_and_rent.Dan);



//exercise 3

var jac = {
	fullName : "Jackie",
	mass : 55,
	height : 65,
}
var drake = {
	fullName : "Drake",
	mass : 65,
	height : 71,
}