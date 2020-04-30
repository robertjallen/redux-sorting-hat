import React from 'react';
import './App.css';
import House from './components/House'

// import your actions
import {fetch} from './actions/action'
// import useSelector and useDispatch from 'react-redux'
import {useDispatch} from 'react-redux'

function App() {
 // declare a variable for dispatch using useDispatch
  const dispatch = useDispatch()

  return (
    <div className="App">

      <h1>Sorting Hat</h1>
      <h1>Prepare to be sorted</h1>
      <button onClick={()=> dispatch(fetch())}>Enter the Sorting Room</button>
      <House/>
    </div>
  );
}

export default App;
