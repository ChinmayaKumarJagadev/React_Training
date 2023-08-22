import React from 'react';

function HoverCounter(props) {
  return (
    <div>
      <button onMouseOver={props.incrementClick}>Hover me</button>
      <p>Hover count: {props.clickCount}</p>
    </div>
  );
}

export default HoverCounter;
