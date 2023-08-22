import React from 'react';
import ChildComponent from './Child';

function ParentComponent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;
