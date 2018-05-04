import { combineReducers } from 'redux';
import * as actionType from '../actions/types';

const tokenInitialState = null;
const token = (state = tokenInitialState, action) => {
  switch(action.type) {
    case actionType.SET_TOKEN:
      return action.data;
    default:
      return state;
  }
}

const username = (state = '', action) => {
    switch(action.type) {
      case 'SET_NAME':
        return action.data;
      default:
        return state;
    }
}


const appReducer = combineReducers({
  token,
  username,
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
