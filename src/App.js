import React from "react";
import "./App.css";
import Body from "./Body.js";
import Header from "./Header";

function App() {
  const [mode, setMode] = React.useState("");
  React.useEffect(() => {
    if (window.localStorage.getItem("Mode") === null) {
      setMode("Light");
    } else {
      setMode(window.localStorage.getItem("Mode"));
    }
  }, []);
  function toggle() {
    setMode((prevMode) => {
      window.localStorage.setItem(
        "Mode",
        prevMode === "Light" ? "Dark" : "Light"
      );
      return prevMode === "Light" ? "Dark" : "Light";
    });
  }
  return (
    <div className={`frame ${mode}`}>
      <Header onClick={toggle} />
      <Body />
      <a
        href="https://www.figma.com/design/PgvQLtyTdUf8e9K9khjzZJ/ReactFacts-Light%2FDark-Modes?node-id=2-3&node-type=frame&t=ymBCbnj6KNvQqj1H-0"
        target="_blank"
      >
        Link In Figma
      </a>
    </div>
  );
}

export default App;
