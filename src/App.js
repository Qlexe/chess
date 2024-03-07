import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import initializedData from "./cellsData";

function Cell(props) {
  // const [player, setPlayer] = useState(props.player);
  // const [piece, setPiece] = useState(props.piece);

  console.log(props.isChosen);

  return (
    <div
      className={`cell${props.isChosen ? " chosen" : ""}`}
      style={{
        backgroundColor: props.background,
      }}
      id={props.id}
      player={props.player}
      onClick={(e) => props.handleMove(props.id, props.player, props.piece)}
    >
      {props.player && (
        <img src={`./img/${props.player}/${props.piece}.png`} alt="cell"></img>
      )}
    </div>
  );
      }

  const audioByStep = "./track.mp3";
  const player = new Audio(audioByStep);
  player.play();
  player.addEventListener("ended", () => {
    player.currentTime = 0;
    player.play();
  });


function App() {
  const [cellsData, setData] = useState(initializedData);
  const [isChosen, setIsChosen] = useState(null);



  function onMovePiece(id, player, piece) {
    if (isChosen !== null) {
      const audioByStep = "./step.mpga";
      const player = new Audio(audioByStep);
      player.play();
      const newData = cellsData.map((cell) => {
        if (cell.id === id) {
          // update new item
          cell.player = isChosen.player;
          cell.piece = isChosen.piece;
        }
        if (cell.id === isChosen.id) {
          // delete old item
          cell.player = null;
          cell.piece = null;
        }
        return cell;
      });
      setIsChosen(null);
      return setData(newData);
    }
    setIsChosen({ id: id, player: player, piece: piece });
  }

  console.log(cellsData);
  function toggleColor(color) {
    return color === "#2f385c" ? "#82acfa" : "#2f385c";
  }
  let colorCell = "#82acfa";
  // const cells = cellsData.map((data) => {
  //   colorCell = toggleColor(colorCell);

  //   if (data.id % 8 === 0) {
  //     colorCell = toggleColor(colorCell);
  //   }
  //   return (
  //     <Cell
  //       key={data.id}
  //       background={colorCell}
  //       handleMove={onMovePiece}
  //       {...data}
  //     />
  //   );
  // });

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
