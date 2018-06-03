import React, { Component } from 'react';
import emitter from 'util/event';
import { Table, Icon, Divider, Button } from 'antd';
import 'antd/lib/table/style';
import 'antd/lib/button/style';
const header=[{
    title: 'book_id',
    dataIndex: 'good_id',
    key: 'good_id'
  },{
  title: 'number',
  dataIndex: 'number',
  key: 'number',
}
]



export default class ShoppingCartTable extends Component{
  constructor(props) {
        super(props);
        this.state = {
          header: header,
          message: [],
        };
  }
  componentDidMount() {
        console.log(this.props.data)
    }

  render(){
    return(
    <div>
    <span style={{'textAlign':'center','fontSize':30,'lineHeight':1.5}}>购物车</span>
     <Table  rowKey="good_id" columns={this.state.header} dataSource={this.props.data} />
     <Button
       style={{"margin":20}}
       type="primary"
       onClick={this.addToCart}
     >
       结算
     </Button>
     </div>
    )
  }
}
