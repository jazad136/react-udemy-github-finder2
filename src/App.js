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
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [alertId, setAlertId] = useState(null);

  // Get a single GitHub user
  const getUser = async (username) => {
    setLoading(true);
    const config = {
      [process.env.REACT_APP_GITHUB_CLIENT_ID]:
        process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    };

    const res = await axios.get(
      `https://api.github.com/users/${username}`,
      config
    );
    setLoading(false);
    setUser(res.data);
  };

  // Get user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const config = {
      [process.env.REACT_APP_GITHUB_CLIENT_ID]:
        process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    };

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`,
      config
    );
    setRepos(res.data);
    setLoading(false);
  };

  // clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  
  // set an alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    const alId = setTimeout(() => setAlert(null), 5000);
    setAlertId(alId);
  };

  const unsetAlert = () => {
    clearTimeout(alertId);
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
                      // searchUsers={searchUsers}
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
