import React, { useCallback } from 'react';

function ChildComponent({ increment }) {
  const handleButtonClick = useCallback(() => {
    increment();
  }, [increment]);

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleButtonClick}>Increment Count from Child</button>
    </div>
  );
}

export default ChildComponent;
