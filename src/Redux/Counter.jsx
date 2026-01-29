import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../Redux/counterSlice";

function Counter() {
  // 🔹 Read data from Redux store
  const count = useSelector((state) => state.counter.value);

  // 🔹 Dispatch actions
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Redux Toolkit Counter</h2>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>
    </div>
  );
}

export default Counter;
