import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';
export default (state, action) => { 
  switch(action.type) { 
    case SET_ALERT: 
      return {
          ...state,
          alert: action.payload.alert,
          alertId: action.payload.alertId
      }
    default: return state;
  }
}
