import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

function Cell(props) {
  return (
    <div
      className={`cell${props.isChosen ? " chosen" : ""}`}
      style={{
        backgroundColor: props.background,
      }}
      id={props.id}
      xy={props.xy}
      player={props.player}
      onClick={(e) =>
        props.handleMove(props.id, props.player, props.piece, props.xy)
      }
    >
      {props.player && (
        <img src={`./img/${props.player}/${props.piece}.png`} alt="cell"></img>
      )}
    </div>
  );
}

const audioByStep = "./track.mp3";
const player = new Audio(audioByStep);
window.addEventListener("click", () => {
  player.volume = 0.3;
  player.play();
  player.addEventListener("ended", () => {
    player.play();
  });
});

function App({ data }) {
  const [cellsData, setData] = useState(data);
  const [isChosen, setIsChosen] = useState(null);
  window.oncontextmenu = function (e) {
    setIsChosen(null);
  };

  function checkForMoving(data, start, piece, end, isWhite) {
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
  

    if (piece === 'rook' || piece === 'queen' || piece === 'bishop') {
      while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        possibleMoves.push([newRow, newCol]);
        newRow += rowOffset;
        newCol += colOffset;
      }
    } else if (piece === 'pawn') {
      // For pawn, add forward move and captures
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        if (rowOffset === 0 || (isWhite && rowOffset === 1) || (!isWhite && rowOffset === -1)) {
          possibleMoves.push([newRow, newCol]);
        }
      }
    } else {
      // For other pieces, add the move if it's within the board
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        possibleMoves.push([newRow, newCol]);
      }
    }
  }

    const positionExists = possibleMoves.some(
      (move) => move[0] === newPosition[0] && move[1] === newPosition[1]
    );

    return positionExists;
  }

  function onMovePiece(id, player, piece, xy) {
    if (player === null && isChosen === null) return;
    if (isChosen !== null && !checkForMoving(cellsData, cellsData[isChosen.id].xy, isChosen.piece, xy, isChosen.player === 'white')) return;
    if (isChosen !== null && isChosen.player !== player) {
      new Audio("./step.mpga").play();

      const newData = cellsData.map((cell) => {
        if (cell.id === id) {
          // update new item
          if (cell.player !== isChosen.player && cell.player !== null) {
            new Audio("./broke.mp3").play();
          }
          cell.player = isChosen.player;
          cell.piece = isChosen.piece;
          if (
            isChosen.piece === "pawn" &&
            isChosen.player === "white" &&
            56 <= id &&
            id <= 63
          ) {
            console.log(id);
            const piece = prompt(
              "write name of piece: rook, knight, bishop, queen"
            );
            cell.player = isChosen.player;
            cell.piece = piece;
          }
          if (
            isChosen.piece === "pawn" &&
            isChosen.player === "black" &&
            0 <= id &&
            id <= 7
          ) {
            const piece = prompt(
              "write name of piece: rook, knight, bishop, queen"
            );
            cell.player = isChosen.player;
            cell.piece = piece;
          }
        }
        if (cell.id === isChosen.id) {
          // delete old item
          cell.player = null;
          cell.piece = null;
        }
        return cell;
      });
      setIsChosen(null);
      setData(newData);
      return;
    }
    setIsChosen({ id: id, player: player, piece: piece });
  }

  function toggleColor(color) {
    return color === "#2f385c" ? "#82acfa" : "#2f385c";
  }
  let colorCell = "#82acfa";

  return (
    <div className="chessboard">
      {cellsData.map((data) => {
        colorCell = toggleColor(colorCell);

        if (data.id % 8 === 0) {
          colorCell = toggleColor(colorCell);
        }
        return (
          <Cell
            key={data.id}
            xy={data.xy}
            background={colorCell}
            isChosen={isChosen !== null && isChosen.id === data.id}
            handleMove={onMovePiece}
            {...data}
          />
        );
      })}
    </div>
  );
}

export default App;
