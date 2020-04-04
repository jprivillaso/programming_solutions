class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }

  add(value) {
    this.queue.unshift(value);
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  poll() {
    return this.queue.pop();
  }

  print() {
    for (let i = this.queue.length - 1; i >= 0; i--) {
      console.log(this.queue[i]);
    }
  }
}

const bfs = (tree) => {

  const queue = new Queue();
  queue.add(tree.root);

  while (!queue.isEmpty())
  {

    const tempNode = queue.poll();
    console.log(tempNode.data + " ");

    if (tempNode.left) queue.add(tempNode.left);
    if (tempNode.right) queue.add(tempNode.right);
  }

}

const tree = {};
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right = new Node(3);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

bfs(tree);
