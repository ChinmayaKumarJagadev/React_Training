import React, { useState, useMemo } from 'react';

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  
  const calculateFactorial = num => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const factorial = useMemo(() => calculateFactorial(count), [count]);

  return (
    <div className="container">
      <h1>Factorial Calculator</h1>
      <p>Calculate the factorial of:</p>
      <input
        type="number"
        value={count}
        onChange={e => setCount(parseInt(e.target.value))}
      />
      <p>Factorial of {count} is: {factorial}</p>
    </div>
  );
}

export default UseMemoComponent;
