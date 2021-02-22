import React, { useState } from "react";
import Header from "./header";
import InputTextArea from "./TextArea";
import Card from "./Card";

function App() {
  const [allCreds, setCred] = useState([]);

  function addCred(newCred) {
    setCred((prevCreds) => {
      return [...prevCreds, newCred];
    });
  }

  function deleteCred(id) {
    setCred((prevCreds) => {
      return prevCreds.filter((cred, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputTextArea onAdd={addCred} />
      <div className="flexbox">
        {allCreds.map((cred, index) => {
          return (
            <Card
              key={index}
              id={index}
              name={cred.accName}
              pass={cred.pass}
              onDelete={deleteCred}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
