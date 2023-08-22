import React, { useMemo } from 'react';

function ChildComponent({ count }) {
  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    let result = 0;
    for (let i = 1; i <= count; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
    </div>
  );
}

export default ChildComponent;
