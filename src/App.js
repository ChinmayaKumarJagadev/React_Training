import React, { useState } from 'react';
import './App.css';
import './style.scss'
import Car from './components/ClassComponent'
import FormData from './components/FormComponent'
import RouterCompoent from './components/Router/index'
import MemoCompoent from './components/MemoComponent/parent'
import ParentComponent from './components/ContextHooks/Parent';
import ThemeContext from './components/ContextHooks/index';
import ReactRef from './components/RactRef/index'
import ReactReducer from './components/ReactUseReducer/index'
import ReactCallback from './components/ReactCallback/parent'
import ReactUseEffect from './components/ReactUseEffect/index'

function App() {

  const [data, setData] = useState('')
  const myArray = ['React JS', 'HTML', 'CSS', 'JS'];
  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const [theme, setTheme] = useState('light');
  const [spreadOpeartor, setSpreadOpeartor] = useState([])

  const [inputValues, setInputValues] = useState({
    a: '',
    b: '',
  });
  const [results, setResults] = useState({
    add: '',
    subtract: '',
    multiply: '',
    divide: '',
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const hello = () => {
    setData("This is a arrow function example!");
  }

  const calculate = () => {
    const { a, b } = inputValues;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (!isNaN(numA) && !isNaN(numB)) {
      const add = numA + numB;
      const subtract = numA - numB;
      const multiply = numA * numB;
      const divide = numA / numB;

      setResults({
        add,
        subtract,
        multiply,
        divide,
      });
    } else {
      setResults({
        add: '',
        subtract: '',
        multiply: '',
        divide: '',
      });
    }
  };

  const spread = () => {
    const data = [...numbersOne, ...numbersTwo]
    setSpreadOpeartor(data)
  }

  return (
    <div className="App">
      <h1>React JS Training</h1>

      <div className='allcards'>
        <div className='cards'>
          <div>
            <h3>Class Component</h3>
            <Car name="I am Range Rover" />
          </div>

          <div>
            <h3>Arrow Function</h3>
            <p>A demonstration of a simple arrow function.</p>
            <p id="demo" onClick={hello}>Click me To get me</p>
            <p><b>{data}</b></p>
          </div>

          <div style={{ marginTop: '10px' }}>
            <h3>Map method in React</h3>
            {myArray.map((i) => {
              return (
                <div>
                  <p style={{ color: 'red' }}>{i}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className='cards'>
          <h3>Array Destructing</h3>
          <div>
            <input
              type="text"
              placeholder="Enter number A"
              value={inputValues.a}
              onChange={(e) => setInputValues({ ...inputValues, a: e.target.value })}
            />
            <input
              type="text"
              placeholder="Enter number B"
              value={inputValues.b}
              onChange={(e) => setInputValues({ ...inputValues, b: e.target.value })}
            />
            <button onClick={calculate}>Calculate</button>
          </div>
          <div>
            <p>Sum: {results.add}</p>
            <p>Difference: {results.subtract}</p>
            <p>Product: {results.multiply}</p>
            <p>Quotient: {results.divide}</p>
          </div>

        </div>

        <div className='cards'>
          <h3>Spread Operator</h3>
          <p id="demo" onClick={spread}>get Data using spread Operator</p>
          {spreadOpeartor.map((i) => {
            return (
              <p>{i}</p>
            )
          })}
        </div>

        <div className='cards'>
          <FormData />
        </div>

        <div className='cards'>
          <h3>Router Component</h3>
          <RouterCompoent />
        </div>

        <div className='cards'>
          <h3>React Memo Component</h3>
          <MemoCompoent />
        </div>

        <div className='cards'>
          <h4>SAAA Implementation in React</h4>
          <p>Add a little style!.</p>
        </div>

        <div className='cards'>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`App ${theme}`}>
              <h1>Theme Example</h1>
              <ParentComponent />
            </div>
          </ThemeContext.Provider>
        </div>

        <div className='cards'>
          <h3>React Ref Component</h3>
          <ReactRef />
        </div>

        <div className='cards'>
          <h3>React UseReducer Component</h3>
          <ReactReducer />
        </div>

        <div className='cards'>
          <h3>React UseCallback Component</h3>
          <ReactCallback />
        </div>

        <div className='cards'>
          <h3>React UseEffect Component</h3>
          <ReactUseEffect />
        </div>

  
      </div>
    </div>
  );
}

export default App;
