import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import HomeContainer
import HomeContainer from './components/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="home">
        <HomeContainer />
      </div>
    );
  }
}

export default App;
