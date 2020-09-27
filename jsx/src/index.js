// Import the React and ReactDom libraries
import React from "react";
import ReactDom from "react-dom";

// Create a react component

const App = () => {
  const btnText = { text: "Click me" };
  const labelText = "Enter name: ";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {btnText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
