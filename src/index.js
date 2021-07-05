import React from "react";
import ReactDOM from "react-dom";

const fname = "Francois";
const lname = "Bruere";
const num = 7;
const year = new Date().getFullYear();

const customStyle = {
  color: "red",
  fontSize: "10px"
};

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {fname} {lname}!
    </h1>
    <p style={customStyle}>
      My lucky number is {3 + 4} or const {num}.
    </p>
    <div></div>
    <p> Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
