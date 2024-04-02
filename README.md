# Linked List

Custom [`singly linked list`](https://en.wikipedia.org/wiki/Linked_list) data structure using `classes`.

#### Features:

The list instance has the following methods:

- `head`: returns the first node in the list;
- `tail`: returns the last node in the list;
- `size`: returns the total number of nodes in the list;
- `append(value)`: adds a new node containing value to the end of the list;
- `prepend(value)`: adds a new node containing value to the start of the list;
- `pop`: removes the last element from the list;
- `insertAt(value, index)`: inserts a new node with the provided value at the given index;
- `removeAt(index)`: removes the node at the given index;
- `at(index)`: returns the node at the given index;
- `contains(value)`: returns true if the passed in value is in the list and otherwise returns false;
- `find(value)`: returns the index of the node containing value, or null if not found;
- `print()`: print the list;

---

### Demo:

1. `git clone git@github.com:Oliver-Ard/cs-linked-list.git`
2. `cd cs-linked-list`
3. Open the project with your code editor;
4. In the editor console: `npm install`, after that `npm start`
5. Check the output in the editor console.

---

### Big O Notation:

**Time Complexity:**

- Insertion and deletion at the beginning or at the end: `O(1)`;
- Insertion and deletion at a specific index: `O(n)`;
- Accessing an element by index: `O(n)`;
- Searching for an element: `O(n)`

**Space Complexity** is `O(n)`.

---

#### What I have practiced in this project?

- create a custom `singly linked list` data structure.

**[This](https://www.theodinproject.com/lessons/javascript-linked-lists)** project is from **[The Odin Project](https://www.theodinproject.com/)**, [JavaScript Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript).
