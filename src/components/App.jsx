import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./header";
import InputTextArea from "./TextArea";
import Card from "./Card";

function App() {
  const [allCreds, setCred] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setCred(response.data);
    });
  }, []);

  function addCred(newCred) {
    setCred((prevCreds) => {
      return [...prevCreds, newCred];
    });

    Axios.post("http://localhost:3001/insert", {
      accName: newCred.accName,
      pass: newCred.pass,
    });
  }

  function deleteCred(mid, id) {
    setCred((prevCreds) => {
      return prevCreds.filter((cred, index) => {
        return index !== id;
      });
    });
    //console.log(mid);
    Axios.delete(`http://localhost:3001/delete/${mid}`); //use back-tickssss--importantttt!!!!1
  }

  function getPassword(password, id) {
    Axios.post("http://localhost:3001/showpassword", {
      password: password,
    }).then((response) => {
      setCred(
        allCreds.map((cred, index) => {
          return index === id
            ? {
                accName: response.data,
                pass: cred.pass,
              }
            : cred;
        })
      );
      console.log(response.data + " " + id);
    });
  }

  return (
    <div>
      <Header />
      <p className="disclaimer">
        Please refresh this page after adding/deleting your password
      </p>
      <InputTextArea onAdd={addCred} />
      <div className="flexbox">
        {allCreds.map((cred, index) => {
          return (
            <Card
              key={index}
              mid={cred._id}
              id={index}
              name={cred.accName}
              pass={cred.pass}
              seePassword={getPassword}
              onDelete={deleteCred}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
