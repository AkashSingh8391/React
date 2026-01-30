import { useEffect, useRef, useState } from "react";

function UseRefAllInOne() {

  /* ===============================
     1️⃣ DOM ACCESS (Input Focus)
  =============================== */
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  /* ===============================
     2️⃣ UNCONTROLLED INPUT VALUE
  =============================== */
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Entered Name: " + inputRef.current.value);
  };

  /* ===============================
     3️⃣ RENDER COUNT TRACKING
  =============================== */
  const renderCount = useRef(0);
  renderCount.current++;

  /* ===============================
     4️⃣ PREVIOUS STATE VALUE
  =============================== */
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  /* ===============================
     5️⃣ SETINTERVAL / TIMER HANDLE
  =============================== */
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        console.log("Timer Running...");
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  /* ===============================
     6️⃣ SCROLL INTO VIEW
  =============================== */
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>🔥 useRef All Use Cases Demo</h2>

      {/* ---------- Input + Focus ---------- */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter your name"
        />
        <br /><br />
        <button type="button" onClick={focusInput}>
          Focus Input
        </button>
        <button type="submit">
          Submit
        </button>
      </form>

      <hr />

      {/* ---------- Render Count ---------- */}
      <h3>Component Rendered: {renderCount.current} times</h3>

      <hr />

      {/* ---------- Previous State ---------- */}
      <h3>Count: {count}</h3>
      <h4>Previous Count: {prevCount.current}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <hr />

      {/* ---------- Timer ---------- */}
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>

      <hr />

      {/* ---------- Scroll ---------- */}
      <button onClick={scrollToSection}>
        Scroll to Bottom Section
      </button>

      <div style={{ height: "600px" }}></div>

      <div
        ref={sectionRef}
        style={{
          height: "100px",
          background: "lightgreen",
          textAlign: "center",
          padding: "20px"
        }}
      >
        🎯 You Reached the Section!
      </div>

    </div>
  );
}

export default UseRefAllInOne;
