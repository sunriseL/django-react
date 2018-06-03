import React, {Component} from 'react';
import ShoppingCartTable from 'component/ShoppingCartTable/ShoppingCartTable';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import store from '../../store';
import {URL} from '../../config/Api';
import {apiClient} from'util/ApiClient';
const style = {
  margin: 20,
  textAlign: 'center',
};


const mapStateToProps = (state) => {
    return {
        login: store.getState().token != null
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {};
}

class ShoppingCart extends Component {
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    componentWillMount(){
        var com = this;
        apiClient().get(URL + "/api/cart/" + "?username=" + store.getState().username).then(function(response) {
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
            <ShoppingCartTable data={this.state.data}/>
            </div>
            </Paper>
            </div>
        )
    }
}
const View = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
export default View;
