function print(matrix, [y, x], [dy, dx]) {

  const newY = y + dy;
  const newX = x + dx;
  const isUnderBoundaries = newY < matrix.length && newX < matrix.length && newY >= 0 && newX >= 0;

  if (isUnderBoundaries) {

    // values 0 and 2 are valid positions it can take
    if (matrix[newY][newX] % 2 === 0){
      console.log([newY, newX]);
    }

    // if the position is 2, it means it ate the element of the chess
    if (matrix[newY][newX] === 2) return;

    // invoke recursively to make the next movement
    print(matrix, [newY, newX], [dy, dx]);

  }

}

function queenPositions(matrix, currentPosition) {

  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [-1, -1],
    [1, -1],
    [1, 1]
  ];

  for (let i = 0; i < directions.length; i++) {
    print(matrix, currentPosition, directions[i]);
  }

}

/**
 * 0 means empty
 * 1 means same team element
 * 2 means adversary that can be eaten
 */
const matrix = [
  [0, 0, 2, 2, 0],
  [0, 2, 0, 2, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1]
];

// squared matrix
console.log(queenPositions(matrix, [2, 2]));