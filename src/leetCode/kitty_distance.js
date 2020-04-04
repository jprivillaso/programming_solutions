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

  findLCA(n1, n2) {

    this.traverse(this.root, n1, this.root);
    const path1 = this.getVisitedStack();
    this.reset();

    this.traverse(this.root, n2, this.root);
    const path2 = this.getVisitedStack();
    this.reset();

    let LCA = null;
    for (let i = 0, j = 0; i < path1.length, j < path2.length; ++i, ++j) {
      if (path1[i] === path2[j]) {
        LCA = path1[i];
      }
    }

    // LCA stands for Lowest Common Ancestor
    return LCA;

  }

  distanceFromRoot(n1) {

    this.traverse(this.root, n1, this.root);
    const distance = this.getVisitedStack().length;
    this.reset();
    return distance - 1;

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

function findKittyDistance(pairs, graph) {

  const cache = {};
  let distance = 0;
  const exp = Math.pow(10, 9) + 7;

  for (let i = 0; i < pairs.length; ++i) {

    /**
     * Distance between two elements in a tree can be calculated as
     * dist(root, n1) + dist(root, n2) - 2 * dist(lca(n1, n2))
     */
    let [a, b] = pairs[i].split('~');
    a = parseInt(a);
    b = parseInt(b);

    const lca = graph.findLCA(a, b);

    let distanceToLca = 0;
    if (lca !== graph.getRoot()) {
      distanceToLca = graph.distanceFromRoot(graph.getRoot(), lca);
    }

    const rootToA = graph.distanceFromRoot(a);
    const rootToB = graph.distanceFromRoot(b);
    const distanceAtoB = rootToA + rootToB - 2 * distanceToLca;
    distance += a * b * distanceAtoB;

  }

  console.log(distance % exp);

}

function findPairs(set) {

  if (set.length === 0) return set;

  let pairs = new Set();
  for (let i = 0; i < set.length; ++i) {

    for (let j = 0; j < set.length; ++j) {
      if (i !== j) {
        const min = Math.min(set[i], set[j]);
        const max = Math.max(set[i], set[j]);
        pairs.add(`${min}~${max}`);
      }
    }

  }

  return new Array(...pairs);

}

function processData(input) {

  const date = new Date();
  const data = input.split('\n');
  let [n, q] = data[0].split(' ');
  n = parseInt(n);
  q = parseInt(q);

  const [root] = data[1].split(' ');
  const graph = new Graph(n, parseInt(root));

  // Build the graph
  for (let i = 1; i < n; ++i) {
    const [a, b] = data[i].split(' ');
    graph.addEdge(parseInt(a), parseInt(b));
  }

  // Calculate the sets
  for (let i = n + 1; i < n + (q * 2); i += 2) {

    const currentSet = data[i].split(' ').map(a => parseInt(a));
    let pairsInSet = findPairs(currentSet);
    findKittyDistance(pairsInSet, graph);

  }

  console.log(`${new Date().valueOf() - date.valueOf()} milliseconds`);

}

const test = `7 3
1 2
1 3
1 4
3 5
3 6
3 7
2
2 4
1
5
3
2 4 5`;

processData(test);
