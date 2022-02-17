import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false 
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    // Search Users
    const searchUsers = async (text) => {
      setLoading(true);
      const config = {
        [process.env.REACT_APP_GITHUB_CLIENT_ID]:
          process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      };
  
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}`,
        config
      );
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      })
    };
    // Get User
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
      // setLoading(false);
      // setUser(res.data);
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    };
    // Get Repos
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
      // setRepos(res.data);
      // setLoading(false);
      dispatch({
        type: GET_REPOS,
        payload: res.data
      })
    };
  
    // Clear Users
    const clearUsers = () => dispatch({type: CLEAR_USERS})
  

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return (<githubContext.Provider
        value = {{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser, 
            getUserRepos
        }}>
            {props.children}
    </githubContext.Provider>)
}

export default GithubState;