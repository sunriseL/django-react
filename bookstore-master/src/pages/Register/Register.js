import React, {Component} from 'react';
import RegisterTable from 'component/RegisterTable/RegisterTable';



const style = {
  margin: '40px auto',
};

export default class Register extends Component{
  render() {
    return(
        <div style={style}>
        <RegisterTable/>
        </div>
    )
  }
}
