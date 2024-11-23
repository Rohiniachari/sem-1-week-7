import React, { useState } from "react";
import "./App.css";

function InputState() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1>Input State</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>You typed: {input}</p>
    </div>
  );
}

export default InputState;
