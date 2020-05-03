import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import Restos from './containers/Restos'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-brand">MyRestos</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restos">Restos</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/restos">
            <h1>Restos</h1>
            <Restos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
