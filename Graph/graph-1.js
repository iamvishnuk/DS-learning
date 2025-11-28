class Graph {
  constructor() {
    this.graph = new Map();
  }

  addVertex(vertex) {
    this.graph.set(vertex, new Array());
  }

  insert(vertex, edge, isBIDirectional) {
    if (!this.graph.has(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.graph.has(edge)) {
      this.addVertex(edge);
    }
    this.graph.get(vertex).push(edge);
    if (isBIDirectional) {
      this.graph.get(edge).push(vertex);
    }
  }

  delete(vertex) {
    if (this.graph.has(vertex)) {
      let edges = this.graph.get(vertex);
      for (let edge of edges) {
        this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex), 1);
      }
      this.graph.delete(vertex);
    }
  }

  dfs(startVertex) {
    const visited = new Set();
    const dfsHelper = (vertex) => {
      visited.add(vertex);
      console.log(vertex);
      let neighbors = this.graph.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };
    dfsHelper(startVertex);
  }
  bfs(startVertex) {
    let visisted = new Set();
    let queue = [];

    visisted.add(startVertex);
    queue.push(startVertex);

    while (queue.length > 0) {
      let vertex = queue.shift();
      console.log(vertex);
      let neighbors = this.graph.get(vertex);

      for (let neighbor of neighbors) {
        if (!visisted.has(neighbor)) {
          visisted.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  display() {
    for (let vertex of this.graph.keys()) {
      let edge = this.graph.get(vertex);
      console.log(vertex, edge);
    }
  }
}
const gp = new Graph();

gp.insert(1, 22, true);
gp.insert(4, 66, true);
gp.insert(1, 44, true);
gp.display();
console.log('===========');
gp.delete(1);
gp.display();
