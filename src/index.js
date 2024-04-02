import LinkedList from "./modules/LinkedList.js";

function printListExample() {
	const list = new LinkedList();

	console.log("LINKED LIST");
	console.log("---------------------------------------");

	list.append(100);
	list.append(200);
	list.append(300);
	list.append(400);
	list.append(500);
	console.log(list.print());
	console.log(
		`The list has ${list.size} elements! The head of the list is ${list.head} and the tail is ${list.tail}!`
	);
	console.log("---------------------------------------");

	console.log("Add 1 element in the front of the list:");
	list.prepend(0);
	console.log(list.print());
	console.log(
		`The list has ${list.size} elements! The head of the list is ${list.head} and the tail is ${list.tail}!`
	);
	console.log("---------------------------------------");

	console.log("Remove the last two element:");
	list.pop();
	list.pop();
	console.log(list.print());
	console.log(
		`The list has ${list.size} elements! The head of the list is ${list.head} and the tail is ${list.tail}!`
	);
	console.log("---------------------------------------");

	console.log("Insert the number 250 between 200 and 300:");
	list.insertAt(3, 250);
	console.log(list.print());
	console.log(
		`The list has ${list.size} elements! The head of the list is ${list.head} and the tail is ${list.tail}!`
	);
	console.log("---------------------------------------");

	console.log("Remove the element at the index of 1:");
	list.removeFrom(1);
	console.log(list.print());
	console.log(
		`The list has ${list.size} elements! The head of the list is ${list.head} and the tail is ${list.tail}!`
	);
	console.log("---------------------------------------");

	console.log(`The element at the index of 2 is ${list.at(2)}!`);
	console.log("---------------------------------------");

	console.log(`The list has the number 100? ${list.contains(100)}!`);
	console.log(`The list has the number 300? ${list.contains(300)}!`);
	console.log("---------------------------------------");

	console.log("At which index is the number 200?");
	console.log(`The number 200 is at the index of ${list.find(200)}!`);
}

printListExample();
