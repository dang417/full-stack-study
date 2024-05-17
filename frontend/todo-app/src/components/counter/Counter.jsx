import React from "react";
import "./Counter.css";
import { useState } from "react";
import { CounterButton } from "./CounterButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementFunction(by) {
    setCount(count + by);
  }

  function decrementFunction(by) {
    setCount(count - by);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton
        by={1}
        incrementFunction={incrementFunction}
        decrementFunction={decrementFunction}
      />
      <CounterButton
        by={3}
        incrementFunction={incrementFunction}
        decrementFunction={decrementFunction}
      />
      <CounterButton
        by={5}
        incrementFunction={incrementFunction}
        decrementFunction={decrementFunction}
      />
      <button className="button resetButton" onClick={resetCounter}>
        RESET
      </button>
    </>
  );
}
