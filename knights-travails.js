//create new board with knight as the root
class Board {
  constructor(x, y) {
    this.knight = makeGameBoard(x, y)
  }
}
class Space {
  constructor(x, y) { //refactoring in make game board. will have all knight moves made there 
    this.coordinateX = x 
    this.coordinateY = y 
    this.knightMove1 = null
    this.knightMove2 = null
    this.knightMove3 = null
    this.knightMove4 = null
    this.knightMove5 = null
    this.knightMove6 = null
    this.knightMove7 = null
    this.knightMove8 = null
  }
}

function levelOrderRec(space, newX, newY, func = null) {
  //console.log("space:", space,"newX:", newX,"newY", newY)
  
  const queueRec = []
  const queueRecValues = []

  function levelOrder(space, newX, newY, func) {
    if (newX > 8 || newX < 1 || newY > 8 || newY < 1) {
      return null
    }
    
    if (queueRec.length < 1) {
      queueRec.push(space)
    }
    if (func) {
      func(queueRec[0])
    }
    if (space.coordinateX === newX && space.coordinateY === newY) {//! might cause node to point to itself
      return space
    }
    queueRec.shift()

    if (space.knightMove1) {
      queueRec.push(space.knightMove1)
    }
    if (space.knightMove2) {
      queueRec.push(space.knightMove2)
    }
    if (space.knightMove3) {
      queueRec.push(space.knightMove3)
    }
    if (space.knightMove4) {
      queueRec.push(space.knightMove4)
    }
    if (space.knightMove5) {
      queueRec.push(space.knightMove5)
    }
    if (space.knightMove6) {
      queueRec.push(space.knightMove6)
    }
    if (space.knightMove7) {
      queueRec.push(space.knightMove7)
    }
    if (space.knightMove8) {
      queueRec.push(space.knightMove8)
    }
    console.log('queue:', queueRec);
    //console.log('length',queueRec.length);
    if (queueRec.length === 0 && func === null) {
      const newSpace = new Space(newX, newY)
      return newSpace
    }
    if (queueRec.length === 0) {
      return
    }
    //console.log("queue:" ,queueRec)
    levelOrder(queueRec[0], newX, newY, func)
    
  }
  const newValue = levelOrder(space, newX, newY, func)
  //console.log(newValue)
  return newValue
}

function makeGameBoard(x, y) {
  const space = new Space(x, y)
  space.knightMove1 = levelOrderRec(space, space.coordinateX + 1, space.coordinateY + 2)
  space.knightMove2 = levelOrderRec(space, space.coordinateX + 2, space.coordinateY + 1)
  space.knightMove3 = levelOrderRec(space, space.coordinateX + 2, space.coordinateY - 1)
  space.knightMove4 = levelOrderRec(space, space.coordinateX + 1, space.coordinateY - 2)
  space.knightMove5 = levelOrderRec(space, space.coordinateX - 1, space.coordinateY - 2)
  space.knightMove6 = levelOrderRec(space, space.coordinateX - 2, space.coordinateY - 1)
  space.knightMove7 = levelOrderRec(space, space.coordinateX - 2, space.coordinateY + 1)
  space.knightMove8 = levelOrderRec(space, space.coordinateX - 1, space.coordinateY + 2)
  return space
}

function calculateKnightMove1 (currentX,currentY) { //move if statements into a helper function
  let newX = currentX + 1;
  let newY = currentY + 2;
  if (newX > 8 || newY > 8 || newX < 1 || newY < 1) {
    return null
  } else {
    const space = new Space(newX, newY)
  }
}

function calculateKnightMove2 (currentX,currentY) {
  let newX = currentX + 2;
  let newY = currentY + 1;
  if (newX > 8 || newY > 8 || newX < 1 || newY < 1) {
    return null
  } else {
    const space = new Space(newX, newY)
  }
}

function calculateKnightMove3 (currentX,currentY) {
  let newX = currentX + 2;
  let newY = currentY - 1;
  if (newX > 8 || newY > 8 || newX < 1 || newY < 1) {
    return null
  } else {
    const space = new Space(newX, newY)
  }
}

function calculateKnightMove4 (currentX,currentY) {
  let newX = currentX + 1;
  let newY = currentY - 2;
  if (newX > 8 || newY > 8 || newX < 1 || newY < 1) {
    return null
  } else {
    const space = new Space(newX, newY)
  }
}

function calculateKnightMove5 (currentX,currentY) {
  let newX = currentX - 1;
  let newY = currentY - 2;
  if (newX > 8 || newY > 8 || newX < 1 || newY < 1) {
    return null
  } else {
    const space = new Space(newX, newY)
  }
}

function calculateKnightMove6 (currentX,currentY) {
  let newX = currentX - 2;
  let newY = currentY - 1;
  if (newX > 8 || newY > 8 || newX < 1 || newY < 1) {
    return null
  } else {
    const space = new Space(newX, newY)
  }
}

function calculateKnightMove7 (currentX,currentY) {
  let newX = currentX - 2;
  let newY = currentY + 1;
  if (newX > 8 || newY > 8 || newX < 1 || newY < 1) {
    return null
  } else {
    const space = new Space(newX, newY)
  }
}

function calculateKnightMove8 (currentX,currentY) {
  let newX = currentX - 1;
  let newY = currentY + 2;
  if (newX > 8 || newY > 8 || newX < 1 || newY < 1) {
    return null
  } else {
    const space = new Space(newX, newY)
  }
}

const testy = new Board(1, 1)

console.log(testy)
