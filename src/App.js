import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() { 
    this.setState({loading: true})
    console.log('React Token:' + process.env.REACT_APP_GITHUB_ACCESS_TOKEN)
    console.log('React ID:' + process.env.REACT_APP_GITHUB_CLIENT_ID)
    console.log('React Secret:' + process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    // https://docs.github.com/en/rest/reference/search
    const config = {
      [process.env.REACT_APP_GITHUB_CLIENT_ID]:
      process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    };
    // const config = {
    //   Authorization: process.env.REACT_APP_GITHUB_ACCESS_TOKEN
    // }
    const res = await axios.get('https://api.github.com/users', config);
    this.setState({users: res.data, loading: false})
  } 
  // Search GitHub Users
  searchUsers = (text) => { 
    console.log(text);
  }
  render() {
    return(<div className="App">
      <Navbar />
      <div className="container">
        <Search searchUsers={this.searchUsers} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    </div>
    );
  
  }

}

export default App;
