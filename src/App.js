import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import './App.css';


class App extends Component {
  
  foo = () => 'Bars'
  render() {
    return(<div className="App">
      <Navbar />
      <Users />
    </div>
    );
  
  }

}

export default App;
