import React from "react";

function Card(props) {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.pass}</p>
      <button>Delete</button>
    </div>
  );
}

export default Card;
