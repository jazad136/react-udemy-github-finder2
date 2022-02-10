import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import axios from 'axios';
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import './App.css';

import GithubState from './context/github/GithubState';

const App = () => {
   // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  //   alertId: null
  // };
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [alertId, setAlertId] = useState(null);

  // Search GitHub Users
  const searchUsers = async (text) => {
    // this.setState({loading: true});
    setLoading(true);
    const config = {
      [process.env.REACT_APP_GITHUB_CLIENT_ID]:
        process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    };

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      config
    );
    // this.setState({users: res.data.items, loading: false})
    setUsers(res.data.items);
    setLoading(false);
  };

  // Get a single GitHub user
  const getUser = async (username) => {
    // this.setState({loading: true});
    setLoading(true);
    const config = {
      [process.env.REACT_APP_GITHUB_CLIENT_ID]:
        process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    };

    const res = await axios.get(
      `https://api.github.com/users/${username}`,
      config
    );
    // this.setState({user: res.data, loading: false})
    setLoading(false);
    setUser(res.data);
  };

  // Get users repos
  const getUserRepos = async (username) => {
    // this.setState({loading: true});
    setLoading(true);
    const config = {
      [process.env.REACT_APP_GITHUB_CLIENT_ID]:
        process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    };

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`,
      config
    );
    // this.setState({repos: res.data, loading: false})
    setRepos(res.data);
    setLoading(false);
  };
  // clear users from state
  // clearUsers = () => this.setState({users: [], loading: false})
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  // set an alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // this.setState({ alert: { msg: msg, type: type } })
    // const alId = setTimeout(() => this.setState({ alert: null, alertId : null}), 3000)
    // this.setState({alertId : alId})
    const alId = setTimeout(() => setAlert(null), 5000);
    setAlertId(alId);
  };

  const unsetAlert = () => {
    // clearTimeout(this.state.alertId)
    clearTimeout(alertId);
    // this.setState({ alert: null, alertId : null})
    setAlert(null);
    setAlertId(null);
  };

  return (
    
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} unsetAlert={unsetAlert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                      unsetAlert={unsetAlert}
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
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
