

import React, { useState } from 'react'


function Counter() {
  const [count, setCount] = React.useState(0)

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count + -1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return <div>
    <h1>Counter : {count}</h1>
    <button onClick={incrementCounter}>Increament</button>
    <button onClick={decrementCounter}>Decreament</button>
    <button onClick={resetCounter}>Reset</button>


  </div>;

}


export default Counter;
