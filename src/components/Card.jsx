import React from "react";

function Card(props) {
  function removeCard() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.pass}</p>
      <button onClick={removeCard}>Delete</button>
    </div>
  );
}

export default Card;
