import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [buttonState, setButtonState] = useState(false);

  const intervalRef = useRef(null);

  const increaseCount = () => {
    setCount((state) => state + 1);
  };

  const changeButtonState = () => {
    if (buttonState) {
      clearTimeout(intervalRef.current);
    } else {
      intervalRef.current = setInterval(increaseCount, 1000);
    }
    setButtonState((state) => !state);
  };

  const resetCounter = () => {
    clearTimeout(intervalRef.current);
    setCount(0);
    setButtonState(false);
  };

  return (
    <div className="App">
      <div>Counter Value: {count}</div>
      <div style={{ padding: "10px" }}>
        <button onClick={() => changeButtonState()}>
          {!buttonState ? "Start" : "Pause"}
        </button>
      </div>
      <div style={{ padding: "10px" }}>
        <button onClick={() => resetCounter()}>Reset</button>
      </div>
    </div>
  );
}
