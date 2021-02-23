import React from "react";
import Fab from "@material-ui/core/Fab";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Card(props) {
  function removeCard() {
    props.onDelete(props.mid, props.id);
  }

  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.pass}</p>
      <Fab onClick={removeCard}>
        <DeleteForeverIcon />
      </Fab>
    </div>
  );
}

export default Card;
