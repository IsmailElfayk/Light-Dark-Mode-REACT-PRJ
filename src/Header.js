import React from "react";
import logo from "./images/reactjs-icon 1.svg";
export default function Header(props) {
  return (
    <div className="header">
      <img src={logo} />
      <h2>ReactFacts</h2>
      <div className="switch">
        <span className="Light-text">Light</span>
        <button onClick={props.onClick}>
          <div className="toggle"></div>
        </button>
        <span className="Dark-text">Dark</span>
      </div>
    </div>
  );
}
