import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Details from './components/Details'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render ={()=> <Home /> } />
        <Route exact path='/bestsellers' render= { () => <Details /> } />
      </Switch>
    </Router>
  )
}

export default App;