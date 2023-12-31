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
import PropsReact from './components/ReactProps/index'
import PropsReactChildToParent from './components/PropsReactChildToParent/parent'
import Form from './components/Form/index'
import Table from './components/Table/index'
import PureComponent from './components/PureComponent/index'
import HOC from './components/HOC/index'
import Axios from './components/Axios/axios';
import AxiosPOST from './components/Axios/axiosPost';
import Object from './components/Hooks/Object';
import UserReducerComponent from './components/Hooks/UseReducer'
import UseMemoComponent from './components/Hooks/UseMemo';


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
          <h2 className='saas'>SAAA Implementation in React</h2>
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

        <div className='cards'>
          <h3>React Props Passing</h3>

          <PropsReact >
            <p>This is a paragraph inside ParentComponent.</p>
          </PropsReact>
        </div>

        <div className='cards'>
          <h3>React Passing props fron Child to Parent Component</h3>
          <PropsReactChildToParent />
        </div>

        <div className='cards'>
          <h3>React From Component</h3>
          <Form />
        </div>

        <div className='cards'>
          <h3>React Fragment Component</h3>
          <Table />
        </div>

        <div className='cards'>
          <h3>React Pure Component</h3>
          <PureComponent />
        </div>

        <div className='cards'>
          <h3>React HOC Component</h3>
          <HOC />
        </div>

        
        <div className='cards'>
          <h3>React Axios GET</h3>
          <Axios />
        </div>


        <div className='cards'>
          <h3>React Axios POST</h3>
          <AxiosPOST />
        </div>

        <div className='cards'>
          <h3>React HOOK Object</h3>
          <Object />
        </div>

        <div className='cards'>
          <h3>React HOOK Use-Reducer</h3>
          <UserReducerComponent />
        </div>

        <div className='cards'>
          <h3>React HOOK Use-MEMO</h3>
          <UseMemoComponent />
        </div>

      </div>
    </div>
  );
}

export default App;
