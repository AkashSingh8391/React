import { useState, useCallback } from "react";

function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  const sum = useCallback(() => {
    return a + b;
  }, [a,b]); // ❌ empty dependency

  return (
    <div>
      <h2>Sum: {sum()}</h2>

      <button onClick={() => setA(a + 1)}>Increase A</button>
      <button onClick={() => setB(b + 1)}>Increase B</button>
    </div>
  );
}

export default App;
