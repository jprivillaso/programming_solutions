class Node {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}

class Tree {

  constructor(size, root) {

    this.root = new Node(1);
    this.addNodes(size, 1, this.root);

  }

  addNodes(size, currentValue, node) {

    if (2 * currentValue > size) return;

    node.left = new Node(2 * currentValue);
    node.right = new Node(2 * currentValue + 1);

    this.addNodes(size, 2 * currentValue, node.left);
    this.addNodes(size, 2 * currentValue + 1, node.right);

  }

  findLCA(node, n1, n2) {

    if (!node) return null;

    if (node.data === n1 || node.data === n2) {
      return node;
    }

    const leftLca = this.findLCA(node.left, n1, n2);
    const rightLca = this.findLCA(node.right, n1, n2);

    if (leftLca !== null && rightLca !== null) {
      return node;
    }

    return leftLca || rightLca;

  }

  getRoot() {
    return this.root;
  }

}

const tree = new Tree(7);
console.log(tree.findLCA(tree.getRoot(), 4, 5).data);
console.log(tree.findLCA(tree.getRoot(), 4, 6).data);
console.log(tree.findLCA(tree.getRoot(), 3, 4).data);
console.log(tree.findLCA(tree.getRoot(), 2, 4).data);