import React, { useReducer } from 'react';
import axios from 'axios';
import alertContext from './githubContext';
import alertReducer from './githubReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const GithubState = props => {
    const initialState = {
        alert: null,
        alertId: null
    };

    const [state, dispatch] = useReducer(githubReducer, initialState)


    const showAlert = (msg, type) => {
        const alId = setTimeout(() => setAlert(null), 5000);
        dispatch({
            type: SET_ALERT,
            payload: {
                alert: 'Please enter something.',
                alertId: alId
            }
        })
        // setAlert({ msg, type });
        // setAlertId(alId);
      };

    return (<githubContext.Provider
        value = {{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser, 
            getUserRepos,
            setAlert
        }}>
            {props.children}
    </githubContext.Provider>)
}

export default GithubState;