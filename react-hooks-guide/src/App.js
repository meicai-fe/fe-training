import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import FirstPure from './examples/first/Pure.js';

const Home = () => (
  <div>Home</div>
)

const MainMenu = () => (
  <div>
    <Link to="/">
      <button>home</button>
    </Link>
    <Link to="/1-pure">
      <button>1-pure</button>
    </Link>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <MainMenu/>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/1-pure" component={FirstPure} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
