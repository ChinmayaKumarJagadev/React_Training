import React, { useState } from 'react';

const withClickCounter = WrappedComponent => {
  return function WithClickCounter(props) {
    const [clickCount, setClickCount] = useState(0);

    const incrementClick = () => {
      setClickCount(prevCount => prevCount + 1);
    };

    return (
      <WrappedComponent
        clickCount={clickCount}
        incrementClick={incrementClick}
        {...props}
      />
    );
  };
};

export default withClickCounter;
