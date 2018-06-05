import React, {Component} from 'react';
import OrderTable from 'component/OrderTable/OrderTable';
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

class staticOrder extends Component {
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    componentWillMount(){
        var com = this;
        apiClient().get(URL + "/api/order/" + "?username=" + store.getState().username).then(function(response) {
            console.log("get data : "+response.data)
            console.log(response.data)
            var data = [];
            response.data.forEach(function(value,index) {
              var id = value.id;
              value.goods.forEach(function(gvalue,index) {
                data.push({id:id,gid:gvalue})
                console.log(data)
              })
            })
            console.log("process data")
            console.log(data)
            com.setState({data:data})
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
            <OrderTable data={this.state.data}/>
            </div>
            </Paper>
            </div>
        )
    }
}
const Order = connect(mapStateToProps,mapDispatchToProps)(staticOrder);
export default Order;
