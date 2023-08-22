import React from 'react';

function ClickCounter(props) {
  return (
    <div>
      <button onClick={props.incrementClick}>Click me</button>
      <p>Click count: {props.clickCount}</p>
    </div>
  );
}

export default ClickCounter;
