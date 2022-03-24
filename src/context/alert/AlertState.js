import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = props => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set Alert
    const setAlert = (msg, type) => {
        if(state && state.alertId) {
            clearTimeout(state.alertId)
        }
        const alertId = setTimeout(() => dispatch({ type: REMOVE_ALERT }),5000);
        
        dispatch({
            type: SET_ALERT,
            payload: {msg, type, alertId}
        });
    };

    // Unset Alert
    const unsetAlert = (alertId) => {
        dispatch({ type: REMOVE_ALERT })
        clearTimeout(alertId)
    };
    return (<AlertContext.Provider
        value = {{
            alert: state,
            setAlert,
            unsetAlert
        }}>
            {props.children}
    </AlertContext.Provider>)
}

export default AlertState;