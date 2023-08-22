import React from 'react';
import ChildComponent from './child';

function ParentComponent() {
  const receiveDataFromChild = (data) => {
    alert('Received data from child:', data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent sendDataToParent={receiveDataFromChild} />
    </div>
  );
}

export default ParentComponent;
