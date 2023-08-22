import React from 'react';

function ChildComponent({ sendDataToParent }) {
  const handleClick = () => {
    const data = 'Data from Child';
    sendDataToParent(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
