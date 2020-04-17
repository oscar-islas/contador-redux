import React from 'react';
import store from './redux/store';
import './App.css';
import {increment, decrement} from './redux/contador/contador-actions';

function App() {
  let {contadorReducer} = store.getState();
  return (
    <div className="App">      
      {contadorReducer}
      <button onClick={() => store.dispatch(increment())}>+</button>
      <button onClick={() => store.dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
