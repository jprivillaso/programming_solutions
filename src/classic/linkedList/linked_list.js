class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor (){
    this.head = null;
    this.nodes = 0;
  }

  addNode(v) {

    this.nodes += 1;

    if (!this.head) {
      this.head = new Node(v);
      return;
    }

    let pointer = this.head;

    while (pointer.next !== null) {
      pointer = pointer.next;
    }

    pointer.next = new Node(v);
  }

  print() {

    let pointer = this.head;
    let string = '';

    while (pointer != null) {
      string += `${pointer.value} -> `;
      pointer = pointer.next;
    }

    string += `//`;
    console.log(string);

  }
}

const ll = new LinkedList();
ll.addNode(1);
ll.addNode(3);
ll.addNode(2);

ll.print();