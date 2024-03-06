import React from "react";
// import logo from './logo.svg';
import "./App.css";

function Cell(props) {
  const { id, player, piece, background } = props;
  return (
    <div
      className="cell"
      style={{ backgroundColor: background }}
      player={player}
      id={id}
    >
      {player && <img src={`./img/${player}/${piece}.png`} alt="cell"></img>}
    </div>
  );
}

function App() {
  const cells = [];
  const piecesGeneral = [
    "rook",
    "knight",
    "bishop",
    "queen",
    "king",
    "bishop",
    "knight",
    "rook",
  ];
  function toggleColor(color) {
    return color === "#2f385c" ? "#82acfa" : "#2f385c";
  }
  let colorCell = "#82acfa";

  for (let i = 0; i < 64; i++) {
    let player = null;
    let piece = null;
    if (i < 16) {
      player = "white";
      piece = piecesGeneral[i];
      if (7 < i) piece = "pawn";
    } else if (47 < i) {
      player = "black";
      piece = piecesGeneral[i - 56];
      if (56 > i) piece = "pawn";
    }
    colorCell = toggleColor(colorCell);

    if (
       i % 8 === 0
    ) {
      colorCell = toggleColor(colorCell);
    }

    cells.push(
      <Cell
        key={i}
        id={i}
        player={player}
        piece={piece}
        background={colorCell}
      ></Cell>
    );
  }

  return <div className="chessboard">{cells}</div>;
}

export default App;
