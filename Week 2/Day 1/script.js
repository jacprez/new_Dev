let array = ["Banana", "Apples", "Oranges", "Blueberries"];
	undefined

array[0]
	"Banana"

array.splice(0,0);
	[]

array.splice(0,1)
	["Banana"]

array.sort();
	(3) ["Apples", "Blueberries", "Oranges"]

let array = ["Apples", "Blueberries", "Oranges", "Kiwi"];
	undefined

array.splice(0,1);
	["Apples"]

array.reverse();
	(3) ["Kiwi", "Oranges", "Blueberries"]

let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
	undefined

array2[1][1][0]
	"Oranges"