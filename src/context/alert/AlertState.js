import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = props => {
    // const initialState = {
    //     alert: null,
    //     alertId: null
    // };
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set Alert
    const setAlert = (msg, type) => {
        // const alId = setTimeout(() => setAlert(null), 5000);
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        });
        //const alId = setTimeout(() => setAlert(null))
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
        
        // setAlert({ msg, type });
        // setAlertId(alId);
    };
    const unsetAlert = () => {
        dispatch({ type: REMOVE_ALERT })
        // clearTimeout(alertId);
        // setAlert(null);
        // setAlertId(null);
    };
    return (<AlertContext.Provider
        value = {{
            // alert: state.alert,
            // alertId: state.alertId,
            alert: state,
            setAlert,
            unsetAlert
        }}>
            {props.children}
    </AlertContext.Provider>)
}

export default AlertState;