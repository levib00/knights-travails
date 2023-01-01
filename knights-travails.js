class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map()
  }

  addVertex(vertex) {
    this.AdjList.set(vertex, []);
  }

  addEdge(vertexStart, vertexEnd) {
    //Adds edges between given nodes if edge doesn't already exist.
    if (!this.AdjList.get(vertexStart).includes(vertexEnd)) {
      this.AdjList.get(vertexStart).push(vertexEnd);
    }
    if (!this.AdjList.get(vertexEnd).includes(vertexStart)) {
      this.AdjList.get(vertexEnd).push(vertexStart);
    }
  }

  printGraph() {
    const getKeys = this.AdjList.keys();
    for (let i of getKeys) {
      const getValues = this.AdjList.get(i);
      let connectedVertices = '';
      for (let j of getValues) {
        connectedVertices += '[' + j + '] '
        console.log('[' + i + ']' + ' -> ' + connectedVertices)
      }
    }
  }
}

function makeGameSpaces() {
  //creates coordinates for all grid spaces from 1, 1 - 8, 8
  const gameSpaces = []
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      gameSpaces.push(`[${i}, ${j}]`)
    }
  }
  return gameSpaces
}

function addElements(graph) {
  let vertices = makeGameSpaces()

  function addVertices(graph) {
    for (var i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i]);
    }
  }

  function addEdges(graph, vertices) {
    for (let space of vertices) {
      //vertices are stored as strings so need to be parsed to arrays to be used here.
      let spaces = JSON.parse(space)
      const xPositive1 = spaces[0] + 1
      const xPositive2 = spaces[0] + 2
      const xNegative1 = spaces[0] - 1
      const xNegative2 = spaces[0] - 2
      
      const yPositive1 = spaces[1] + 1
      const yPositive2 = spaces[1] + 2
      const yNegative1 = spaces[1] - 1
      const yNegative2 = spaces[1] - 2

      //if statements add edges to vertices for all 8 possible moves a knight could make.
      if (xPositive1 > 0 && xPositive1 < 8 && yPositive2 > 0 && yPositive2 < 8) {
        const newSpace = vertices.find(element => element === `[${xPositive1}, ${yPositive2}]`)
        graph.addEdge(space, newSpace)
      }
      if (xPositive2 > 0 && xPositive2 < 8 && yPositive1 > 0 && yPositive1 < 8) {
        const newSpace = vertices.find(element => element === `[${xPositive2}, ${yPositive1}]`)
        graph.addEdge(space, newSpace)
      }
      if (xPositive2 > 0 && xPositive2 < 8 && yNegative1 > 0 && yNegative1 < 8) {
        const newSpace = vertices.find(element => element === `[${xPositive2}, ${yNegative1}]`)
        graph.addEdge(space, newSpace)
      }
      if (xPositive1 > 0 && xPositive1 < 8 && yNegative2 > 0 && yNegative2 < 8) {
        const newSpace = vertices.find(element => element === `[${xPositive1}, ${yNegative2}]`)
        graph.addEdge(space, newSpace)
      }
      if (xNegative1 > 0 && xNegative1 < 8 && yNegative2 > 0 && yNegative2 < 8) {
        const newSpace = vertices.find(element => element === `[${xNegative1}, ${yNegative2}]`)
        graph.addEdge(space, newSpace)
      }
      if (xNegative2 > 0 && xNegative2 < 8 && yNegative1 > 0 && yNegative1 < 8) {
        const newSpace = vertices.find(element => element === `[${xNegative2}, ${yNegative1}]`)
        graph.addEdge(space, newSpace)
      }
      if (xNegative2 > 0 && xNegative2 < 8 && yPositive1 > 0 && yPositive1 < 8) {
        const newSpace = vertices.find(element => element === `[${xNegative2}, ${yPositive1}]`)
        graph.addEdge(space, newSpace)
      }
      if (xNegative1 > 0 && xNegative1 < 8 && yPositive2 > 0 && yPositive2 < 8) {
        const newSpace = vertices.find(element => element === `[${xNegative1}, ${yPositive2}]`)
        graph.addEdge(space, newSpace)
      }
    }
  }
  addVertices(graph)
  addEdges(graph, vertices)
}

const buildPath = (target, path) => {
  const result = [];

  while (path.has(target)) {
    const source = path.get(target);
    result.push(target)
    target = source;
  }

  return `You can get from ${target} to ${result[0]} in ${result.length} moves. Make the Path is ${result.reverse()}.`;
};

function findPath (source, target, graph) {
  //traverses graph with breadth first search until it finds the target vertex, then calls build path
  const queue = [source];
  const visited = new Set();
  const path = new Map();

  while (queue.length > 0){
    const start = queue.shift()
    if (start === target) {
      return buildPath(start, path)
    }
    for (const next of graph.AdjList.get(start) ) {
      if (visited.has(next)) {
      continue;
      }
      if (!queue.includes(next)) {
        path.set(next, start)
        queue.push(next)
      }
    }
    visited.add(start)
  }
  return null
}

let graph = new Graph(64);
addElements(graph)
console.log(findPath('[1, 1]', '[8, 7]', graph))
