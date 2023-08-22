import React, { useState } from 'react';
import ChildComponent from './Child';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <ChildComponent count={count} />
    </div>
  );
}

export default ParentComponent;
