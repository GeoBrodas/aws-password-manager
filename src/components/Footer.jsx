import React from "react";

const hashnode = "http://geobrodas.hashnode.dev";

function Footer() {
  return (
    <div className="footer">
      <p>App by Georgey</p>
      <p>
        Follow On{" "}
        <strong>
          <a href={hashnode} rel="noreferrer" target="_blank">
            Hashnode
          </a>
        </strong>
      </p>
    </div>
  );
}

export default Footer;
