import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  foo = () => 'Bars'
  render() {
    //const name = 'John Doe';
    //const foo = () => 'Bar'
    return (
      <div className='App'>
       <h1>Hello {this.foo()}</h1>
      </div>
    );
  }

}

export default App;
