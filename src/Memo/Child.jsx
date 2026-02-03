import React from "react";

const Child = React.memo(({ onIncrement, onLog }) => {
  console.log("👶 Child Rendered");

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onLog}>Log</button>
    </div>
  );
});

export default Child;
