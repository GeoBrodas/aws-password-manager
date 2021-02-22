import React from "react";
import SecurityIcon from "@material-ui/icons/Security";

function Header() {
  return (
    <header>
      <div>
        <h3>
          <SecurityIcon fontSize="large" />
          Password Manager
        </h3>
      </div>
    </header>
  );
}

export default Header;
