import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';


class App extends Component {
  
  foo = () => 'Bars'
  render() {
    return(<div className="App">
      <Navbar icon="fab fa-github" title="GitHub Finder"/>
      
    </div>
    );
  
  }

}

export default App;
