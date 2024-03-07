const whiteChessPieces = [
    { id: 0, player: 'white', piece: 'rook' },
    { id: 1, player: 'white', piece: 'knight' },
    { id: 2, player: 'white', piece: 'bishop' },
    { id: 3, player: 'white', piece: 'queen' },
    { id: 4, player: 'white', piece: 'king' },
    { id: 5, player: 'white', piece: 'bishop' },
    { id: 6, player: 'white', piece: 'knight' },
    { id: 7, player: 'white', piece: 'rook' },
    { id: 8, player: 'white', piece: 'pawn' },
    { id: 9, player: 'white', piece: 'pawn' },
    { id: 10, player: 'white', piece: 'pawn' },
    { id: 11, player: 'white', piece: 'pawn' },
    { id: 12, player: 'white', piece: 'pawn' },
    { id: 13, player: 'white', piece: 'pawn' },
    { id: 14, player: 'white', piece: 'pawn' },
    { id: 15, player: 'white', piece: 'pawn' }
];
const emptySpaces = [
    { id: 16, player: null, piece: null },
    { id: 17, player: null, piece: null },
    { id: 18, player: null, piece: null },
    { id: 19, player: null, piece: null },
    { id: 20, player: null, piece: null },
    { id: 21, player: null, piece: null },
    { id: 22, player: null, piece: null },
    { id: 23, player: null, piece: null },
    { id: 24, player: null, piece: null },
    { id: 25, player: null, piece: null },
    { id: 26, player: null, piece: null },
    { id: 27, player: null, piece: null },
    { id: 28, player: null, piece: null },
    { id: 29, player: null, piece: null },
    { id: 30, player: null, piece: null },
    { id: 31, player: null, piece: null },
    { id: 32, player: null, piece: null },
    { id: 33, player: null, piece: null },
    { id: 34, player: null, piece: null },
    { id: 35, player: null, piece: null },
    { id: 36, player: null, piece: null },
    { id: 37, player: null, piece: null },
    { id: 38, player: null, piece: null },
    { id: 39, player: null, piece: null },
    { id: 40, player: null, piece: null },
    { id: 41, player: null, piece: null },
    { id: 42, player: null, piece: null },
    { id: 43, player: null, piece: null },
    { id: 44, player: null, piece: null },
    { id: 45, player: null, piece: null },
    { id: 46, player: null, piece: null },
    { id: 47, player: null, piece: null }
];
const blackChessPieces = [
    { id: 48, player: 'black', piece: 'pawn' },
    { id: 49, player: 'black', piece: 'pawn' },
    { id: 50, player: 'black', piece: 'pawn' },
    { id: 51, player: 'black', piece: 'pawn' },
    { id: 52, player: 'black', piece: 'pawn' },
    { id: 53, player: 'black', piece: 'pawn' },
    { id: 54, player: 'black', piece: 'pawn' },
    { id: 55, player: 'black', piece: 'pawn' },
    { id: 56, player: 'black', piece: 'rook' },
    { id: 57, player: 'black', piece: 'knight' },
    { id: 58, player: 'black', piece: 'bishop' },
    { id: 59, player: 'black', piece: 'queen' },
    { id: 60, player: 'black', piece: 'king' },
    { id: 61, player: 'black', piece: 'bishop' },
    { id: 62, player: 'black', piece: 'knight' },
    { id: 63, player: 'black', piece: 'rook' }
];

function cellsData() {
  return whiteChessPieces.concat(emptySpaces).concat(blackChessPieces);
}

export default cellsData();
