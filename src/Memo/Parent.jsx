import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Button clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <Child onClick={handleClick} />
    </>
  );
}

export default Parent;
