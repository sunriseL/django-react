import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import 'antd/lib/form/style';
import 'antd/lib/checkbox/style';
import 'antd/lib/button/style';
import 'antd/lib/icon/style';
import 'antd/lib/input/style';
const FormItem = Form.Item;


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class StaticLoginTable extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    var value;
    this.props.form.validateFields((err, values) => {
      if (!err) {
          value = values;
        console.log('Received values of form: ', values);
      }
    });
    this.props.submit(value.userName, value.password);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{maxWidth:'300px',margin:'0 auto'}}onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a style={{float:'right'}}className="login-form-forgot" href="">Forgot password</a>
          <Button style={{width:'100%'}}type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </FormItem>
      </Form>
    );
  }
}


const LoginTable = Form.create()(StaticLoginTable);
export default LoginTable;
