import React from "react";
import ReactDOM from "react-dom";

const fname = "Francois";
const lname = "Bruere";
const num = 7;
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>My lucky number is {num}.</p>
    <p> Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
