import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import ZeroPure from './examples/zero/Pure.js';
import ZeroOld from './examples/zero/Old.js';
import FirstPure from './examples/first/Pure.js';
import FirstMixins from './examples/first/Mixins.js';
import FirstHighOrder from './examples/first/HighOrder.js';
import FirstRenderProps from './examples/first/RenderProps.js';
import FirstHooks from './examples/first/Hooks.js';
import SecondPure from './examples/second/Pure.js';
import SecondMix from './examples/second/Mix.js';
import SecondMixHard from './examples/second/MixHard.js';

const Home = () => <div>Home</div>

const MainMenu = () => (
  <div>
    <Link to="/">
      <button>home</button>
    </Link>
    <Link to="/0-pure">
      <button>0-pure</button>
    </Link>
    <Link to="/0-old">
      <button>0-old</button>
    </Link>
    <Link to="/1-pure">
      <button>1-pure</button>
    </Link>
    <Link to="/1-mixins">
      <button>1-mixins</button>
    </Link>
    <Link to="/1-high-order">
      <button>1-high-order</button>
    </Link>
    <Link to="/1-render-props">
      <button>1-render-props</button>
    </Link>
    <Link to="/1-hooks">
      <button>1-hooks</button>
    </Link>
    <Link to="/2-pure">
      <button>2-pure</button>
    </Link>
    <Link to="/2-mix">
      <button>2-mix</button>
    </Link>
    <Link to="/2-mix-hard">
      <button>2-mix-hard</button>
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
            <Route exact path="/0-pure" component={ZeroPure} />
            <Route exact path="/0-old" component={ZeroOld} />
            <Route exact path="/1-pure" component={FirstPure} />
            <Route exact path="/1-mixins" component={FirstMixins} />
            <Route exact path="/1-high-order" component={FirstHighOrder} />
            <Route exact path="/1-render-props" component={FirstRenderProps} />
            <Route exact path="/1-hooks" component={FirstHooks} />
            <Route exact path="/2-pure" component={SecondPure} />
            <Route exact path="/2-mix" component={SecondMix} />
            <Route exact path="/2-mix-hard" component={SecondMixHard} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
