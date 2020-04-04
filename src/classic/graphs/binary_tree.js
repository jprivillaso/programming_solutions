class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addUtils(currentNode, newNode) {

    if (newNode.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.addUtils(currentNode.left, newNode);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.addUtils(currentNode.right, newNode);
      }
    }
  }

  addNode(value) {

    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.addUtils(this.root, newNode);
    }

  }

  getRoot() {
    return this.root;
  }
}

const tree = new BinaryTree();
tree.addNode(5);
tree.addNode(2);
tree.addNode(8);
tree.addNode(4);
tree.addNode(10);