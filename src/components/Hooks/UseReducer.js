import React, { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="container">
      <h1>Counter Example using useReducer</h1>
      <p>Count: {state.count}</p>
      <button
        className="btn btn-primary mr-2"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Increment
      </button>
      <button
        className="btn btn-danger mr-2"
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Decrement
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Reset
      </button>
    </div>
  );
}

export default UseReducerComponent;
