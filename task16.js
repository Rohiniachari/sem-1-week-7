import React, { useState } from "react";
import "./App.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default CounterApp;
