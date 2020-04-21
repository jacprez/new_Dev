let str ="This dinner is not that bad!"

let not = str.search("not")
let bad = str.search("bad")

if (bad>not) {
	str= str.slice(0,15)
	str= str + "good!"
	console.log(str)
} else {
	console.log(str)
}