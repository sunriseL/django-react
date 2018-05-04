import axios from 'axios';
import _ from 'lodash';
import store from '../store';
import { setToken, setUsername } from '../actions'
import { URL, LOGIN } from '../config/Api';

export function InvalidCredentialsException(message) {
    this.message = message;
    this.name = 'InvalidCredentialsException';
}

export function login(username, password) {
  return axios
    .post(URL + LOGIN, {
      username,
      password
    })
    .then(function (response) {
        console.log('get response');
      store.dispatch(setToken(response.data.token));
      console.log(username);
      store.dispatch(setUsername(username));
      console.log('dispatch over');
    })
    .catch(function (error) {
        console.log('error occured',error);
      // raise different exception if due to invalid credentials
      if (_.get(error, 'response.status') === 400) {
        throw new InvalidCredentialsException(error);
      }
      throw error;
    });
}

export function loggedIn() {
  return store.getState().token != null;
}
