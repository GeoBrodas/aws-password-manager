import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";

function InputTextArea(props) {
  const [credit, setCredit] = useState({
    accName: "",
    pass: "",
  });

  const [icon, setIcon] = useState(false);

  function toggleP() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
      setIcon(true);
    } else {
      x.type = "password";
      setIcon(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setCredit((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitCred(event) {
    props.onAdd(credit);
    setCredit({
      accName: "",
      pass: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="accName"
          type="text"
          placeholder="Account Name"
          onChange={handleChange}
          value={credit.accName}
          required
        />
        <div style={{ display: "flex" }}>
          <input
            name="pass"
            type="password"
            placeholder="Password"
            id="myInput"
            onChange={handleChange}
            value={credit.pass}
            required
          />
          <div className="eye" style={{ cursor: "pointer" }} onClick={toggleP}>
            {icon ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>
        <Fab onClick={submitCred}>
          <EnhancedEncryptionIcon />
        </Fab>
      </form>
    </div>
  );
}

export default InputTextArea;
