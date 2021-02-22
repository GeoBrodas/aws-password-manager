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

  return (
    <div>
      <Header />
      <InputTextArea onAdd={addCred} />
      <div className="flexbox">
        {allCreds.map((cred, index) => {
          return <Card key={index} name={cred.accName} pass={cred.pass} />;
        })}
      </div>
    </div>
  );
}

export default App;
