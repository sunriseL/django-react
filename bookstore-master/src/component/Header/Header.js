import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Layout, Menu, Breadcrumb } from 'antd';
import {connect} from 'react-redux';
import store from '../../store';
const { Header, Footer, Sider, Content } = Layout;


const mapStateToProps = (state) => {
    return {
        login: store.getState().token != null
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {};
}
class StaticHeader extends Component {

  constructor(props) {
    super(props);

  }

  handleChange = (event, index, value) => this.setState({value});
    render() {
        const login = this.props.login;
        return (
          <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><NavLink to="/view">书籍库存</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/cart">购物车</NavLink></Menu.Item>
        {!login?<Menu.Item key="3"><NavLink to="/login">登录/注册</NavLink></Menu.Item>:null}
        {login?<Menu.Item key="4"><NavLink to="/usr/sunrise">用户界面</NavLink></Menu.Item>:null}
      </Menu>
    </Header>
          /*<Toolbar style={{backgroundColor:'#03A9F4'}}>
      <ToolbarGroup firstChild={true}>
      <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <Link to="/view"><MenuItem primaryText="商品页面" /></Link>
      <MenuItem primaryText="购物车" />
      <MenuItem primaryText="订单信息" />
      <Link to="/login"><MenuItem primaryText="登录/登出" /></Link>
    </IconMenu>

      </ToolbarGroup>
      <ToolbarGroup>
      <TextField
      hintText="搜索"/>
      </ToolbarGroup>
    </Toolbar>*/
        )
    }
}

const MyHeader = connect(mapStateToProps,mapDispatchToProps)(StaticHeader);
export default MyHeader;
