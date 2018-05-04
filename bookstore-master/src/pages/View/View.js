import React, {Component} from 'react';
import GoodTable from 'component/GoodTable/GoodTable'
import Paper from 'material-ui/Paper';
import {apiClient} from'util/ApiClient';
import ShoppingCartTable from 'component/ShoppingCartTable/ShoppingCartTable';
import { URL, LOGIN } from '../../config/Api';
import {connect} from 'react-redux';
const style = {
  margin: 20,
  textAlign: 'center',
};

import store from '../../store';

const mapStateToProps = (state) => {
    return {
        login: store.getState().token != null
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {};
}

class Page1 extends Component {
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    componentWillMount(){
        var com = this;
        apiClient().get(URL + "/api/goods/").then(function(response) {
            console.log("get data : "+response.data)
            com.setState({data:response.data})
        })
    }
    render() {
        if(!this.props.login){
            return (
                <div>
                    请先登陆后查看
                </div>
            )
        }
        return (

          <div>

          <Paper style={style} zDepth={1}>
          <div style={{margin:5}}>
          <GoodTable data={this.state.data}/>
          </div>
          </Paper>
          <Paper style={style} zDepth={1}>
          <div style={{margin:5}}>
          <ShoppingCartTable/>
          </div>
          </Paper>
          </div>
        )
    }
}
const View = connect(mapStateToProps,mapDispatchToProps)(Page1);
export default View;
