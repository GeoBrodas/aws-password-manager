import React, { useState } from "react";

function InputTextArea(props) {
  const [credit, setCredit] = useState({
    accName: "",
    pass: "",
  });

  function toggleP() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
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
        />
        <div style={{ display: "flex" }}>
          <input
            name="pass"
            type="password"
            placeholder="Password"
            id="myInput"
            onChange={handleChange}
            value={credit.pass}
          />
          <div style={{ cursor: "pointer" }} onClick={toggleP}>
            Show
          </div>
        </div>
        <button onClick={submitCred}>Add</button>
      </form>
    </div>
  );
}

export default InputTextArea;
