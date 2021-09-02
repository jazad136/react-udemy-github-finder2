import React, { Component } from 'react';
import './App.css';

class AppNoJSX extends Component {
  
  render() {
    return (
      React.createElement('div', 
      {className: 'App'}, 
      React.createElement('h1', null, 'Hello from React') )
    );
  }

}

export default App;
