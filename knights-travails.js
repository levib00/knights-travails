//create new board with knight as the root
class Board {
  constructor(x, y) {
    this.knight = makeGameBoard(x, y)
  }
}
class Space {
  constructor(x, y) {
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

  function levelOrder(space, newX, newY, func) {
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
    //console.log('queue:', queueRec);
    //console.log('length',queueRec.length);
    // if (queueRec.length === 0 && func === null) {
    //   const newSpace = new Space(newX, newY)
    //   return newSpace
    // }
    if (queueRec.length === 0) {
      return null
    }
    //console.log("queue:" ,queueRec)
    levelOrder(queueRec[0], newX, newY, func)
    
  }
  const newValue = levelOrder(space, newX, newY, func)
  console.log(newValue)
  return newValue
}

function makeGameBoard(x, y) { 
  if (x > 8 || x < 1 || y > 8 || y < 1) {
    return null
  }
  
  //new idea, add level order here but make every return null except the one that occurs when node is found. if search doesn't return null, set knight move to levelorder(), else set knightmove to makeGameBoard
  const space = new Space(x, y)

  const checkKnightMove1 = levelOrderRec(space, space.coordinateX + 1, space.coordinateY + 2)
  const checkKnightMove2 = levelOrderRec(space, space.coordinateX + 2, space.coordinateY + 1)
  const checkKnightMove3 = levelOrderRec(space, space.coordinateX + 2, space.coordinateY - 1)
  const checkKnightMove4 = levelOrderRec(space, space.coordinateX + 1, space.coordinateY - 2)
  const checkKnightMove5 = levelOrderRec(space, space.coordinateX - 1, space.coordinateY - 2)
  const checkKnightMove6 = levelOrderRec(space, space.coordinateX - 2, space.coordinateY - 1)
  const checkKnightMove7 = levelOrderRec(space, space.coordinateX - 2, space.coordinateY + 1)
  const checkKnightMove8 = levelOrderRec(space, space.coordinateX - 1, space.coordinateY + 2)

  if (checkKnightMove1 !== null) {
    space.knightMove1 = checkKnightMove1
  } else {
    console.log('1');
    space.knightMove1 = makeGameBoard(space.coordinateX + 1, space.coordinateY + 2)
  }
  
  if (checkKnightMove2 !== null) {
    
    space.knightMove2 = checkKnightMove2
  } else {
    console.log('2')
    space.knightMove2 = makeGameBoard(space.coordinateX + 2, space.coordinateY + 1)
  }

  if (checkKnightMove3 !== null) {
    space.knightMove3 = checkKnightMove3
  } else {
    console.log('3')
    space.knightMove3 = makeGameBoard(space.coordinateX + 2, space.coordinateY - 1)
  }

  if (checkKnightMove4 !== null) {
    space.knightMove4 = checkKnightMove4
  } else {
    console.log('4')
    space.knightMove4 = makeGameBoard(space.coordinateX + 1, space.coordinateY - 2)
  }

  if (checkKnightMove5 !== null) {
    space.knightMove5 = checkKnightMove5
  } else {
    console.log('5')
    space.knightMove5 = makeGameBoard(space.coordinateX - 1, space.coordinateY - 2)
  }

  if (checkKnightMove6 !== null) {
    space.knightMove6 = checkKnightMove6
  } else {
    console.log('6')
    space.knightMove6 = makeGameBoard(space.coordinateX - 2, space.coordinateY - 1)
  }

  if (checkKnightMove7 !== null) {
    space.knightMove7 = checkKnightMove7
  } else {
    console.log('7')
    space.knightMove7 = makeGameBoard(space.coordinateX - 2, space.coordinateY + 1)
  }

  if (checkKnightMove8 !== null) {
    space.knightMove8 = checkKnightMove8
  } else {
    console.log('8')
    space.knightMove8 = makeGameBoard(space.coordinateX - 1, space.coordinateY + 2)
  }

  // space.knightMove2 = levelOrderRec(space, space.coordinateX + 2, space.coordinateY + 1)
  // space.knightMove3 = levelOrderRec(space, space.coordinateX + 2, space.coordinateY - 1)
  // space.knightMove4 = levelOrderRec(space, space.coordinateX + 1, space.coordinateY - 2)
  // space.knightMove5 = levelOrderRec(space, space.coordinateX - 1, space.coordinateY - 2)
  // space.knightMove6 = levelOrderRec(space, space.coordinateX - 2, space.coordinateY - 1)
  // space.knightMove7 = levelOrderRec(space, space.coordinateX - 2, space.coordinateY + 1)
  // space.knightMove8 = levelOrderRec(space, space.coordinateX - 1, space.coordinateY + 2)
  
  return space
}

const testy = new Board(1, 1)

console.log(testy)
