import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import LoginTable from 'component/LoginTable/LoginTable';
import Paper from 'material-ui/Paper';
import {login} from 'util/Auth';
const style = {
  margin: '40px auto',
};



export default class Login extends Component{
  render() {
    return(
        <div style={style}>
        <LoginTable submit={login}/>
        </div>
    )
  }
}
