import React from "react";
import {useState} from 'react';

function Counter({ init = 0 }: { init?: number }) {
  const [count, setCount] = useState(init);

  return (
    <div>
      <h1>Counter</h1>
      <p data-testid="counter">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;