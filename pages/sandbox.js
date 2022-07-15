import React, { useState } from 'react';

const Sandbox = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(x => x - 1)}>Decrement</button>
      <button onClick={() => setCounter(x => x + 1)}>Increment</button>
    </div>
  );
};

export default Sandbox;
