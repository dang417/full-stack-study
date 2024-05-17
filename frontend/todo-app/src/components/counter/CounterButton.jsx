import React from "react";

export function CounterButton({ by, incrementFunction, decrementFunction }) {
  return (
    <div className="Counter">
      <button
        className="button counterButton"
        onClick={() => incrementFunction(by)}
      >
        +{by}
      </button>
      <button
        className="button counterButton"
        onClick={() => decrementFunction(by)}
      >
        -{by}
      </button>
    </div>
  );
}
