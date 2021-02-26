import React from "react";

const hashnode = "http://geobrodas.hashnode.dev";

function Footer() {
  return (
    <footer>
      <p>Built by Georgey</p>
      <p>
        Follow On{" "}
        <strong>
          <a href={hashnode} rel="noreferrer" target="_blank">
            Hashnode
          </a>
        </strong>
      </p>
    </footer>
  );
}

export default Footer;
