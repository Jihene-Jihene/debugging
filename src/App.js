import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello, World!");

  // const incrementCount = () => setCount(count + 1);
  //missing the decrementCount function
  //missing the rest button
  const reset = () => setCount(0);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);
  const decrementCount = () => setCount((prevCount) => prevCount - 1);
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={incrementCount}>Increment</button>
      <ChildComponent count={count} />
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
