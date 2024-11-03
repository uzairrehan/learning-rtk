"use client";

import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const 
  return (
    <div>
      <h1>Im Counter</h1>
      <h4>{number}</h4>
      <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
      <button
        onClick={() => ({})}
      >
        -
      </button>
    </div>
  );
}
