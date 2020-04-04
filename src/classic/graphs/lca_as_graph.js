/**
 * This example implements the tree as a graph in order to be able
 * to calculate the LCA in binary and not binary trees.
 * This solution has O(n) complexity, but it demands extra space to store
 * the paths and an additional array traversal to look for the matches
 * in both paths.
 */
class Graph {

  constructor(n, root) {

    this.adjacencyList = {};
    this.vertexNumber = 0;
    this.visitedStack = [];
    this.found = false;
    this.root = root;

    for (let i = 1; i <= n; ++i) {
      this.addVertex(i);
    }

  }

  addVertex(v) {
    this.adjacencyList[v] = [];
    this.vertexNumber++;
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  reset() {
    this.visitedStack = [];
  }

  // The graph is traversed with DFS
  traverse(a, b, parent) {

    if (a === b) {
      this.visitedStack.push(a);
      return;
    }

    const neighbors = this.adjacencyList[a];
    this.visitedStack.push(a);

    for (let i = 0; i < neighbors.length; ++i) {

      if (neighbors[i] === b) {
        this.visitedStack.push(neighbors[i]);
        this.found = true;
        return true;
      } else if (neighbors[i] !== parent) {

        const foundItem = this.traverse(neighbors[i], b, a);

        if (!foundItem) {
          this.visitedStack.pop(neighbors[i]);
        } else {
          return true;
        }

      }

    }

    return false;

  }

  getVisitedStack() {
    return this.visitedStack;
  }

  getIsItemFound() {
    return this.found;
  }

  getRoot() {
    return this.root;
  }

}

function findLCA(input, n1, n2) {

  const data = input.split('\n');
  const [n, q] = data[0].split(' ');
  const graph = new Graph(n, '1');

  for (let i = 1; i < n; ++i) {
    const [a, b] = data[i].split(' ');
    graph.addEdge(a, b);
  }

  graph.traverse(graph.getRoot(), n1, graph.getRoot());
  const path1 = graph.getVisitedStack();
  graph.reset();

  graph.traverse(graph.getRoot(), n2, graph.getRoot());
  const path2 = graph.getVisitedStack();
  graph.reset();

  let LCA = null;
  for (let i = 0, j = 0; i < path1.length, j < path2.length; ++i, ++j) {

    if (path1[i] === path2[j]) {
      LCA = path1[i];
    }

  }

  // LCA stands for Lowest Common Ancestor
  return LCA;

}

// Not binary tree
const test = `10 3
1 2
1 3
1 4
3 5
3 6
3 7
4 8
8 9
9 10`;

findLCA(test, '1', '4');
findLCA(test, '1', '5');
findLCA(test, '2', '9');
findLCA(test, '5', '7');

// Binary Tree
const test2 = `7 3
1 2
1 3
2 4
2 5
3 6
3 7`;

findLCA(test2, '4', '5');
findLCA(test2, '4', '6');
findLCA(test2, '3', '4');
findLCA(test2, '2', '4');
