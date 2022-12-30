class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map()
  }

  addVertex(vertex) {
    this.AdjList.set(vertex, []);
  }

  addEdge(vertexStart, vertexEnd) {
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
        console.log('[' + i + ']' + ' -> ' + connectedVertices)//find out what conc is
      }
    }
  }
}

function makeGameSpaces() {
  const gameSpaces = []
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      gameSpaces.push([i, j])
    }
  }
  return gameSpaces
}

function addElements(graph) {
  let vertices = makeGameSpaces();

  function addVertices(graph) {
    for (var i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i]);
    }
  }

  function addEdges(graph, vertices) {
    for (let space of vertices) {
      const xPositive1 = space[0] + 1
      const xPositive2 = space[0] + 2
      const xNegative1 = space[0] - 1
      const xNegative2 = space[0] - 2
      
      const yPositive1 = space[1] + 1
      const yPositive2 = space[1] + 2
      const yNegative1 = space[1] - 1
      const yNegative2 = space[1] - 2

      if (xPositive1 > 0 && xPositive1 < 8 && yPositive2 > 0 && yPositive2 < 8) {
        const newSpace = vertices.find(element => element[0] === xPositive1 && element[1] === yPositive2)
        graph.addEdge(space, newSpace)
      }
      if (xPositive2 > 0 && xPositive2 < 8 && yPositive1 > 0 && yPositive1 < 8) {
        const newSpace = vertices.find(element => element[0] === xPositive2 && element[1] === yPositive1)
        graph.addEdge(space, newSpace)
      }
      if (xPositive2 > 0 && xPositive2 < 8 && yNegative1 > 0 && yNegative1 < 8) {
        const newSpace = vertices.find(element => element[0] === xPositive2 && element[1] === yNegative1)
        graph.addEdge(space, newSpace)
      }
      if (xPositive1 > 0 && xPositive1 < 8 && yNegative2 > 0 && yNegative2 < 8) {
        const newSpace = vertices.find(element => element[0] === xPositive1 && element[1] === yNegative2)
        graph.addEdge(space, newSpace)
      }
      if (xNegative1 > 0 && xNegative1 < 8 && yNegative2 > 0 && yNegative2 < 8) {
        const newSpace = vertices.find(element => element[0] === xNegative1 && element[1] === yNegative2)
        graph.addEdge(space, newSpace)
      }
      if (xNegative2 > 0 && xNegative2 < 8 && yNegative1 > 0 && yNegative1 < 8) {
        const newSpace = vertices.find(element => element[0] === xNegative2 && element[1] === yNegative1)
        graph.addEdge(space, newSpace)
      }
      if (xNegative2 > 0 && xNegative2 < 8 && yPositive1 > 0 && yPositive1 < 8) {
        const newSpace = vertices.find(element => element[0] === xNegative2 && element[1] === yPositive1)
        graph.addEdge(space, newSpace)
      }
      if (xNegative1 > 0 && xNegative1 < 8 && yPositive2 > 0 && yPositive2 < 8) {
        const newSpace = vertices.find(element => element[0] === xNegative1 && element[1] === yPositive2)
        graph.addEdge(space, newSpace)
      }
    }
  }
  addVertices(graph)
  addEdges(graph, vertices)
}
let graph = new Graph(64);
addElements(graph)


graph.printGraph();

