// console.log("working");
// alert("working");

// var list = [];
// console.log(list);
// var question = prompt("What is the item you want to include?");
// console.log(question);
// list.push("Pear");
// console.log(list);
var list = [];
function addNewItem(){
	
	console.log(list);
	

	
	var question = prompt("What is the item you want to include?");
	console.log(question);
	list.push(question);
	console.log(list);
	//way number 1
	// document.getElementById("shoppingList").innerHTML += "<li>"+question+"</li>";
    //way with for
	for (var i = 0; i < list.length; i++) {
		document.getElementById("shoppingList").innerHTML += "<li>"+list[i]+"</li>";
	}
}






























