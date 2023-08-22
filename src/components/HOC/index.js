import React from 'react';
import ClickCounter from './clickCounter';
import HoverCounter from './hoverCounter';
import withClickCounter from './withCounter';

const ClickCounterWithCounter = withClickCounter(ClickCounter);
const HoverCounterWithCounter = withClickCounter(HoverCounter);

function App() {
  return (
    <div>
      <h1>Higher Order Component Example</h1>
      <ClickCounterWithCounter />
      <HoverCounterWithCounter />
    </div>
  );
}

export default App;
