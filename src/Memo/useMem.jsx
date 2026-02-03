import React, { useState, useMemo } from "react";

function UseMem() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const double = useMemo(() => {
    console.log("Heavy calculation");
    return count * 2;
  }, [count]);

  const themeStyle = {
    backgroundColor: dark ? "grey" : "white",
    color: dark ? "white" : "grey",
    padding: "20px",
  };

  return (
    <div style={themeStyle}>
      <h2>{double}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default UseMem;
