class Graph {

  constructor() {
    this.adjacencyList = {};
    this.vertexNumber = 0;
    this.visitStack = [];
  }

  addVertex(v) {
    this.adjacencyList[v] = [];
    this.vertexNumber++;
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  getVertexNumber() {
    return this.vertexNumber;
  }

  print() {
    console.log(this.adjacencyList);
  }

  isCyclicUtil(v, visited, parent) {

    visited[v] = true;
    this.visitStack.push(v);

    const items = this.adjacencyList[v];

    for (let i = 0; i < items.length; i++) {

      const neighbor = items[i];

      if (!visited[neighbor]) {
        if (this.isCyclicUtil(neighbor, visited, v)) {
          return true;
        }
      } else if (neighbor != parent) {
        const cycle = this.visitStack.slice(this.visitStack.indexOf(neighbor), this.visitStack.length);
        console.log(cycle);
        return true;
      }

    }

    return false;

  }

  isCyclic() {

    const visited = {};
    for (let [key] of Object.entries(this.adjacencyList)) {
      visited[key] = false;
    }

    for (let i = 0; i < this.vertexNumber; i++) {

      if (!visited[i]) {
        if (this.isCyclicUtil(i, visited, i)) {
          console.log('A graph was found');
        }

      }

    }

    console.log(this.visitStack);

  }

}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 1);
graph.addEdge(4, 5);
graph.addEdge(5, 0);

// graph.print();
graph.isCyclic();