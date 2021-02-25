import React from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Card(props) {
  function removeCard() {
    props.onDelete(props.mid, props.id);
  }

  function showP() {
    props.seePassword(props.pass, props.id);
  }

  return (
    <Zoom in={true} style={{ transitionDelay: true && "200ms" }}>
      <div className="note">
        <h1>{props.name}</h1>
        {/* <p>{props.pass}</p> */}
        <Zoom in={true} style={{ transitionDelay: true && "400ms" }}>
          <Fab onClick={showP}>
            <VisibilityIcon />
          </Fab>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: true && "600ms" }}>
          <Fab onClick={removeCard}>
            <DeleteForeverIcon />
          </Fab>
        </Zoom>
      </div>
    </Zoom>
  );
}

export default Card;
