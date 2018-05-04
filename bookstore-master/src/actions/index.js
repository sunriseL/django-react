import * as actionType from './types';

export const setToken = (data) => {
  return {
    type: actionType.SET_TOKEN,
    data
  }
}

export const setUsername = (data) => {
  return {
    type:'SET_NAME',
    data
  }
}
