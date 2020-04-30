import React from 'react';
import './App.css';
import House from './components/House'
import {HouseContext} from './contexts/HouseContext'

// import your actions
import {fetch} from './actions/action'
// import useSelector and useDispatch from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

function App() {
 // declare a variable for dispatch using useDispatch
  const dispatch = useDispatch()
  const house = useSelector(state => state)

  return (
    <div className="App">

      <h1>Sorting Hat</h1>
      <h1>Prepare to be sorted</h1>
      <button onClick={()=> dispatch(fetch())}>Enter the Sorting Room</button>
      <HouseContext.Provider value={house}>
        <House />
      </HouseContext.Provider>
      
    </div>
  );
}

export default App;
