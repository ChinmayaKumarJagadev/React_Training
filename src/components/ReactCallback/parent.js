import React, { useState } from 'react';
import ChildComponent from './child';

const Parent = () =>{
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <ChildComponent increment={incrementCount} />
    </div>
  );
}

export default Parent;
