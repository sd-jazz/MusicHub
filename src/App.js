import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="nav">
          <NavBar/>
        </nav>
      
      </div>

    );
  }
}

export default App;
