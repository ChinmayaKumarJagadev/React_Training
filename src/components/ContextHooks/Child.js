import React, { useContext } from 'react';
import ThemeContext from './index';

function ChildComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ChildComponent;
