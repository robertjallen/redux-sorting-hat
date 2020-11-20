import React, {useEffect} from 'react';
import './App.css';
import LegosList from './components/LegosList'
import Form from './components/Form'
import {LegosContext} from './contexts/LegosContext'
import {Route} from 'react-router-dom'

// import your actions
import {fetch} from './actions/action'
// import useSelector and useDispatch from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

function App() {
 // declare a variable for dispatch using useDispatch
  const dispatch = useDispatch()
  const legos = useSelector(state => state)

  useEffect(()=>{
    dispatch(fetch())
  },[])

  return (
    <div className="App">

      {/* <h1>Sorting Hat</h1> */}
      {/* <h1>Prepare to be sorted</h1> */}
      {/* <button onClick={()=> dispatch(fetch())}>Enter the Sorting Room</button> */}
      <LegosContext.Provider value={legos}>
        <Route exact path='/' render={props => <LegosList {...props} /> }/>
        <Route exact path='/form' render={props => <Form {...props} />}/>
        {/* <LegosList /> */}
        {/* <Form /> */}
      </LegosContext.Provider>
      
    </div>
  );
}

export default App;
