import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import axios from 'axios';
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    alertId: null

  };

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

  // Get a single GitHub user
  getUser = async (username) => {
    this.setState({loading: true});
    const config = {
      [process.env.REACT_APP_GITHUB_CLIENT_ID]:
      process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    };
    
    const res = await axios.get(
      `https://api.github.com/users/${username}`, config)
    this.setState({user: res.data, loading: false})
  }
  // clear users from state
  clearUsers = () => this.setState({users: [], loading: false})

  // set an alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })
    const alId = setTimeout(() => this.setState({ alert: null, alertId : null}), 3000)
    this.setState({alertId : alId})
  }
  
  unsetAlert = () => { 
    clearTimeout(this.state.alertId)
    this.setState({ alert: null, alertId : null})
  }
  render() {
    const {users, user, loading} = this.state
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} unsetAlert={this.unsetAlert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                      unsetAlert={this.unsetAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  
  }

}

export default App;
