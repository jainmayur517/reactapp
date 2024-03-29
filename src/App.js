import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';

import logo from './images/react.svg';
import news from './images/news.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src={logo} alt="React Logo" />

          <div className="title">
            <h1>NEWS_REACT_APP</h1>
            <h4>
              Powered by
              <a href="https://newsapi.org/"> News API </a>🔥{' '}
            </h4>
          </div>

          <img className="scriptLogo" src={news} alt="Javascript Logo" />
        </div>
        <Search default="bbc-news" />
       
      </div>
    );
  }
}

export default App;
