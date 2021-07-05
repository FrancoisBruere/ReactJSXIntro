import React from "react";
import ReactDOM from "react-dom";

// const fname = "Francois";
// const lname = "Bruere";
// const num = 7;
// const year = new Date().getFullYear();

// const customStyle = {
//   color: "red",
//   fontSize: "10px"
// };

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       Hello {fname} {lname}!
//     </h1>
//     <p style={customStyle}>
//       My lucky number is {3 + 4} or const {num}.
//     </p>
//     <div></div>
//     <p> Copyright {year} </p>
//   </div>,
//   document.getElementById("root")
// );
const today = new Date();
const hour = today.getHours();

let greeting;

const customStyle = {
  color: "black"
};

if (hour < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (hour < 18) {
  greeting = "Good afternoon";
  customStyle.color = "blue";
} else {
  greeting = "Good night";
  customStyle.color = "green";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,

  document.getElementById("root")
);
