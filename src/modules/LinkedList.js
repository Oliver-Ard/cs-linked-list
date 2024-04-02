class Node {
	constructor(value) {
		// The value the node holds
		this.value = value;
		// The next node in the list
		this.nextNode = null;
	}
}

class LinkedList {
	#head;

	#tail;

	#size;

	constructor() {
		this.#head = null;
		this.#tail = null;
		this.#size = 0;
	}

	// Returns the first node in the list
	get head() {
		return this.#head.value;
	}

	// Returns the last node in the list
	get tail() {
		return this.#tail.value;
	}

	// Returns the total number of nodes in the list
	get size() {
		return this.#size;
	}

	// Adds a new node to the end of the list
	append(value) {
		const node = new Node(value);

		if (this.#head === null) {
			this.#head = node;
			this.#tail = node;
		} else {
			this.#tail.nextNode = node;
		}
		this.#tail = node;

		this.#size += 1;
	}

	// Adds a new node to the start of the list
	prepend(value) {
		const node = new Node(value);

		if (this.#head === null) {
			this.#head = node;
			this.#tail = node;
		} else {
			node.nextNode = this.#head;
		}
		this.#head = node;

		this.#size += 1;
	}

	// Removes the last element from the list
	pop() {
		if (this.#size === 0) {
			return;
		}

		let current = this.#head;
		let previous = null;

		while (current.nextNode !== null) {
			previous = current;
			current = current.nextNode;
		}

		if (previous === null) {
			this.#head = null;
			this.#tail = null;
		} else {
			previous.nextNode = null;
			this.#tail = previous;
		}

		this.#size -= 1;
	}

	// Inserts a new node at a given index
	insertAt(index, value) {
		const node = new Node(value);

		if (index === 0) {
			node.nextNode = this.#head;
			this.#head = node;
		} else {
			let current = this.#head;
			let previous = null;

			for (let i = 0; i < index; i += 1) {
				previous = current;
				current = current.nextNode;
			}

			node.nextNode = current;
			previous.nextNode = node;
		}

		this.#size += 1;
	}

	// Removes a node at a given index
	removeFrom(index) {
		if (index === 0) {
			this.#head = this.#head.nextNode;
		} else {
			let current = this.#head;
			let previous = null;

			for (let i = 0; i < index; i += 1) {
				previous = current;
				current = current.nextNode;
			}

			previous.nextNode = current.nextNode;
		}

		this.#size -= 1;
	}

	// Returns a node at a given index
	at(index) {
		let current = this.#head;

		for (let i = 0; i < index; i += 1) {
			current = current.nextNode;
		}

		return current.value;
	}

	// Returns true if the passed in value is in the list and otherwise returns false
	contains(value) {
		let current = this.#head;

		while (current !== null) {
			if (current.value === value) {
				return true;
			}
			current = current.nextNode;
		}

		return false;
	}

	// Returns the index of the node containing value, or null if not found
	find(value) {
		let current = this.#head;

		for (let i = 0; i < this.#size; i += 1) {
			if (value === current.value) {
				return i;
			}
			current = current.nextNode;
		}

		return null;
	}

	// Print the list
	print() {
		let current = this.#head;
		let list = "";

		while (current !== null) {
			list += `( ${current.value} ) -> `;
			current = current.nextNode;

			if (current === null) {
				list += "null";
			}
		}
		return list;
	}
}

export default LinkedList;
