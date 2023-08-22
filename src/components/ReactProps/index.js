import React, { useState } from 'react';

function ParentComponent({ children }) {
  const [displayText, setDisplayText] = useState(false);

  const handleButtonClick = () => {
    setDisplayText(true);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <div>{children}</div>
      {displayText && <p>Text displayed after clicking the button!</p>}
      <button onClick={handleButtonClick}>Show Text</button>
    </div>
  );
}

export default ParentComponent;
