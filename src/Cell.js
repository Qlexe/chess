import React from "react";
export default function Cell(props) {
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
