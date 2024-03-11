export default function checkForMoves(data, start, piece, end, isWhite) {
  const moveVectors = {
    pawn: [
      [1, 0],
      [2, 0],
      [-1, 0],
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ],
    knight: [
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
    ],
    bishop: [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ],
    rook: [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ],
    queen: [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ],
    king: [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ],
  };

  console.log(start, piece, end);
  const position = [
    Number(start.substring(0, start.length / 2)),
    Number(start.substring(start.length / 2)),
  ];
  console.log(position);
  const newPosition = [
    Number(end.substring(0, end.length / 2)),
    Number(end.substring(end.length / 2)),
  ];
  console.log(newPosition);

  const possibleMoves = [];
  const [row, col] = position;

  for (const [rowOffset, colOffset] of moveVectors[piece]) {
    let newRow = row + rowOffset;
    let newCol = col + colOffset;

    if (piece === "rook" || piece === "queen" || piece === "bishop") {
      while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        possibleMoves.push([newRow, newCol]);
        newRow += rowOffset;
        newCol += colOffset;
      }
    } else if (piece === "pawn") {
      // For pawn, add forward move and captures
      //   if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      if (
        rowOffset === 0 ||
        (isWhite && rowOffset === 1) ||
        (!isWhite && rowOffset === -1)
      ) {
        possibleMoves.push([newRow, newCol]);
        if (
          (Number(start) >= 10 && Number(start) <= 17) ||
          (Number(start) >= 60 && Number(start) <= 67)
        ) {
          possibleMoves.push(
            isWhite
              ? [newRow + 1, newCol, "this"]
              : [newRow - 1, newCol, "this"],
          );
        }
      }
      //   }
    } else {
      // For other pieces, add the move if it's within the board
      //   if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      possibleMoves.push([newRow, newCol]);
      //   }
    }
  }

  const positionExists = possibleMoves.some(
    (move) => move[0] === newPosition[0] && move[1] === newPosition[1],
  );

  console.log(possibleMoves);

  return positionExists;
}
