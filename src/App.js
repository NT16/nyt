import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import { reducer, initialState } from './reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, categories, data } = state;
 
  useEffect(() => {
    dispatch({ type: "FETCHING" });
    
    if (localStorage.getItem('nyt')) {
      let data = JSON.parse(localStorage.getItem('nyt'));
      dispatch({ type: "LIST_DATA_RECEIVED", data });
    } else {
      fetch('/api/nyt/lists')
        .then(res => res.json())
        .then(res => {
          dispatch({ type: "LIST_DATA_RECEIVED", data: res.results })
          localStorage.setItem('nyt', JSON.stringify(res.results))
        })
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Home
          loading={loading}
          categories={categories}
          dispatch={dispatch}
        />
        }
        />

        <Route exact path='/bestsellers' render={() => <Details
          loading={loading}
          data={data}
        />
        }
        />
      </Switch>
    </Router>
  )
}

export default App;