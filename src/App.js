import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios';

import './App.css';


class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() { 
    this.setState({loading: true})
    //const res = await axios.get('https://api.github.com/users')
    console.log('React Token:' + process.env.REACT_APP_GITHUB_ACCESS_TOKEN)
    console.log('React ID:' + process.env.REACT_APP_GITHUB_CLIENT_ID)
    console.log('React Secret:' + process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    // const github = axios.create({
    //   baseURL: 'https://api.github.com',
    //   headers: {
    //     Authorization: process.env.REACT_APP_GITHUB_ACCESS_TOKEN
    //   }
    // });
    // const res = await github.get('/users/')
    // const res = await axios.get('https://api.github.com/users/', {
    //   headers: {
    //     Accept: 'application/vnd.github.v3+json',
    //     Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    //   }
    // })
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
  render() {
    return(<div className="App">
      <Navbar />
      <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    </div>
    );
  
  }

}

export default App;
