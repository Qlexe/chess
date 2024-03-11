import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { getData } from "./data";
import { putData } from "./data";
import defaultData, { getData } from "./data";
import Cell from "./Cell";
import checkForMoves from "./checkForMoves";
import './soundTrack';

function App() {
  const [data, setData] = useState(false);
  console.log(data);

  const [isChosen, setIsChosen] = useState(null);
  window.oncontextmenu = function (e) {
    setIsChosen(null);
  };

  function onMovePiece(id, player, piece, xy) {
    if (player === null && isChosen === null) return;
    if (
      isChosen !== null &&
      !checkForMoves(
        data,
        data[isChosen.id].xy,
        isChosen.piece,
        xy,
        isChosen.player === "white"
      )
    )
      return;
    if (isChosen !== null && isChosen.player !== player) {
      new Audio("./step.mpga").play();

      const newData = data.map((cell) => {
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
      putData(newData);

      return;
    }
    setIsChosen({ id: id, player: player, piece: piece });
  }

  function toggleColor(color) {
    return color === "#2f385c" ? "#82acfa" : "#2f385c";
  }
  let colorCell = "#82acfa";
  console.log(data);

  return (
    <div>
      <div className="chessboard">
        {data !== false
          ? data.map((data) => {
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
            })
          : getData(setData)}
      </div>
      <div>
        <button
          onClick={() => {
            putData(defaultData);
            setTimeout(() => window.location.reload(), 1000);
          }}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
