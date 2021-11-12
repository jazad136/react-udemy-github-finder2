import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null

  };
  // async componentDidMount() { 
  //   this.setState({loading: true})
  //   console.log('React Token:' + process.env.REACT_APP_GITHUB_ACCESS_TOKEN)
  //   console.log('React ID:' + process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   console.log('React Secret:' + process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   // https://docs.github.com/en/rest/reference/search
    
  //   // const config = {
  //   //   Authorization: process.env.REACT_APP_GITHUB_ACCESS_TOKEN
  //   // }
  //   const config = {
  //     [process.env.REACT_APP_GITHUB_CLIENT_ID]:
  //     process.env.REACT_APP_GITHUB_CLIENT_SECRET,
  //   };
    
  //   const res = await axios.get('https://api.github.com/users', config);
  //   this.setState({users: res.data, loading: false})
  // } 
  // Search GitHub Users
  searchUsers = async(text) => { 
    this.setState({loading: true});
    const config = {
      [process.env.REACT_APP_GITHUB_CLIENT_ID]:
      process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    };
    
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`, config)
    this.setState({users: res.data.items, loading: false})
  }

  // clear users from state
  clearUsers = () => this.setState({users: [], loading: false})

  // set an alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })
  }
  
  render() {
    const {users, loading} = this.state
    return(<div className="App">
      <Navbar />
      <div className="container">
        <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users} />
      </div>
    </div>
    );
  
  }

}

export default App;
