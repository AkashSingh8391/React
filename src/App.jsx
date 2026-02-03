import React, { useState } from "react";
import Child from "./Memo/Child";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // ❌ har render pe NAYA function banega
  const increment = () => {
    setCount(count + 1);
  };

  // ❌ ye bhi har render pe naya function
  const logValue = () => {
    console.log("Current Count:", count);
  };

  console.log("👨 Parent Rendered");

  return (
    <div style={{ background: dark ? "#222" : "#eee", padding: "20px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <Child onIncrement={increment} onLog={logValue} />
    </div>
  );
}

export default App;
