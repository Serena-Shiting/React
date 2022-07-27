//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.

let greeting = "";
const date = new Date(2021, 1, 1, 17);
const time = date.getHours();

const customStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good {greeting}
  </h1>,
  document.getElementById("root")
);
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
